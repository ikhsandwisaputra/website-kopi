Berikut contoh README yang profesional dan terstruktur untuk proyek website kopi menggunakan React + TypeScript dan Supabase:

---

# ☕ Website Kopi – React + TypeScript + Supabase

Selamat datang di proyek **Website Kopi**, sebuah aplikasi web modern yang dibuat menggunakan **React + TypeScript** untuk frontend dan **Supabase** untuk backend & database. Aplikasi ini menampilkan daftar produk kopi, login pengguna, serta fitur CRUD data kopi dengan gambar.

---

## 🚀 Fitur Utama

* 🔐 Autentikasi pengguna (login/logout)
* 📦 CRUD data kopi (tambah, baca, edit, hapus)
* 🖼️ Upload dan tampilkan gambar produk kopi
* 🎨 UI responsif dan modern menggunakan Tailwind CSS
* ☁️ Terintegrasi penuh dengan Supabase (database, storage, dan auth)

---

## 🛠️ Teknologi yang Digunakan

| Teknologi    | Keterangan                                |
| ------------ | ----------------------------------------- |
| React        | Library utama untuk membangun UI          |
| TypeScript   | Superset JavaScript untuk type safety     |
| Tailwind CSS | Utility-first CSS framework untuk styling |
| Supabase     | Backend-as-a-service (auth, DB, storage)  |
| React Router | Routing SPA antar halaman                 |
| Vite         | Bundler dan dev server                    |

---

## 📁 Struktur Folder

```
src/
├── components/       # Komponen UI reusable
├── pages/            # Halaman utama (Beranda, Login, Tambah Kopi)
├── types/            # Tipe data TypeScript
├── supabase/         # Konfigurasi Supabase client
├── App.tsx           # Root component
├── main.tsx          # Entry point aplikasi
```

---

## ⚙️ Cara Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/username/web-kopi.git
cd web-kopi
```

### 2. Install Dependensi

```bash
npm install
```

### 3. Konfigurasi Supabase

Buat file `.env` di root proyek:

```bash
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> 🔐 Dapatkan URL & Anon Key dari \[Supabase Project Settings > API].

### 4. Jalankan Proyek

```bash
npm run dev
```

Buka di browser: [http://localhost:5173](http://localhost:5173)

---

## 🧪 Supabase Setup

### Tabel: `daftar-kopi`

| Kolom     | Tipe    | Keterangan              |
| --------- | ------- | ----------------------- |
| id        | UUID    | Primary key (auto)      |
| nama      | Text    | Nama kopi               |
| harga     | Integer | Harga kopi dalam rupiah |
| deskripsi | Text    | Deskripsi singkat       |
| gambar    | Text    | URL gambar dari Storage |

### Bucket: `kopi-images`

* Gunakan bucket publik
* Buat folder `kopi/` opsional
* Aktifkan policy upload untuk pengguna authenticated

### Auth

* Aktifkan email login
* Tambahkan policy `SELECT`, `INSERT`, `DELETE` sesuai kebutuhan untuk role `authenticated` pada tabel

---

## 📸 Screenshot

### 💻 Beranda

Menampilkan daftar kopi dengan gambar, deskripsi, dan harga.

### ➕ Form Tambah Kopi

Form input nama, harga, deskripsi, dan upload gambar.

---

## 📌 TODO (Optional)

* ✅ Login & logout dengan session
* ✅ Validasi form tambah kopi
* ⬜️ Edit & Hapus data kopi
* ⬜️ Role admin untuk kelola produk

---

## 👨‍💻 Kontributor

* \[Nama Anda] - Developer
* [@GitHubHandle](https://github.com/username)

---

## 📄 Lisensi

Proyek ini menggunakan lisensi [MIT](LICENSE).

---

Jika kamu butuh versi Markdown-nya untuk langsung digunakan, beri tahu saja, saya bisa kirimkan dalam format `.md`. Mau ditambahkan link deploy juga?
