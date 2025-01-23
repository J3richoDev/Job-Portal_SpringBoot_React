import { MultiSelect } from "@mantine/core"
import { dropdownData } from "../../Data/FindJobsData"

const Searchbar = () => {
  return (
    <div>
        <div className="flex justify-around">
        {
            dropdownData.map((item, index)=><div>
                <MultiSelect
                    key={index}
                    variant="unstyled"
                    checkIconPosition="left"
                    data={item.options}
                    searchable
                    leftSectionPointerEvents="none"
                    leftSection={<div className="p-1 bg-dark-900 rounded-full mr-3 text-mchite-400">{<item.icon/>}</div>}
                    pb={150}
                    placeholder={item.title}
                    nothingFoundMessage="Nothing found..."
                    />
            </div>)
        }
        </div>
    </div>
  )
}

export default Searchbar