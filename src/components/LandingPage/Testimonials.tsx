import { Avatar, Rating } from "@mantine/core"
import { testimonials } from '../../Data/Data';
import { Carousel } from "@mantine/carousel";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
        <div className="mb-3 text-4xl text-center font-semibold text-dark-100">
            What<span className="text-mchite-400 mb-3"> User </span>says about us?
        </div>
        <Carousel slideSize="22%" slideGap="lg" controlSize={35} loop
            className="focus-visible:[&_button]:!outline-none [&_button]:!bg-mchite-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
            >
            {
            testimonials.map((testimonial, index)=>
            <Carousel.Slide key={index}>
            <div className="flex flex-col gap-3 border border-mchite-400 p-3 rounded-xl mt-10">
                <div className="flex gap-2 items-center">
                            <Avatar className="!h-14 !w-14" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"/>
                            <div>
                                <div className="text-lg text-dark-100 font-semibold">{testimonial.name}</div>
                                <Rating value={testimonial.rating} fractions={2} readOnly/>
                            </div>
                        </div>
                    <div className="text-xs text-dark-300">{testimonial.testimonial}</div>
                </div>
            </Carousel.Slide>)
            }
        </Carousel>
    </div>
  )
}

export default Testimonials