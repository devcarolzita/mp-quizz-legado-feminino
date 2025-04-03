import ButtonCard from "../components/ButtonCard"

const Home = () => {
  return (
    <div className="bg-black text-white rounded-2xl p-10 flex items-center flex-col max-w-md lg:max-w-sm text-center gap-5">
     
        <img src="./assets/coroa.png" alt="Ícone de coroa"  />
        <h1 className="text-4xl font-bold">Quiz de mulheres notáveis</h1>
        <p className="text-lg">Teste seus conhecimentos sobre mulheres que fizeram história</p>
        <ButtonCard navigateLink="/quiz" textLink="Iniciar quiz" />

    </div>
  )
}

export default Home
