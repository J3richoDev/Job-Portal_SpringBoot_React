import { Avatar, Button, Divider, Text } from "@mantine/core"
import { IconHeart, IconMapPin } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const TalentCard = (props:any) => {
    return (
        <div className="bg-dark-900 p-4 w-80 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-mchite-400">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-dark-800 rounded-xl">
                        <Avatar/>
                    </div>
                    <div>
                        <div className="font-semibold">{props.name}</div>
                        <div className="text-xs text-dark-300">{props.role} &#x2022; {props.company}</div>
                    </div>
                </div>
                <div>
                    <IconHeart className="text-dark-300 cursor-pointer"/>
                </div>
            </div>
            <div className="flex items-center gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-dark-800 text-xs [&>div]:text-mchite-400 [&>div]:rounded-lg">
                {
                    props.topskills.map((skill:any, index:any)=>
                    <div>
                        <div key={index}>{skill}</div>
                    </div>)
                }
            </div>
            <Text className="!text-xs text-justify !text-dark-300" lineClamp={3}>
                {props.about}
            </Text>
            <Divider size="xs" color="dark.7"/>
                <div className="flex justify-between">
                    <div className="font-semibold text-dark-200">
                        {props.expectedCtc}
                    </div>
                    <div className="flex gap-1 text-xs text-dark-400 items-center">
                        <IconMapPin className="h-5 w-5 stroke={1.5}"/> {props.location} days ago
                    </div>
                </div>
            <Divider size="xs" color="dark.7"/>
            <div className="grid grid-cols-2 gap-2">
                <Link to="/talent-profile">
                    <Button color="mchite.4" variant="outline" fullWidth>Profile</Button>
                </Link>
                <div>
                    <Button color="mchite.4" variant="light" fullWidth>Message</Button>
                </div>
            </div>
        </div>
    )
  }

export default TalentCard