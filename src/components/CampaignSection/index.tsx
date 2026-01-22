import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import type { Campaigns } from "../../types/campaign";
import campaigns from "../../data/campaigns.json";
import Autoplay from "embla-carousel-autoplay"

const CampaignSection = () => {
    return (
        <section className="w-full flex flex-col gap-10 md:gap-16 p-10 sm:px-15 sm:py-15 lg:px-20 lg:py-20 xl:px-30 2xl:max-w-[1580px]">
            <div className="flex flex-col items-center gap-4 2xl:gap-6">
                <h2 className="text-2xl font-bold w-min border-t-2 border-primary pt-2 lg:text-4xl 2xl:text-5xl">Campanhas</h2>
                <p className="text-center text-sm max-w-xs md:text-base md:max-w-sm lg:text-lg 2xl:text-xl 2xl:max-w-md">Conheça algumas de nossas campanhas, <b>passe para o lado</b> e veja mais!</p>
            </div>
            <div>
                <Carousel className="w-full mx-auto"
                plugins={[
                    Autoplay({
                        delay: 5000,
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,
                    }),
                ]}
                opts={{
                    loop: true
                }}>
                    <CarouselContent>
                        {(campaigns as Campaigns).map((campaign) => (
                            <CarouselItem key={campaign.videoId}>
                                <div className="flex flex-col items-center gap-3 md:flex-row md:gap-10 lg:px-3 2xl:gap-24">
                                    <iframe
                                        className="rounded-sm aspect-square min-[450px]:aspect-video md:max-w-1/2 lg:max-w-3/5 xl:max-w-1/2"
                                        src={`https://www.youtube.com/embed/${campaign.videoId}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    />
                                    <div className="flex flex-col gap-4 text-center md:text-start">
                                        <h3 className="mt-3 text-xl font-semibold md:mt-0 lg:text-2xl 2xl:text-3xl">{campaign.title}</h3>
                                        <p className="text-justify text-sm lg:text-base">{campaign.description}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="hidden cursor-pointer lg:flex lg:border-0 lg:shadow-none"/>
                    <CarouselPrevious className="hidden cursor-pointer lg:flex lg:border-0 lg:shadow-none"/>
                </Carousel>
            </div>
        </section>
    )
}

export default CampaignSection;