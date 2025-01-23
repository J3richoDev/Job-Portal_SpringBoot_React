import { IconBrandCraft, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react"
import { footerlinks } from "../Data/Data"

const Footer = () => {
  return (
    <div className="pt-20 pb-5 flex gap-5 justify-around bg-dark-950 font-['poppins']">
        <div className="w-1/4 flex flex-col gap-4">
            <div className="flex gap-1 items-center text-mchite-400">
                <IconBrandCraft className="h-6 w-6" stroke={2.5}/>
                <div className="text-xl font-semibold">Job Hain</div>
            </div>
            <div className="text-sm text-dark-300">Job portal with user profiles, skill updates, certifications, work experience and admin job postings.</div>
            <div className="flex gap-3 text-mchite-400 [&>div]:bg-dark-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:dark-700">
                <div><IconBrandFacebook/></div>
                <div><IconBrandInstagram/></div>
                <div><IconBrandX/></div>
            </div>
        </div>
        {
            footerlinks.map((item, index)=><div key={index}>
                <div className="text-lg font-semibold mb-4 text-mchite-400">{item.title}</div>
                {
                    item.links.map((link, index)=><div key={index} 
                        className="mb-3 text-dark-300 text-sm hover:text-mchite-400 cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">
                        {link}
                    </div>)
                }
            </div>)
        }
    </div>
  )
}

export default Footer