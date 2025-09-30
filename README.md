# RKAT System (Laravel + MySQL)

Backend API sistem RKAT berbasis Laravel. Migrasi dari FastAPI + MongoDB ke Laravel + MySQL.

## Fitur

- Manajemen RKAT (CRUD)
- Manajemen User (dengan role)
- StatusCheck endpoint
- Statistik Dashboard

## Install

1. Clone repo ini
2. Jalankan `composer install`
3. Copy `.env.example` ke `.env`, lalu atur koneksi database MySQL
4. Jalankan `php artisan key:generate`
5. Jalankan migrasi dan seeder:
   ```
   php artisan migrate --seed
   ```
6. Jalankan server:
   ```
   php artisan serve
   ```

## Endpoint API

- `GET /api/rkat` - List RKAT
- `POST /api/rkat` - Create RKAT
- `GET /api/rkat/{id}` - Detail RKAT
- `PUT /api/rkat/{id}` - Update RKAT
- `DELETE /api/rkat/{id}` - Hapus RKAT
- `PATCH /api/rkat/{id}/status` - Ubah status RKAT
- `GET /api/status` - List status check
- `POST /api/status` - Create status check
- `GET /api/users` - List user
- `POST /api/users` - Register user
- `GET /api/users/{id}` - Detail user
- `GET /api/dashboard/stats` - Statistik dashboard

## Seeder & Factory

- UserSeeder: Admin & user contoh
- RkatSeeder & StatusCheckSeeder: Dummy data otomatis dengan factory

## Catatan Migrasi

- Password user hash pakai bcrypt
- Struktur tabel sudah menyesuaikan schema MongoDB lama
- Data dari MongoDB bisa diimport manual/export CSV lalu import ke MySQL
