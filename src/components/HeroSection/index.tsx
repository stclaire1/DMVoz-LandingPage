import React from 'react';
import background from '../../assets/background.jpg';
import logo from '../../assets/white-logo.png';
import { Button } from '../ui/button';
// import sound from '../../assets/sound.png';

interface HeroSectionProps {
}

const HeroSection: React.FC<HeroSectionProps> = ({
}) => {
  return (
    <section className='bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
        <header className='flex flex-col items-center'>
            <img src={logo} alt='Logo DMVoz Produções' className='w-1/3' />
            <h1 className='text-white text-center'>Transforme suas <b>ideias</b> em realidade com a <b>nossa voz</b></h1>
            <Button>Saiba como funciona</Button>
        </header>
    </section>
  );
};

export default HeroSection;
