import { Avatar } from "@mantine/core"

const ExpCard = (props:any) => {
  return (
    <div className="flex flex-col gap-2 my-2">
        <div className="flex justify-between w-full">
            <div className="flex items-center gap-2">
                <div className="p-2 bg-dark-800 rounded-xl">
                    <Avatar/>
                </div>
                <div>
                    <div className="font-semibold">{props.title}</div>
                    <div className="text-xs text-dark-300">{props.company} &bull; {props.location}</div>
                </div>
            </div>
            <div className="text-sm text-dark-300">
                {props.startDate} - {props.endDate}
            </div>
        </div>
        <div className="text-sm text-dark-300 text-justify">
            {props.desc}
        </div>
    </div>
  )
}

export default ExpCard