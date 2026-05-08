import { motion, AnimatePresence } from 'motion/react';
import { CHARACTERS, CharacterItem } from '../data';
import { useState } from 'react';

const CHAR_IMAGE_BASE_URL = "https://raw.githubusercontent.com/ipip113/img/refs/heads/main/c/";

export default function CharacterGallery() {
  const [selectedChar, setSelectedChar] = useState<CharacterItem | null>(null);
  const [activeGroup, setActiveGroup] = useState<string>("전체");

  const groups = ["전체", "구파일방", "오대세가", "무림맹", "세외무림", "사파", "마교", "황실"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
       <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl brush-font text-orange-300">인물 (人物)</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-800 to-transparent mx-auto" />
          <p className="text-zinc-500 pt-4">천계를 뒤흔들 영웅과 마두들</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {groups.map(group => (
             <button
               key={group}
               onClick={() => setActiveGroup(group)}
               className={`px-6 py-2 border brush-font text-xl transition-all duration-300 ${
                 activeGroup === group
                   ? "bg-red-900/40 border-red-500/50 text-amber-200"
                   : "bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600"
               }`}
             >
               {group}
             </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {CHARACTERS.filter(c => activeGroup === "전체" || c.group === activeGroup).map((char, index) => (
              <motion.div
                layout
                key={char.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedChar(char)}
              >
                  {/* Card Frame */}
                  <div className="aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-red-900/60 transition-colors duration-500 relative">
                     <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10" />
                     
                     <img 
                       src={`${CHAR_IMAGE_BASE_URL}${encodeURIComponent(char.name)}/1.webp`}
                       alt={char.name}
                       className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                       onError={(e) => {
                         // Fallback if image fails to load
                         (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop';
                       }}
                     />

                     {/* Content Overlay */}
                     <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                        <div className="flex items-end justify-between mb-2">
                           <h3 className="text-3xl brush-font text-orange-200">{char.name}</h3>
                           <span className="text-xs text-red-500/80 mb-1 border border-red-900/50 px-2 py-0.5">{char.faction}</span>
                        </div>
                        <p className="text-sm text-zinc-400 font-medium truncate">{char.role} · {char.level}</p>
                     </div>
                  </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Overlay */}
        {selectedChar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm cursor-pointer"
               onClick={() => setSelectedChar(null)}
             />
             
             <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               animate={{ opacity: 1, y: 0 }}
               className="relative z-10 max-w-4xl w-full bg-zinc-900 border border-zinc-700 shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
             >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedChar(null)}
                  className="absolute top-4 right-4 z-20 text-zinc-400 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Left: Image (Vertical style) */}
                <div className="md:w-1/2 relative h-64 md:h-auto border-r border-zinc-800">
                   <img 
                     src={`${CHAR_IMAGE_BASE_URL}${encodeURIComponent(selectedChar.name)}/1.webp`}
                     alt={selectedChar.name}
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop';
                     }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900 via-transparent to-transparent" />
                </div>

                {/* Right: Details */}
                <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto wuxia-scrollbar text-zinc-300">
                    <div className="mb-8">
                       <span className="text-red-500 font-bold tracking-wide text-sm">{selectedChar.faction}</span>
                       <h2 className="text-6xl brush-font text-amber-200 mt-2">{selectedChar.name}</h2>
                       <div className="w-32 h-0.5 bg-red-900/50 mt-4" />
                    </div>

                    <div className="space-y-6">
                       <div className="grid grid-cols-2 gap-4 text-sm font-medium">
                         <div>
                            <span className="block text-zinc-500 mb-1">성별</span>
                            <span className="text-zinc-200">{selectedChar.gender}</span>
                         </div>
                         <div>
                            <span className="block text-zinc-500 mb-1">신분</span>
                            <span className="text-zinc-200">{selectedChar.role}</span>
                         </div>
                         <div>
                            <span className="block text-zinc-500 mb-1">경지</span>
                            <span className="text-red-400">{selectedChar.level}</span>
                         </div>
                         <div>
                            <span className="block text-zinc-500 mb-1">외형</span>
                            <span className="text-zinc-200">{selectedChar.appearance}</span>
                         </div>
                       </div>

                       <div className="pt-6 border-t border-zinc-800 space-y-4">
                          <div>
                             <h4 className="text-orange-900/80 mb-2 font-bold flex items-center">
                                <span className="mr-2">❖</span> 성격 (Personality)
                             </h4>
                             <p className="text-zinc-300 leading-relaxed bg-zinc-950/50 p-4 border-l-2 border-orange-900/50">
                               {selectedChar.personality.replace(/\+/g, ', ')}
                             </p>
                          </div>
                          <div>
                             <h4 className="text-orange-900/80 mb-2 font-bold flex items-center">
                                <span className="mr-2">❖</span> 말투 (Speech)
                             </h4>
                             <p className="text-zinc-300 leading-relaxed bg-zinc-950/50 p-4 border-l-2 border-orange-900/50">
                               {selectedChar.speech}
                             </p>
                          </div>
                          {selectedChar.trait && selectedChar.trait !== '-' && (
                             <div>
                               <h4 className="text-orange-900/80 mb-2 font-bold flex items-center">
                                  <span className="mr-2">❖</span> 특징 (Trait)
                               </h4>
                               <p className="text-zinc-300 leading-relaxed bg-zinc-950/50 p-4 border-l-2 border-red-900/70">
                                 {selectedChar.trait}
                               </p>
                            </div>
                          )}
                       </div>
                    </div>
                </div>
             </motion.div>
          </div>
        )}
    </div>
  );
}
