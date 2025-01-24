import { Divider } from "@mantine/core"
import Searchbar from "../components/FindTalent/Searchbar"
import Talents from "../components/FindTalent/Talents"

const FindTalent = () => {
  return (
    <div className="min-h-[100vh] bg-dark-950 font-['poppins']">
        <Divider size="xs" mx="md"/>
        <Searchbar/>
        <Divider size="xs" mx="md"/>
        <Talents/>
    </div>
  )
}

export default FindTalent