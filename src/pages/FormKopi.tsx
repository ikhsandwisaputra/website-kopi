// src/components/FormKopi.tsx
import { useState } from "react";
import supabase from "../lib/supabaseClient";

const FormKopi: React.FC = () => {
  const [kopi, setKopi] = useState({
    nama: "",
    harga: "",
    deskripsi: "",
  });
  const [file, setFile] = useState<File | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setKopi({ ...kopi, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  let imageUrl = "";

  if (file) {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `kopi/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("kopi-images") // nama bucket di Supabase Storage
      .upload(filePath, file);

    if (uploadError) {
      console.error("Upload gagal:", uploadError);
      alert("Gagal upload gambar: " + uploadError.message);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("kopi-images")
      .getPublicUrl(filePath);

    imageUrl = publicUrlData.publicUrl;
  }

  const { error } = await supabase
    .from("daftar-kopi")
    .insert([
      {
        nama: kopi.nama,
        harga: Number(kopi.harga),
        deskripsi: kopi.deskripsi,
        gambar: imageUrl,
      },
    ]);

  if (error) {
    console.error("Supabase Error:", error);
    alert("Gagal menyimpan data: " + (error.message || "Terjadi kesalahan"));
  } else {
    alert("Data berhasil disimpan!");
    setKopi({ nama: "", harga: "", deskripsi: "" });
    setFile(null);
  }
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 to-orange-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-orange-600">Form Kopi</h1>

        <div>
            <label className="block text-sm font-medium text-gray-700">Gambar Kopi</label>
            <input
  type="file"
  accept="image/*"
  onChange={(e) => setFile(e.target.files?.[0] || null)}
  className="mb-4"
/>
          <label className="block text-sm font-medium text-gray-700">Nama Kopi</label>
          <input
            type="text"
            name="nama"
            value={kopi.nama}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Harga</label>
          <input
            type="number"
            name="harga"
            value={kopi.harga}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea
            name="deskripsi"
            value={kopi.deskripsi}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
        >
          Simpan Kopi
        </button>
      </form>
    </div>
  );
};

export default FormKopi;
