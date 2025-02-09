import { jobList } from "../../Data/FindJobsData"
import JobCard from "../FindJobs/JobCard"

const RecommendedJobs = () => {
  return (
    <div>
        <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
        <div className="flex flex-col flex-wrap gap-5">
            {jobList.map((job, index)=>index<4 && <JobCard key={index} {...job}/>)}
        </div>
    </div>
  )
}

export default RecommendedJobs