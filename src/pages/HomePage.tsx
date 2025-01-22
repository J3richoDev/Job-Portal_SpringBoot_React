import Header from "../components/Header";
import LandingPage from './LandingPage';

const HomePage=()=>{
    return(
        <div className="min-h-[100vh] bg-dark-900 font-['poppins']">
            <Header/>
            <LandingPage/>
        </div>
    )
}
export default HomePage;