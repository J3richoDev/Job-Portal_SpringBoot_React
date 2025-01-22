import { Link, useLocation } from "react-router-dom"

const NavLinks = () => {
    const links=[
        {name:"Find Jobs", url:"/find-jobs"},
        {name:"Find Talent", url:"/find-talent"},
        {name:"Upload Job", url:"/upload-job"},
        {name:"About Us", url:"/about"},
    ]
    const location = useLocation();
  return (
    <div className="flex flex-row gap-5 h-full items-center text-dark-300">
        {
            links.map((link, index)=> <div className={`${location.pathname==link.url?"border-mchite-400":"border-transparent"} border-t-[3px] h-full flex items-center`}>
            <Link key={index} to={link.url}> {link.name}</Link>
            </div>)
        }
    </div>
  )
}

export default NavLinks