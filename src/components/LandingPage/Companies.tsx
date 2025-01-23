import Marquee from "react-fast-marquee"
import {companies} from "../../Data/Data"

const Companies = () => {
  return (
    <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold text-dark-100">
            Trusted By<span className="text-mchite-400 mb-5"> 1000+ </span>Companies
        </div>
        <Marquee pauseOnHover={true}>
            {
                companies.map((company, index)=><div key={index} className="mt-5 hover:bg-dark-900 rounded-lg">
                    <img className="w-36 mx-12" src={`/Companies/${company}.svg`} alt={company}/>
                </div>)
            }
            <div>
                <img src="" alt=""/>
            </div>
        </Marquee>
    </div>
  )
}

export default Companies