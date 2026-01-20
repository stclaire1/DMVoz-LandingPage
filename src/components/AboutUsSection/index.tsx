import mainImage from "../../assets/images/pictures/main.jpg"
import photo2 from "../../assets/images/pictures/working.png"
import photo3 from "../../assets/images/pictures/soundTable.jpg"
import photo4 from "../../assets/images/pictures/microphone.jpg"
import photo5 from "../../assets/images/pictures/setup.jpg"
import photo6 from "../../assets/images/pictures/award.jpg"

const AboutUsSection = () => {
    return (
        <section className="w-full flex gap-20 p-10 sm:px-15 sm:py-15 md:flex-row md:items-center lg:px-20 lg:py-20 xl:px-30 xl:gap-26 2xl:max-w-[1580px]">
            <div className="flex flex-col gap-12 md:w-1/2 md:gap-7 xl:w-3/5 2xl:w-1/2">
                <div>
                    <h2 className="text-2xl font-bold w-fit border-t-2 border-primary pt-2 mb-5 lg:text-4xl 2xl:text-5xl">Sobre nós</h2>
                    <p className="text-justify text-sm lg:text-base"><b>Denys</b> é a voz e a alma da DMVoz! Com vasta experiência no mercado publicitário, atua como <b>locutor, produtor e diretor,</b> oferecendo serviços de alta qualidade diretamente de seu Studio.</p>
                </div>
                <div className="border border-primary rounded-lg p-5">
                    <h2 className="text-2xl font-semibold text-primary mb-3">Missão</h2>
                    <p className="text-justify text-sm lg:text-base">Nossa missão é fornecer serviços de <b>locução, produção e direção</b> que agreguem valor ao mercado publicitário. Com dedicação e profissionalismo, buscamos criar conteúdos que envolvam e impactem o público, ajudando nossos clientes a alcançarem seus objetivos a partir da nossa comunicação.</p>
                </div>
                <div className="border border-secondary rounded-lg p-5 md:hidden xl:block">
                    <h2 className="text-2xl font-semibold text-secondary mb-3">Visão</h2>
                    <p className="text-justify text-sm lg:text-base">Ser reconhecido como uma referência no mercado publicitário, destacando-se pela <b>qualidade, inovação e comprometimento</b> em todos os projetos. Almejamos expandir nosso alcance, consolidando parcerias duradouras e inspirando confiança em todos os segmentos em que atuamos.</p>
                </div>
            </div>
            <div className="hidden md:flex md:flex-col md:w-1/2">
                <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-auto">
                    <img
                        src={mainImage}
                        alt="Sobre nós principal"
                        className="rounded-xl object-cover col-span-2 row-span-2 h-full"
                    />

                    <img
                        src={photo2}
                        alt="Sobre nós 2"
                        className="rounded-xl object-cover h-full"
                    />
                    <img
                        src={photo3}
                        alt="Sobre nós 2"
                        className="rounded-xl object-cover"

                    />

                    <img
                        src={photo4}
                        alt="Sobre nós 3"
                        className="rounded-xl object-cover" 

                    />

                    <img
                        src={photo5}
                        alt="Sobre nós 6"
                        className="rounded-xl object-cover"
                    />

                    <img
                        src={photo6}
                        alt="Sobre nós 5"
                        className="rounded-xl object-cover"

                    />
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection;