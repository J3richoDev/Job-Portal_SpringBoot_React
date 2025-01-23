import { Carousel } from "@mantine/carousel"
import { jobCategory } from "../../Data/Data"

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
        <div className="text-4xl text-center font-semibold text-dark-100">
            Browse<span className="text-mchite-400 mb-3"> Job </span>Category
        </div>
        <div className="text-lg mx-auto text-dark-300 text-center w-1/2 mb-8">
            Explore diverse job oppurtunities tailored to your skills. Start your career journey today!
        </div>
        <Carousel slideSize="22%" slideGap="md" controlSize={35} loop
            className="focus-visible:[&_button]:!outline-none [&_button]:!bg-mchite-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
            >
            {
                jobCategory.map((category, index)=><Carousel.Slide>
                    <div key={index} className="flex flex-col items-center w-64 p-5 my-5 min-h-60 border border-mchite-300 rounded-lg text-center hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] transition duration-300 ease-in-out !shadow-mchite-300">
                        <div className="p-2 bg-mchite-400 rounded-full">
                            <img className="h-8 w-8" src="/Category/Digital_marketing.png" alt="" />
                        </div>
                        <div className="text-dark-200 text-xl font-semibold">{category.name}</div>
                        <div className="text-sm text-dark-300 mb-2">{category.desc}</div>
                        <div className="text-mchite-300 text-lg">{category.posted} new job posted</div>
                    </div>
                </Carousel.Slide>)
            }
        </Carousel>
    </div>
  )
}

export default JobCategory