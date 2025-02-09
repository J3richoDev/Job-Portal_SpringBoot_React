import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import JobDesc from "../components/JobDesc/JobDesc"
import RecommendedJobs from "../components/JobDesc/RecommendedJobs"

const JobDescPage = () => {
  return (
    <div className="min-h-[100vh] bg-dark-950 font-['poppins'] p-4">
        <Divider size="xs" mx="md"/>
        <Link className="my-4 inline-block" to="/find-jobs">
            <Button leftSection={<IconArrowLeft size={20}/>} color="mchite.4" variant="light">Back</Button>
        </Link>
        <div className="flex gap-5 justify-around">
            <JobDesc/>
            <RecommendedJobs/>
        </div>
    </div>
  )
}

export default JobDescPage