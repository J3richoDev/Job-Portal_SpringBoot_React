import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import Profile from "../components/TalentProfile/Profile"
import { profile } from "../Data/FindTalentData"

const TalentProfile = () => {
  return (
    <div className="min-h-[100vh] bg-dark-950 font-['poppins'] p-4">
        <Divider size="xs" mx="md"/>
        <Link className="my-4 inline-block" to="/find-talent">
            <Button leftSection={<IconArrowLeft size={20}/>} color="mchite.4" variant="light">Back</Button>
        </Link>
        <Divider size="xs" mx="md"/>
        <Profile {...profile}/>
    </div>
  )
}

export default TalentProfile