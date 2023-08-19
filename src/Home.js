import NavBar from "./components/header";
import MainCard from "./components/main";



function Home() {
    return (
        <div style={{maxWidth:"100%", maxHeight:"100%"}}>
            <NavBar />
            <MainCard />
        </div>
    )
}

export default Home;