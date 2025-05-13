const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors()); // Izinkan akses dari frontend
app.use(express.json()); // Untuk parsing JSON

// Dummy data kopi
const daftarKopi = [
  {
    id: 1,
    nama: "Kopi Hitam Nusantara",
    deskripsi: "Kopi khas Indonesia dengan rasa kuat dan pahit yang mantap.",
    harga: 25000,
    gambar: "/kopi1.jpg"
  },
  {
    id: 2,
    nama: "Cappuccino Creamy",
    deskripsi: "Perpaduan kopi, susu, dan foam yang lembut di lidah.",
    harga: 28000,
    gambar: "/kopi2.jpg"
  },
  {
    id: 3,
    nama: "Es Kopi Susu Gula Aren",
    deskripsi: "Sensasi kopi manis dengan gula aren dan es batu segar.",
    harga: 22000,
    gambar: "/kopi3.jpg"
  }
];

// Endpoint API
app.get('/kopi', (req, res) => {
  res.json(daftarKopi);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
