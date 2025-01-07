import useStore from '@/store';
import { Copy, Volume2 } from 'lucide-react';
import React, { useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, onPlay, onPause, className = '', onEnded }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);
  const setIsTalking = useStore((state: any) => state?.setIsTalking);


  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    const volumeIcon = volumeRef.current;
  
    if (audio && volumeIcon) {
      const playHandler = () => {
        if (audio.paused) {
          audio.play();
        }
        if (onPlay) {
          onPlay();
        }
      };
      const pauseHandler = () => {
        if (!audio.paused) {
          audio.pause();
        }
        if (onPause) {
          onPause();
        }
      };
  
      const endedHandler = () => {
        if (onEnded) {
          setIsTalking(false);
          onEnded();
        }
      };
  
      volumeIcon.addEventListener('click', togglePlayPause);
      audio.addEventListener('ended', endedHandler);
  
      return () => {
        volumeIcon.removeEventListener('click', togglePlayPause);
        audio.removeEventListener('ended', endedHandler);
      };
    }
  }, [onPlay, onPause, onEnded]);
  

  return (
    <>
      <div className='flex gap-4' ref={volumeRef}>
        <Volume2 className="cursor-pointer opacity-50 hover:opacity-100" />
        <Copy className="cursor-pointer opacity-50 hover:opacity-100" />
      </div>
      <audio
        ref={audioRef}
        className={`w-full ${className}`}
        autoPlay
        src={src}
        controls={false}
  
      />
    </>
  );
};

export default AudioPlayer;
