import Companies from "../components/LandingPage/Companies";
import FrontPage from "../components/LandingPage/FrontPage";
import JobCategory from "../components/LandingPage/JobCategory";
import Subscribe from "../components/LandingPage/Subscribe";
import Testimonials from "../components/LandingPage/Testimonials";
import Working from "../components/LandingPage/Working";

const HomePage=()=>{
    return(
        <div className="min-h-[100vh] bg-dark-950 font-['poppins']">
            <FrontPage/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonials/>
            <Subscribe/>
        </div>
    )
}
export default HomePage;