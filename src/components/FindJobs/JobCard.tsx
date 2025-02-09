import { Avatar, Divider, Text } from "@mantine/core"
import { IconClockHour3, IconHeart } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const JobCard = (props:any) => {
  return (
    <Link to="/jobs" className="bg-dark-900 p-4 w-80 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-mchite-400">
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <div className="p-2 bg-dark-800 rounded-xl">
                    <Avatar/>
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-dark-300">{props.company} &#x2022; {props.applicants} Applicant</div>
                </div>
            </div>
            <div>
                <IconHeart className="text-dark-300 cursor-pointer"/>
            </div>
        </div>
        <div className="flex items-center gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-dark-800 text-xs [&>div]:text-mchite-400 [&>div]:rounded-lg">
            <div>{props.experience}</div>
            <div className=" whitespace-nowrap">{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text className="!text-xs text-justify !text-dark-300" lineClamp={3}>
            {props.desc}
        </Text>
        <Divider size="xs" color="dark.7"/>
        <div className="flex justify-between">
            <div className="font-semibold text-dark-200">
                &#8369; {props.salary}
            </div>
            <div className="flex gap-1 text-xs text-dark-400 items-center">
                <IconClockHour3 className="h-5 w-5 stroke={1.5}"/> {props.postedDaysAgo} days ago
            </div>
        </div>
    </Link>
  )
}

export default JobCard