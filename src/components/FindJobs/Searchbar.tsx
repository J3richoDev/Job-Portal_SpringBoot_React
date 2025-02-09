import { Divider, MultiSelect, RangeSlider } from "@mantine/core"
import { dropdownData } from "../../Data/FindJobsData"
import { useState } from "react"

const Searchbar = () => {
  const [value, setValue] = useState<[number, number]>([20, 50]);
  return (
    <div>
        <div className="flex justify-around my-5 px-2">
          {
              dropdownData.map((item, index)=><>
                  <div>
                      <MultiSelect
                          key={index}
                          variant="unstyled"
                          checkIconPosition="left"
                          data={item.options}
                          maxDropdownHeight={200}
                          searchable
                          leftSectionPointerEvents="none"
                          leftSection={<div className="p-1 bg-dark-900 rounded-full mr-3 text-mchite-400">{<item.icon/>}</div>}
                          placeholder={item.title}
                          nothingFoundMessage="Nothing found..."
                          />
                  </div>
                  <Divider size="xs" mr="xs" orientation="vertical"/>
                  </>)
          }
          <div className="w-1/5 [&_.mantine-Slider-label]:translate-y-10">
          <div className="flex text-sm justify-between">
            <div>Salary</div>
            <div>&#8369;{value[0]}k - &#8369;{value[1]}k</div>
          </div>
            <RangeSlider color="mchite.4" value={value}
            labelTransitionProps={{
              transition:'skew-down',
              duration: 150,
              timingFunction: 'linear'
            }} onChange={setValue}
            />
          </div>
        </div>
    </div>
  )
}

export default Searchbar