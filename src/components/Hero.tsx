


const Section: React.FC  = () =>{
    return(
        <section className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
  {/* Overlay gelap */}
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

  {/* Konten utama */}
  <div className="relative z-10 text-center text-white px-6 max-w-2xl">
    <p className="text-lg md:text-xl mb-4 font-light">Temukan kenikmatan sejati dalam setiap tegukan</p>
    <h1 className="text-4xl md:text-6xl font-bold mb-6">Kopi Bukan Sekadar Minuman, Tapi Gaya Hidup</h1>
    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition duration-300 shadow-lg">
      Coba Sekarang
    </button>
  </div>
</section>

    )
}
const Hero: React.FC = () => {
    return(
        <>        
        <Section></Section>        
        </>
    )
}

export default Hero;