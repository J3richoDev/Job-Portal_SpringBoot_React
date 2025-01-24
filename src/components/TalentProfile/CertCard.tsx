import { Avatar } from "@mantine/core"

const CertCard = (props:any) => {
  return (
    <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
            <div className="p-2 bg-dark-800 rounded-xl">
                <Avatar/>
            </div>
            <div className="flex flex-col">
                <div className="font-semibold">{props.name}</div>
                <div className="text-xs text-dark-300">{props.issuer}</div>
            </div>
        </div>
        <div className="flex flex-col items-end text-sm text-dark-300">
            <div>{props.issueDate}</div>
            <div>{props.certificateId}</div>
        </div>
    </div>
  )
}

export default CertCard