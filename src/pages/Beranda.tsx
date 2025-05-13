import React, { useEffect, useState } from "react";
import supabase  from "../lib/supabaseClient"; // pastikan path-nya sesuai
import type { Kopi } from "../types/Kopi";
import Hero from "../components/Hero";
import Testimoni from "../components/Testimoni";

const Beranda: React.FC = () => {
  const [daftarKopi, setDaftarKopi] = useState<Kopi[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("daftar-kopi").select("*");
      if (error) {
        console.error("Gagal fetch data kopi:", error.message);
      } else {
        setDaftarKopi(data || []);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-brown-800 mb-6">Daftar Kopi Kami</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {daftarKopi.map((kopi) => (
            <div key={kopi.id} className="bg-white rounded-xl shadow-md p-4">
              {kopi.gambar && (
                <img
                  src={kopi.gambar}
                  alt={kopi.nama}
                  className="rounded-lg mb-4 h-48 w-full object-cover"
                />
              )}
              <h3 className="text-xl font-semibold text-brown-900">{kopi.nama}</h3>
              <p className="text-brown-700 mb-2">{kopi.deskripsi}</p>
              <span className="text-yellow-600 font-bold">
                Rp {Number(kopi.harga).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Testimoni></Testimoni>
    </>
  );
};

export default Beranda;
