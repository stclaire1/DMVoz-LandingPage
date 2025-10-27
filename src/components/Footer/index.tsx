import logo from '../../assets/images/white-logo.png'
import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-zinc-900 flex flex-col items-center px-10 py-5 gap-4 sm:flex-row sm:justify-between sm:px-15 lg:px-20 xl:px-30 2xl:px-40'>
            <img 
                src={logo}
                alt="Logo DMVoz Produções"
                className='w-[90px] md:w-[120px] cursor-pointer'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <div className='flex flex-col gap-4 sm:flex-col-reverse sm:border-l sm:border-gray-400 sm:pl-6'>
                <p className='text-white text-xs italic text-center border-b border-gray-400 pb-4 sm:border-none sm:pb-0'>© 2025 DMVoz Produções. Todos os direitos reservados.</p>
                <nav className='flex justify-center w-full gap-3 sm:justify-start'>
                    <a 
                        className='text-white hover:text-primary transition-colors duration-200'
                        href="https://wa.me/5534998125957"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaWhatsapp size={20} />
                    </a>
                    <a 
                        className='text-white hover:text-primary transition-colors duration-200'
                        href="https://www.youtube.com/@amaral5446"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaYoutube size={20} />
                    </a>
                    <a 
                        className='text-white hover:text-orange-500 transition-colors duration-200'
                        href="https://www.instagram.com/dmvozproducoes/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaInstagram size={20} />
                    </a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;