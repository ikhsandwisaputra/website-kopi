import React from "react";

const Tentang: React.FC = () => {
  return (
    <section className="px-6 py-12 md:py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Gambar */}
        <div className="w-full">
          <img
            src="/images/tentang.jpeg"
            alt="Tentang Kami"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Konten */}
        <div className="text-brown-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang KopiKu</h2>
          <p className="text-lg mb-4 leading-relaxed">
            KopiKu hadir sebagai tempat berkumpulnya para pecinta kopi yang mengutamakan kualitas, rasa, dan suasana.
            Sejak didirikan, kami berkomitmen untuk menyajikan kopi terbaik dari biji pilihan nusantara,
            diseduh dengan hati dan penuh kehangatan.
          </p>
          <p className="text-lg leading-relaxed">
            Tidak hanya sekadar tempat ngopi, KopiKu adalah ruang kreatif, tempat ide-ide tumbuh, dan relasi terjalin.
            Kami percaya bahwa secangkir kopi bisa menjadi awal dari banyak hal baik.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
