# Konfigurasi & Perbaikan Deployment Vercel

Rencana ini merinci penyesuaian dependensi dan berkas konfigurasi agar aplikasi portofolio Saabiq Al Hajar dapat di-deploy dan di-build secara otomatis di platform Vercel tanpa eror peer dependency (`ERESOLVE`).

## User Review & Critical Decisions

> [!IMPORTANT]
> Masalah utama pada log Vercel (`npm error code ERESOLVE`) disebabkan oleh dependensi `vite` dan `esbuild` yang mengalami konflik versi saat proses `npm install` bawaan Vercel berjalan.

- **Keputusan 1 (Konfigurasi Toleransi Dependensi)**: Menerapkan `.npmrc` dengan flag `legacy-peer-deps=true` dan menyelaraskan versi `esbuild` ke `^0.28.0` agar `npm install` di cloud Vercel berjalan mulus tanpa konflik.
- **Keputusan 2 (Standardisasi Single Page Application)**: Menyediakan file `vercel.json` yang secara eksplisit mengatur `outputDirectory: "dist"`, `buildCommand: "npm run build"`, dan aturan `rewrites` ke `/index.html` agar tautan dan modal dapat di-refresh tanpa kendala 404.
- **Keputusan 3 (Pembuatan package-lock.json)**: Membangkitkan `package-lock.json` resmi agar Vercel dapat mengunci dependensi dengan deterministik.

---

## 1. Overview & Core Concept

- **Tujuan**: Memastikan repositori proyek memiliki seluruh berkas konfigurasi Vercel yang valid dan bebas dari konflik npm *peer dependency*.
- **Sasaran**: Proses build otomatis di Vercel (`npm install` -> `npm run build` -> `dist`) selesai dalam status **Ready** (hijau/sukses) tanpa kegagalan.

---

## 2. Rincian Perubahan Konfigurasi

### A. Konfigurasi npm (`.npmrc`)
Menyediakan instruksi eksplisit ke package manager di runner Vercel:
```ini
legacy-peer-deps=true
```

### B. Konfigurasi Vercel (`vercel.json`)
Menetapkan spesifikasi build runner dan penanganan rute browser:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### C. Penyelarasan `package.json` & Pembangkitan `package-lock.json`
- Menyelaraskan dependensi `esbuild` dengan kebutuhan `vite`.
- Menjalankan instalasi lokal untuk menghasilkan `package-lock.json` yang sinkron, sehingga Vercel tidak mencoba menebak resolusi paket.

---

## 3. Diagram Alur Deployment Vercel

```
┌─────────────────────────────────┐
│     Kode Sumber di GitHub       │
│  (package.json, .npmrc, dst.)   │
└────────────────┬────────────────┘
                 │
                 ▼ Webhook / Git Push
┌─────────────────────────────────┐
│         Vercel Runner           │
│                                 │
│  1. Baca .npmrc                 │
│     (legacy-peer-deps=true)     │
│  2. Jalankan npm install        │
│     (Resolusi sukses, kode 0)   │
│  3. Jalankan npm run build      │
│     (Kompilasi Vite -> dist)    │
│  4. Distribusikan aset statis   │
└────────────────┬────────────────┘
                 │
                 ▼
┌─────────────────────────────────┐
│      Website Aktif & Live       │
│    https://[proyek].vercel.app  │
└─────────────────────────────────┘
```

---

## 4. Langkah Pengujian & Verifikasi

1. **Uji Dry-Run npm**: Menjalankan simulasi `npm install --dry-run` untuk membuktikan tidak ada lagi peringatan konflik `ERESOLVE`.
2. **Uji Build Lokal**: Menjalankan `npm run build` untuk memvalidasi pembuatan folder `dist` dan aset visual foto asli.
3. **Uji Validasi TypeScript**: Memastikan `npm run lint` (`tsc --noEmit`) bebas dari eror sintaks.
