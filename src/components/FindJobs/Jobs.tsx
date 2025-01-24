import { jobList } from "../../Data/FindJobsData"
import JobCard from "./JobCard"
import Sort from "./Sort"

const Jobs = () => {
  return (
    <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Recommended Jobs</div>
            <Sort/>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
            {
                jobList.map((job, index)=><JobCard key={index} {...job}/>)
            }
        </div>
    </div>
  )
}
export default Jobs