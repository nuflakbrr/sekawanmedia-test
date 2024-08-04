## Sekawan Media Frontend Developer Technical Test

Ini adalah proyek [Next.js](https://nextjs.org/) di-bootstrap dengan [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Teknologi Yang Digunakan

- [Next.js v14 App Router (Typescript)](https://nextjs.org/)
- [Next Internationalization v3](https://next-intl-docs.vercel.app/)
- [React.js v18](https://react.dev/)
- [Tailwindcss v3](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com)
- [Momen.js v2](https://momentjs.com/)
- [Axios](https://axios-http.com/docs/intro/)
- [SWR](https://swr.vercel.app/)

## Mulai Sekarang

Pertama, buka terminal lalu eksekusi perintah berikut:

```bash
npx degit nuflakbrr/sekawanmedia-test#main <nama_proyek>
```

Kedua, install `depedencies` didalam proyek yang sudah Anda klona:

```bash
npm install
# or
yarn install
```

Ketiga, salin `environment variable` pada proyek ini dengan eksekusi perintah berikut:

```bash
cp .env.example .env
```

Keempat, jalankan server pengembangan:

```bash
npm run dev
# or
yarn dev
```

Kelima, buka [http://localhost:3000](http://localhost:3000) pada browser Anda dan lihat hasilnya.

## Proyek Arsitektur

Terdapat beberapa poin penting terkait bagaimana menjalankan proyek arsitektur yang benar. Untuk studi kasus kali ini, Saya telah membuatkan sebuah proyek arsitektur yang baik agar terlihat rapi.

```
/
├── public/
├── src/
│   └── app/
│   │   └── (auth)/
│   │   └── (root)/
│   │   └── api/
│   │   └── favicon.ico
│   │   └── globals.css
│   │   └── layout.tsx
│   │   └── loading.tsx
│   │   └── not-found.tsx
│   └── components/
│   │   └── Common/
│   │   └── Containers/
│   │   └── Mixins/
│   │   └── README.md
│   └── context/
│   └── hooks/
│   └── interfaces/
│   └── lib/
│   └── messages/
│   └── middlewares/
│   └── providers/
│   └── services/
│   └── i18n.ts
└── .env.example
└── .eslintrc.json
└── .gitignore
└── components.json
└── next-env.d.ts
└── next.config.mjs
└── package.json
└── postcss.config.js
└── README.md
└── tailwind.config.ts
└── tsconfig.json
```

### Folder Common

Folder `Common` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Common` Berisikan komponen-komponen kecil, seperti: tombol, dropdown, dll.

### Folder Mixins

Folder `Mixins` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Mixins` Berisikan komponen-komponen yang merupakan gabungan dari komponen-komponen kecil dari folder `Common`. Seperti: navbar (yang berisi beberapa hal umum seperti tombol, dropdown, dll).

### Folder Containers

Folder `Containers` terletak pada `/src/components/`. Lalu didalamnya berisikan apa saja? Folder `Containers` Berisikan kombinasi folder `Common` dan halaman itu sendiri yang membentuk 1 halaman. 1 halaman 1 folder `Containers` agar tetap rapi.

Jika pada 1 container memiliki beberapa section, maka Anda harus memisahkan dan menaruhnya di dalam folder `components` namun masih tetap dalam 1 folder `Containers`. Seperti: `/src/components/Containers/Home/components`.

## Authentikasi

Pada proyek ini sudah menggunakan authentikasi menggunakan React Context. Jika user sudah melakukan authentikasi maka user tidak bisa mengakses halaman `login` atau `register` kembali.

## Kustomisasi React Hooks

Anda dapat menggunakan, serta menambahkan kustom `React Hooks` Anda sendiri pada folder `/src/hooks` yang telah disediakan. terdapat sebuah contoh kustomisasi `React Hooks` untuk `Data Fetching` menggunakan [Axios](https://axios-http.com/docs/intro).

## Rute API

[Rute API](https://nextjs.org/docs/api-routes/introduction) dapat diakses di [http://localhost:3000/api/](http://localhost:3000/api/).

Folder `/src/app/api` dipetakan ke `/api/*`. File dalam direktori ini diperlakukan sebagai [Rute API](https://nextjs.org/docs/api-routes/introduction) bukannya Bereaksi halaman.

## Author Proyek Ini

Nama kontributor dan info kontak,

Naufal Akbar Nugroho  
[@nuflakbrr](https://github.com/nuflakbrr)
[@kbrnugroho](https://instagram.com/kbrnugroho)
