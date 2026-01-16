import logo from '../../assets/images/white-logo.png';
import { Button } from '../ui/button';
import sound from '../../assets/images/sound.png';

const HeroSection = () => {
  return (
    <header className='bg-[url(assets/images/background.png)] bg-cover bg-center'>
      <div className='flex flex-col items-center gap-6 p-10 lg:px-20 xl:gap-12 2xl:px-30 2xl:max-w-[1580px] 2xl:m-auto' >
          <img src={logo} alt='Logo DMVoz Produções' className='w-[110px] md:w-[150px] lg:w-1/6' />
          <div className='flex flex-col items-center'>
            <h1 className='text-white text-shadow-lg text-center text-2xl sm:text-4xl md:text-5xl/snug lg:text-7xl/tight 2xl:text-8xl/tight'>Transforme suas <b className="duration-700 hover:text-primary">ideias</b> em realidade com a <b className="duration-700 hover:text-primary">nossa voz!</b></h1>
            <img src={sound} alt="Ícone de ondas sonoras" className='max-w-[115px] w-full sm:max-w-1/4 2xl:max-w-1/5' />
          </div>
          <Button size="sm" className="duration-300 hover:bg-secondary cursor-pointer text-xs md:text-base md:p-5 lg:p-6 lg:text-lg 2xl:text-2xl 2xl:p-8">Saiba como funciona</Button>
      </div>
    </header>
  );
};

export default HeroSection;
