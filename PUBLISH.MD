# Panduan Publikasi Banyu Icons

## Persiapan Sebelum Publish

### Step 1: Verifikasi Status Repository
```bash
# Pastikan working directory bersih
git status

# Pastikan di branch main/master
git checkout main
git pull origin main
```

### Step 2: Jalankan Tests dan Quality Checks
```bash
# Install dependencies jika belum
pnpm install

# Jalankan linting
pnpm lint

# Jalankan tests (jika ada)
pnpm test

# Verifikasi build berhasil
pnpm build
```

## Proses Publishing

### Step 3: Login ke NPM
```bash
npm login
# Masukkan username, password, dan email NPM account
```

### Step 4: Buat Changeset (jika belum ada)
```bash
# Buat changeset untuk dokumentasi perubahan
npx changeset

# Pilih paket yang akan di-update
# Pilih tipe perubahan (patch/minor/major)
# Tulis deskripsi perubahan
```

### Step 5: Update Versi dan Generate Changelog
```bash
npx changeset version
```

### Step 6: Review Perubahan
```bash
# Review file yang berubah
git diff

# Pastikan version di package.json sudah benar
# Pastikan CHANGELOG.md sudah ter-update
```

### Step 7: Commit dan Push Versi Baru
```bash
git add .
git commit -m "chore: release new version"
git push origin main
```

### Step 8: Publish ke NPM
```bash
npx changeset publish
```

### Step 9: Verifikasi Publikasi
```bash
# Cek apakah paket sudah terpublikasi
npm view @jala-banyu/icons

# Test install di project lain
npm install @jala-banyu/icons@latest
```

## Troubleshooting

### Jika Ada Error saat Publish:
- Pastikan sudah login ke NPM (`npm whoami`)
- Pastikan memiliki permission untuk publish paket
- Cek apakah versi sudah ada di NPM registry

### Jika Perlu Rollback:
- Gunakan `npm unpublish` dalam 72 jam pertama
- Atau publish versi patch baru untuk fix issue

## Best Practices

1. **Selalu test build sebelum publish**
2. **Review changeset sebelum version bump**
3. **Gunakan semantic versioning yang benar**
4. **Update dokumentasi jika diperlukan**
5. **Backup atau tag release di Git**