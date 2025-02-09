import { talentList } from "../../Data/FindTalentData"
import TalentCard from "../FindTalent/TalentCard"

const RecommendTalent = () => {
  return (
    <div>
        <div className="text-xl font-semibold mb-5">Recommended Talent</div>
        <div className="flex flex-col flex-wrap gap-5">
            {talentList.map((talent, index)=>index<4 && <TalentCard key={index} {...talent}/>)}
        </div>
    </div>
  )
}

export default RecommendTalent