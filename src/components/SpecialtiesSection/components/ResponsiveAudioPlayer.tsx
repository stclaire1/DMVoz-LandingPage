import { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import type { Audio } from '../../../types/audio';


interface ResponsiveAudioPlayerProps {
	audio: Audio;
	index: number;
	isActive: boolean;
	onPlayPause: (index: number) => void;
	isPlaying: boolean;
	audioRef: React.RefObject<HTMLAudioElement>;
}

const ResponsiveAudioPlayer = ({ index, isActive, onPlayPause, isPlaying, audioRef }: ResponsiveAudioPlayerProps) => {
	const progressBarRef = useRef<HTMLDivElement | null>(null);
	const [progress, setProgress] = useState(0);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [isSeeking, setIsSeeking] = useState(false);

	useEffect(() => {
		const audioEl = audioRef.current;
		if (!audioEl) return;
		const handleTimeUpdate = () => {
			if (!isSeeking) {
				setCurrentTime(audioEl.currentTime);
				setProgress((audioEl.currentTime / (audioEl.duration || 1)) * 100);
			}
		};
		const handleLoadedMetadata = () => {
			setDuration(audioEl.duration);
		};
		const handleEnded = () => {
		};
		audioEl.addEventListener('timeupdate', handleTimeUpdate);
		audioEl.addEventListener('loadedmetadata', handleLoadedMetadata);
		audioEl.addEventListener('ended', handleEnded);
		return () => {
			audioEl.removeEventListener('timeupdate', handleTimeUpdate);
			audioEl.removeEventListener('loadedmetadata', handleLoadedMetadata);
			audioEl.removeEventListener('ended', handleEnded);
		};
	}, [isSeeking, audioRef, index, onPlayPause]);

	const handleSeek = (e: { clientX: number } | MouseEvent | React.MouseEvent<HTMLDivElement>, bar?: HTMLDivElement | null) => {
		const audioEl = audioRef.current;
		const progressBar = bar || progressBarRef.current;
		if (audioEl && progressBar) {
			let clientX: number = 0;
			if ('clientX' in e && typeof e.clientX === 'number') {
				clientX = e.clientX;
			}
			const rect = progressBar.getBoundingClientRect();
			const clickPosition = clientX - rect.left;
			const percent = Math.max(0, Math.min(1, clickPosition / rect.width));
			const newTime = percent * (audioEl.duration || 0);
			if (isFinite(newTime)) {
				audioEl.currentTime = newTime;
				setProgress(percent * 100);
				setCurrentTime(newTime);
			}
		}
	};

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsSeeking(true);
		handleSeek(e, progressBarRef.current);
	};
	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsSeeking(true);
		const touch = e.touches[0];
		if (touch) {
			handleSeek({ clientX: touch.clientX }, progressBarRef.current);
		}
	};

	useEffect(() => {
		const handleMouseUp = () => {
			if (isSeeking) setIsSeeking(false);
		};
		const handleMouseMove = (e: MouseEvent) => {
			if (isSeeking) handleSeek(e, progressBarRef.current);
		};
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mouseup', handleMouseUp);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [isSeeking]);

	useEffect(() => {
		const handleTouchMove = (e: TouchEvent) => {
			if (isSeeking) {
				const touch = e.touches[0];
				if (touch) handleSeek({ clientX: touch.clientX }, progressBarRef.current);
			}
		};
		const handleTouchEnd = () => {
			if (isSeeking) setIsSeeking(false);
		};
		window.addEventListener('touchmove', handleTouchMove);
		window.addEventListener('touchend', handleTouchEnd);
		return () => {
			window.removeEventListener('touchmove', handleTouchMove);
			window.removeEventListener('touchend', handleTouchEnd);
		};
	}, [isSeeking]);

	const formatTime = (time: number) => {
		if (isNaN(time) || time === 0) return '0:00';
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60).toString().padStart(2, '0');
		return `${minutes}:${seconds}`;
	};

	return (
		<div className={`sm:hidden bg-white rounded-full p-3 ${isActive ? '' : 'hidden'}`}>
			<div className="flex items-center gap-2">
				<button onClick={() => onPlayPause(index)} className="focus:outline-none">
					{isPlaying ? <FaPause size={16} color="black" /> : <FaPlay size={16} color="black" />}
				</button>
				<div className="text-black text-[11px] w-24">
					{formatTime(currentTime)} / {formatTime(duration)}
				</div>
				<div
					ref={progressBarRef}
					className="w-full bg-gray-300 rounded-full h-1.5 cursor-pointer"
					onMouseDown={handleMouseDown}
					onTouchStart={handleTouchStart}
				>
					<div className="bg-gray-800 h-1.5 rounded-full pointer-events-none" style={{ width: `${progress}%` }}></div>
				</div>
			</div>
		</div>
	);
};

export default ResponsiveAudioPlayer;
