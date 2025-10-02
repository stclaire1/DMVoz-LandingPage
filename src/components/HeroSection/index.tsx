import React from 'react';
import logo from '../../assets/white-logo.png';
import { Button } from '../ui/button';
import sound from '../../assets/sound.png';

interface HeroSectionProps {
}

const HeroSection: React.FC<HeroSectionProps> = ({
}) => {
  return (
    <section className='absolute bg-[url(assets/background.png)] bg-cover bg-center'>
        <header className='flex flex-col items-center gap-6 p-6'>
            <img src={logo} alt='Logo DMVoz Produções' className='w-[110px]' />
              <div className='flex flex-col items-center'>
                <h1 className='text-white text-center text-md'>Transforme suas <b className="hover:text-primary">ideias</b> em realidade com a <b className="hover:text-primary">nossa voz!</b></h1>
                <img src={sound} alt="Sound Wave" className='w-1/4' />
              </div>
            <Button size="sm" className="hover:bg-secondary cursor-pointer text-xs">Saiba como funciona</Button>
        </header>
    </section>
  );
};

export default HeroSection;
