import { useState, useRef, useEffect } from 'react';
import EntryScreen from './components/EntryScreen';
import FallingLeaves from './components/FallingLeaves';
import WorldInfo from './components/WorldInfo';
import CharacterGallery from './components/CharacterGallery';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(e => console.log('Audio autoplay prevented:', e));
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isAudioMuted;
      setIsAudioMuted(!isAudioMuted);
    }
  };

  return (
    <div className="min-h-screen bg-texture bg-zinc-950 text-zinc-300 font-batang relative">
      {/* Background Music */}
      <audio 
        ref={audioRef} 
        loop 
        src="https://dn720003.ca.archive.org/0/items/guzheng-oriental-traditional-music/Guzheng%20-%20Oriental%20Traditional%20Music.mp3" 
      />

      <AnimatePresence>
        {!hasEntered && <EntryScreen onEnter={handleEnter} key="entry" />}
      </AnimatePresence>

      {hasEntered && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative min-h-screen"
        >
          {/* Aesthetic Effects */}
          <FallingLeaves />
          
          {/* Audio Controls */}
          <button 
            onClick={toggleMute}
            className="fixed top-6 right-6 z-50 p-3 bg-zinc-900/80 border border-zinc-700 rounded-full hover:bg-zinc-800 text-amber-200 transition-colors"
          >
            {isAudioMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          {/* Header Navigation Area (Decorative) */}
          <header className="py-12 flex flex-col items-center justify-center relative z-10 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
            <h1 className="text-5xl md:text-7xl font-bold brush-font text-transparent bg-clip-text bg-gradient-to-br from-amber-200 via-orange-300 to-red-600 drop-shadow-sm mb-4">
              강호유람기 (江湖遊覽記)
            </h1>
            <p className="tracking-widest text-zinc-500 font-light mt-2 text-sm md:text-base">어둠 속에 잠든 군상들의 이야기</p>
          </header>

          <main className="relative z-10 pb-24">
             <WorldInfo />
             <div className="w-full h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent my-16 max-w-4xl mx-auto" />
             <CharacterGallery />
          </main>

          <footer className="py-12 border-t border-zinc-800/50 text-center text-zinc-600 bg-zinc-950/80 relative z-10">
             <p className="brush-font text-2xl mb-4 text-zinc-500">천하의 이치는 검의 끝에 있다</p>
             <p className="text-sm tracking-widest text-zinc-700">© 명나라 중기 세계관 Roleplaying Introduction. All rights reserved.</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
