import React from 'react';
import logo from '../../assets/white-logo.png';
import { Button } from '../ui/button';
import sound from '../../assets/sound.png';

interface HeroSectionProps {
}

const HeroSection: React.FC<HeroSectionProps> = ({
}) => {
  return (
    <section className='bg-[url(assets/background.png)] bg-cover bg-center'>
      <header className='flex flex-col items-center gap-6 p-10 md:gap-10 md:items-start md:p-20 lg:gap-14 lg:max-w-6xl lg:m-auto 2xl:max-w-4/5 2xl:p-'>
        <img src={logo} alt='Logo DMVoz Produções' className='w-[110px] md:w-[150px] lg:w-1/5' />
        <div className='flex flex-col items-center md:items-start'>
          <h1 className='text-white text-shadow-lg text-center text-2xl sm:text-4xl md:text-start md:text-5xl/snug lg:text-7xl/tight 2xl:text-8xl/tight'>Transforme suas <b className="hover:text-primary">ideias</b> em realidade com a <b className="duration-500 hover:text-primary">nossa voz!</b></h1>
          <img src={sound} alt="Ícone de ondas sonoras" className='max-w-[115px] w-full sm:max-w-1/4' />
        </div>
        <Button size="sm" className="duration-300 hover:bg-secondary cursor-pointer text-xs md:text-base md:p-5 lg:p-6 lg:text-lg 2xl:text-3xl 2xl:p-10">Saiba como funciona</Button>
      </header>
    </section>
  );
};

export default HeroSection;
