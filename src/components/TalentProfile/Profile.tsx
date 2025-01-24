import { Button, Divider } from "@mantine/core"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"
import ExpCard from "./ExpCard"
import CertCard from "./CertCard"

const Profile = (props:any) => {
  return (
    <div className="w-2/3">
        <div className="relative">
            <img className="rounded-t-2xl" src="" alt="" />
            <img className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3" src="" alt="" />
        </div>
        <div className="px-3 mt-16">
            <div className="text-3xl font-semibold flex justify-between">
                {props.name}
                <Button color="mchite.4" variant="light">Message</Button>
            </div>
            <div className="text-xl flex gap-1 items-center">
                <IconBriefcase className="h-5 w-5" stroke={1.5}/> 
                {props.role} &bull; {props.comapany}
            </div>
            <div className="text-lg flex gap-1 items-center text-dark-300">
                <IconMapPin className="h-5 w-5" stroke={1.5}/>
                {props.location}
            </div>
        </div>
        <Divider size="xs" my="xl"/>
        <div className="">
            <div className="text-2xl font-semibold mb-3">About</div>
            <div className="text-sm text-dark-300 text-justify">
                {props.about}
            </div>
        </div>
        <Divider size="xs" my="xl"/>
        <div className="">
            <div className="text-2xl font-semibold mb-3">Skills</div>
            <div className="flex flex-wrap gap-2">
                {
                    props.skills.map((skill:any, index:any)=>
                        <div key={index} className="bg-mchite-300 bg-opacity-15 font-medium rounded-3xl text-mchite-400 px-3 py-1">
                            {skill}
                        </div>)
                }
            </div>
        </div>
        <Divider size="xs" my="xl"/>
        <div className="">
            <div className="text-2xl font-semibold mb-3">Experience</div>
            <div className="flex flex-wrap gap-5">
                {
                props.experiences.map((experience:any, index:any)=>
                    <ExpCard key={index} {...experience}/>
                )
                }
                
            </div>
        </div>
        <Divider size="xs" my="xl"/>
        <div className="">
            <div className="text-2xl font-semibold mb-3">Certifications</div>
            <div className="flex flex-wrap gap-5">
                {
                props.certifications.map((cert:any, index:any)=>
                    <CertCard key={index} {...cert}/>
                )
                }
            </div>
        </div>
    </div>
  )
}

export default Profile