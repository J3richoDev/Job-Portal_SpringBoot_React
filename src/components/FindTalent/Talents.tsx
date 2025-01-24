import { talentList } from "../../Data/FindTalentData"
import Sort from "../FindJobs/Sort"
import TalentCard from "./TalentCard"

const Talents = () => {
  return (
    <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Recommended Jobs</div>
            <Sort/>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-5">
            {
                talentList.map((talent, index)=><TalentCard key={index} {...talent}/>)
            }
        </div>
    </div>
  )
}

export default Talents