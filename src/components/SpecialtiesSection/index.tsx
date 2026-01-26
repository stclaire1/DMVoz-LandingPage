import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaPlay, FaTimes, FaDownload } from 'react-icons/fa';
import ResponsiveAudioPlayer from './components/ResponsiveAudioPlayer';
import audiosData from '../../data/audios.json';
import type { Audios } from '../../types/audio';
import { Button } from '../ui/button';
import { audioMap } from '../../lib/audioMap';

const SpecialtiesSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({});

    const audioRefs = useRef<Array<React.RefObject<HTMLAudioElement>>>([]);

    const handleEnded = useCallback((index: number) => {
        setIsPlaying(prev => ({ ...prev, [index]: false }));
    }, []);

    useEffect(() => {
        audioRefs.current.forEach((audioRef, index) => {
            const audioEl = audioRef?.current;
            if (audioEl) {
                const wasPlaying = !audioEl.paused;
                if (index === activeIndex) {
                    if (!wasPlaying) {
                        audioEl.play().catch((error: any) => console.error("Erro ao tocar áudio:", error));
                        setIsPlaying(prev => ({ ...prev, [index]: true }));
                    }
                } else {
                    if (wasPlaying) {
                        audioEl.pause();
                        setIsPlaying(prev => ({ ...prev, [index]: false }));
                    }
                }
                // Adiciona listener para evento ended apenas uma vez
                const endedListener = () => handleEnded(index);
                audioEl.removeEventListener('ended', endedListener);
                audioEl.addEventListener('ended', endedListener);
            }
        });
        // Remove listeners ao desmontar
        return () => {
            audioRefs.current.forEach((audioRef, index) => {
                const audioEl = audioRef?.current;
                if (audioEl) {
                    const endedListener = () => handleEnded(index);
                    audioEl.removeEventListener('ended', endedListener);
                }
            });
        };
    }, [activeIndex, handleEnded]);

    const openPlayer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const togglePlayPause = (index: number) => {
        const audioEl = audioRefs.current[index]?.current;
        if (audioEl) {
            if (audioEl.paused) {
                audioEl.play();
                setIsPlaying(prev => ({ ...prev, [index]: true }));
            } else {
                audioEl.pause();
                setIsPlaying(prev => ({ ...prev, [index]: false }));
            }
        }
    };

    if (audioRefs.current.length !== audiosData.length) {
        audioRefs.current = Array(audiosData.length)
            .fill(null)
            .map((_, i) => audioRefs.current[i] || (typeof window !== 'undefined' ? (React.createRef<HTMLAudioElement>()) : null));
    }

    return (
        <section className="w-full bg-[url(assets/images/background2.png)] bg-cover bg-center">
            <div className='flex flex-col items-center gap-6 py-10 sm:gap-10 sm:px-15 sm:py-15 md:gap-12 lg:px-20 lg:py-20 xl:px-30 2xl:px-40'>
                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-white text-shadow-lg text-2xl font-bold lg:text-4xl 2xl:text-5xl">Especialidades</h2>
                    <p className="text-white text-shadow-lg text-base text-center px-10 lg:text-lg">Confira alguns de nossos trabalhos mais recentes!</p>
                </div>
                <div className="w-full max-w-2xl bg-[#000000b8] px-9 pt-4 pb-8 sm:rounded-lg sm:px-10">
                    {(audiosData as Audios).map((audio, index) => (
                        <div key={index} className="mb-2 border-b border-white">
                            <div className="flex items-center justify-between py-4">
                                <div className="flex gap-3 sm:gap-4 items-center">
                                    <button onClick={() => openPlayer(index)} className="cursor-pointer focus:outline-none">
                                        {activeIndex === index ? <FaTimes size={20} color="white" /> : <FaPlay size={20} color="white" />}
                                    </button>
                                    <h3
                                        className="text-white text-base sm:text-xl cursor-pointer"
                                        onClick={() => openPlayer(index)}
                                    >
                                        {audio.title}
                                    </h3>
                                </div>
                                <a href={audioMap[audio.file]} download>
                                    <FaDownload size={20} color="white" className="ml-5" />
                                </a>
                            </div>
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                                <div className="pt-2 pb-4">
                                    <ResponsiveAudioPlayer
                                        audio={audio}
                                        index={index}
                                        isActive={activeIndex === index}
                                        onPlayPause={togglePlayPause}
                                        isPlaying={!!isPlaying[index]}
                                        audioRef={audioRefs.current[index]}
                                    />
                                    <audio
                                        ref={audioRefs.current[index]}
                                        controls
                                        className="w-full hidden sm:block bg-transparent"
                                    >
                                        <source src={audioMap[audio.file]} type="audio/mpeg" />
                                        Seu navegador não suporta o elemento de áudio.
                                    </audio>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Button size="lg" className="duration-300 hover:bg-secondary cursor-pointer text-sm md:text-base md:p-5 lg:p-6 2xl:text-lg" 
                onClick={() => {
                    const el = document.getElementById('contactUsSection');
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}>
                    Entrar em contato
                </Button>
            </div>
        </section>
    )
}

export default SpecialtiesSection;