import { Button } from '../ui/button';

const ContactUsSection = () => {
    return (
        <section className="relative w-full bg-cover bg-center bg-[url(assets/images/background-recording.jpg)]">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xs" />
            <div className='flex flex-col items-center gap-6 py-10 sm:gap-10 sm:py-15 md:gap-12 lg:px-20 lg:py-20 xl:px-30 2xl:px-40 relative z-10'>
                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-white text-shadow-lg text-2xl font-bold lg:text-4xl 2xl:text-5xl">Fale conosco!</h2>
                    <p className="text-white text-shadow-lg text-base text-center px-10 max-w-md lg:text-lg lg:px-0">Agora é com você! Deixe sua mensagem e entraremos em contato em breve.</p>
                </div>
                <form action="" className="flex flex-col max-w-2xl w-full px-10 gap-7 pb-10 sm:pb-15 sm:px-15 lg:px-0">
                    <span className="flex flex-col gap-2">
                        <label htmlFor="" className="text-white text-sm">Nome</label>
                        <input type="text" placeholder="Seu nome completo" className="border border-white rounded-sm p-3 placeholder-white placeholder:opacity-85 placeholder:text-sm placeholder:italic"/>
                    </span>
                    <span className="flex flex-col gap-2">
                        <label htmlFor="" className="text-white text-sm">Telefone</label>
                        <input type="tel" placeholder="(XX) XXXX-XXXX" className="border border-white rounded-sm p-3 placeholder-white placeholder:opacity-85 placeholder:text-sm placeholder:italic"/>
                    </span>
                    <span className="flex flex-col gap-2">
                        <label htmlFor="" className="text-white text-sm">Email</label>
                        <input type="email" placeholder="Informe seu email" className="border border-white rounded-sm p-3 placeholder-white placeholder:opacity-85 placeholder:text-sm placeholder:italic"/>
                    </span>
                    <span className="flex flex-col gap-2 mb-6">
                        <label htmlFor="" className="text-white text-sm">Mensagem</label>
                        <textarea placeholder="Digite sua dúvida, sugestão ou solicite um orçamento" rows={4} className="border border-white rounded-sm p-3 placeholder-white placeholder:opacity-85 placeholder:text-sm placeholder:italic"/>
                    </span>
                    <Button size="lg" className="duration-300 hover:bg-secondary cursor-pointer text-xs md:text-base md:p-5 lg:p-6 2xl:text-lg">Enviar agora</Button>
                </form>
            </div>
        </section>
    )
}

export default ContactUsSection;