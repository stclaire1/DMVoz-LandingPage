import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "../ui/carousel";
import type { Testimonials } from "../../types/testimonials";
import TestimonialCard from "./components/TestimonialCard";
import testimonialsData from "../../data/testimonials.json";
import { logoMap } from "../../lib/logoMap";
import Autoplay from "embla-carousel-autoplay"
import React from "react";

const TestimonialsSection = () => {

    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    console.log("current :", current);

    React.useEffect(() => {
        if (!api) {
        return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <section className='w-full bg-[url(assets/images/background-orange.jpg)] bg-cover bg-center'>
            <div className="flex flex-col items-center gap-12 lg:px-0 2xl:max-w-[1540px] 2xl:px-30 mx-auto">
                <div className='flex flex-col items-center gap-6 text-center mt-10 mx-10 max-w-xs sm:mt-13 lg:mt-18 lg:mx-0 lg:max-w-xl'>
                    <h2 className='text-[#1D0200] text-2xl font-bold lg:text-4xl 2xl:text-5xl'>Veja o que os nossos parceiros tem a dizer</h2>
                    <p className="text-[#1D0200] text-sm text-justify sm:text-center lg:text-lg">Conheça quem já passou por aqui e saiba como é a experiência de trabalhar conosco.</p>
                </div>

                <div className="w-full pb-10 sm:pb-15 lg:pb-20 2xl:px-15">
                    <Carousel
                    setApi={setApi}
                    plugins={[
                        Autoplay({
                            delay: 5000,
                            stopOnInteraction: false,
                            stopOnMouseEnter: true,
                        }),
                    ]}
                    opts={{
                        loop: true
                    }}
                    className="w-full">
                        <CarouselContent className="2xl:px-8">
                            {(testimonialsData as Testimonials).map((testimonial, index) => (
                                <CarouselItem key={index} className="pb-4 basis-8/12 sm:basis-1/2 min-[500px]:basis-6/12 md:basis-4/12 lg:basis-2/7 xl:basis-1/4 2xl:basis-2/6">
                                    <div className={`transition-transform duration-500 h-full ${
                                    index !== current - 1
                                        ? "scale-[0.85] opacity-60 sm:scale-[0.8] md:scale-[0.75] lg:scale-[0.7]"
                                        : "scale-100"
                                    }`}>
                                        <TestimonialCard 
                                            author={testimonial.author}
                                            testimonial={testimonial.testimonial}
                                            logo={logoMap[testimonial.logo]}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden 2xl:flex cursor-pointer bg-transparent border-0 shadow-none"/>
                        <CarouselNext className="hidden 2xl:flex cursor-pointer bg-transparent border-0 shadow-none"/>
                    </Carousel>
                </div>
            </div>

        </section>
    )
}

export default TestimonialsSection;