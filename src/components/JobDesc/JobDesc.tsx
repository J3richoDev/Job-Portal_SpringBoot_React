import { ActionIcon, Avatar, Button, Divider } from '@mantine/core';
import { IconHeart } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { card, desc, skills } from '../../Data/JobDescData';
import DOMPurify from 'dompurify';

const JobDesc = () => {
    const data = DOMPurify.sanitize(desc)
    return (
    <div className="w-2/3">
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <div className="p-3 bg-dark-800 rounded-xl">
                    <Avatar size="lg"/>
                </div>
                <div>
                    <div className="font-semibold text-2xl">Software developer</div>
                    <div className="text-lg text-dark-300">Google &bull; 3 days ago &#x2022; 10 Applicant</div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <Link to="/apply-job">
                    <Button color="mchite.4" size="sm" variant="light">Apply</Button>
                </Link>
                <IconHeart className="text-mchite-400 cursor-pointer"/>
            </div>
        </div>
        <Divider my="xl"/>
        <div className='flex justify-around'>
            {
                card.map((item, index)=><div key={index} className='flex flex-col items-center'>
                <ActionIcon className='!h-12 !w-12' color='mchite.4' variant='light' radius='xl' aria-label={item.name}>
                    <item.icon className='h-4/5 w-4/5' stroke={1.5}/>
                </ActionIcon>
                <div className='text-sm text-dark-300'>{item.name}</div>
                <div className='font-semibold'>{item.value}</div>
            </div>)
            }
        </div>
        <Divider my="xl"/>
        <div>
            <div className='text-xl font-semibold mb-5'>Required Skills</div>
            <div className='flex flex-wrap gap-3'>
                {
                    skills.map((skill,index)=>
                    <ActionIcon key={index} className='!h-fit !w-fit !font-medium !text-sm' color='mchite.4' variant='light' radius='xl' p='xs'>
                    {skill}
                </ActionIcon>)
                }
            </div>
        </div>
        <Divider my="xl"/>
        <div>
            <div className='[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-dark-200 [&_*]:text-dark-300 [&_p]:text-justify [&_li]:marker:text-mchite-400 [&_li]:mb-1' dangerouslySetInnerHTML={{__html:data}}></div>
        </div>
        <Divider my="xl"/>
        <div>
            <div className='text-xl font-semibold mb-5'>About the company</div>
            <div className="flex justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="p-3 bg-dark-800 rounded-xl">
                        <Avatar size="md"/>
                    </div>
                    <div>
                        <div className="font-medium text-lg">Google</div>
                        <div className="text-lg text-dark-300">10k+ Employees</div>
                    </div>
                </div>
                    <Link to="">
                        <Button color="mchite.4" size="sm" variant="light">Company Page</Button>
                    </Link>
            </div>
            <div className='text-dark-300 text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima debitis porro, distinctio, consectetur cumque aspernatur eum itaque quaerat est doloribus amet optio non suscipit dolorem saepe, officiis dicta. Itaque, quod!
            </div>
        </div>
    </div>
  )
}

export default JobDesc