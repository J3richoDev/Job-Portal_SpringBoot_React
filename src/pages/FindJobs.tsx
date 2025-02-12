import { Divider } from "@mantine/core"
import Jobs from "../components/FindJobs/Jobs"
import Searchbar from "../components/FindJobs/Searchbar"

const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-dark-950 font-['poppins']">
        <Divider size="xs" mx="md"/>
        <Searchbar/>
        <Divider size="xs" mx="md"/>
        <Jobs/>
    </div>
  )
}

export default FindJobs