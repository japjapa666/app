from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, date


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# RKAT Models
class RKATCreate(BaseModel):
    kode_lapangan: str
    unit_kerja: str
    indikalisasi: str
    program_nu: str
    program_sub_nu: str
    tujuan: str
    mataanme_rancangan: str
    julu_kegiatan: str
    jadwal_pelaksanaan: str
    ice: str
    lokasi_pelaksanaan: str
    latar_belakang: str
    indikator_kerja: str
    status: str = "pending"  # pending, approved, rejected

class RKAT(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    kode_lapangan: str
    unit_kerja: str
    indikalisasi: str
    program_nu: str
    program_sub_nu: str
    tujuan: str
    mataanme_rancangan: str
    julu_kegiatan: str
    jadwal_pelaksanaan: str
    ice: str
    lokasi_pelaksanaan: str
    latar_belakang: str
    indikator_kerja: str
    status: str = "pending"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

# User Models
class UserCreate(BaseModel):
    username: str
    email: str
    password: str
    role: str = "user"  # user, admin

class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    username: str
    email: str
    password: str
    role: str = "user"
    created_at: datetime = Field(default_factory=datetime.utcnow)

class UserProfile(BaseModel):
    id: str
    username: str
    email: str
    role: str
    created_at: datetime

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "API RKAT System"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# RKAT Endpoints
@api_router.post("/rkat", response_model=RKAT)
async def create_rkat(input: RKATCreate):
    rkat_dict = input.dict()
    rkat_obj = RKAT(**rkat_dict)
    _ = await db.rkat.insert_one(rkat_obj.dict())
    return rkat_obj

@api_router.get("/rkat", response_model=List[RKAT])
async def get_all_rkat():
    rkat_list = await db.rkat.find().to_list(1000)
    return [RKAT(**rkat) for rkat in rkat_list]

@api_router.get("/rkat/{rkat_id}", response_model=RKAT)
async def get_rkat(rkat_id: str):
    rkat = await db.rkat.find_one({"id": rkat_id})
    if not rkat:
        raise HTTPException(status_code=404, detail="RKAT not found")
    return RKAT(**rkat)

@api_router.put("/rkat/{rkat_id}", response_model=RKAT)
async def update_rkat(rkat_id: str, input: RKATCreate):
    rkat = await db.rkat.find_one({"id": rkat_id})
    if not rkat:
        raise HTTPException(status_code=404, detail="RKAT not found")
    
    update_data = input.dict()
    update_data["updated_at"] = datetime.utcnow()
    
    await db.rkat.update_one({"id": rkat_id}, {"$set": update_data})
    
    updated_rkat = await db.rkat.find_one({"id": rkat_id})
    return RKAT(**updated_rkat)

@api_router.delete("/rkat/{rkat_id}")
async def delete_rkat(rkat_id: str):
    result = await db.rkat.delete_one({"id": rkat_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="RKAT not found")
    return {"message": "RKAT deleted successfully"}

@api_router.patch("/rkat/{rkat_id}/status")
async def update_rkat_status(rkat_id: str, status: str):
    rkat = await db.rkat.find_one({"id": rkat_id})
    if not rkat:
        raise HTTPException(status_code=404, detail="RKAT not found")
    
    await db.rkat.update_one(
        {"id": rkat_id}, 
        {"$set": {"status": status, "updated_at": datetime.utcnow()}}
    )
    
    updated_rkat = await db.rkat.find_one({"id": rkat_id})
    return RKAT(**updated_rkat)

# User Endpoints
@api_router.post("/users", response_model=UserProfile)
async def create_user(input: UserCreate):
    # Check if user already exists
    existing_user = await db.users.find_one({"email": input.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    user_dict = input.dict()
    user_obj = User(**user_dict)
    _ = await db.users.insert_one(user_obj.dict())
    
    return UserProfile(
        id=user_obj.id,
        username=user_obj.username,
        email=user_obj.email,
        role=user_obj.role,
        created_at=user_obj.created_at
    )

@api_router.get("/users", response_model=List[UserProfile])
async def get_all_users():
    users = await db.users.find().to_list(1000)
    return [UserProfile(
        id=user["id"],
        username=user["username"],
        email=user["email"],
        role=user["role"],
        created_at=user["created_at"]
    ) for user in users]

@api_router.get("/users/{user_id}", response_model=UserProfile)
async def get_user(user_id: str):
    user = await db.users.find_one({"id": user_id})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return UserProfile(
        id=user["id"],
        username=user["username"],
        email=user["email"],
        role=user["role"],
        created_at=user["created_at"]
    )

# Dashboard Statistics
@api_router.get("/dashboard/stats")
async def get_dashboard_stats():
    total_rkat = await db.rkat.count_documents({})
    pending_rkat = await db.rkat.count_documents({"status": "pending"})
    approved_rkat = await db.rkat.count_documents({"status": "approved"})
    rejected_rkat = await db.rkat.count_documents({"status": "rejected"})
    total_users = await db.users.count_documents({})
    
    return {
        "total_rkat": total_rkat,
        "pending_rkat": pending_rkat,
        "approved_rkat": approved_rkat,
        "rejected_rkat": rejected_rkat,
        "total_users": total_users
    }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
