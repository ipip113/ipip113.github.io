import { motion } from 'motion/react';
import bgPattern from 'https://www.transparenttextures.com/patterns/black-paper.png';

interface EntryScreenProps {
  onEnter: () => void;
}

export default function EntryScreen({ onEnter }: EntryScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 text-orange-50">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/rice-paper.png')` }}
      />
      
      {/* Mystical Gradient */}
      <div className="absolute inset-0 bg-radial from-red-900/20 via-zinc-950/80 to-zinc-950" />

      <div className="relative z-10 flex flex-col items-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center space-y-4"
        >
          <h1 className="text-8xl md:text-[9rem] tracking-widest brush-font text-orange-200 drop-shadow-[0_0_15px_rgba(200,50,50,0.5)]">
            武林
          </h1>
          <p className="text-xl md:text-2xl tracking-[0.3em] font-light text-zinc-400">
            천하의 주종을 묻다
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={onEnter}
          className="group relative px-10 py-4 overflow-hidden border border-orange-900/50 hover:border-orange-500/50 bg-zinc-900/50 backdrop-blur-md transition-all duration-700 w-64"
        >
          {/* Animated glow spread */}
          <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-orange-900/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
          
          <span className="relative z-10 text-2xl brush-font tracking-widest text-orange-300 group-hover:text-amber-200 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] transition-colors duration-500">
            입장하기
          </span>
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-800 transition-all duration-500 group-hover:w-full" />
        </motion.button>
      </div>
    </div>
  );
}
