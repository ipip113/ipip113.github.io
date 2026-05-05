/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronDown, Moon, Sun, Scroll, Swords, Castle, Focus, X } from 'lucide-react';
import { factions, universeInfo, characters } from './data';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [selectedCharacter, setSelectedCharacter] = useState<any | null>(null);
  const [selectedFaction, setSelectedFaction] = useState<any | null>(null);
  
  // Parallax effects for hero
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-texture bg-[#0d0d0f] text-[#e6dfd1] font-serif overflow-x-hidden selection:bg-[#7a1515] selection:text-[#f1eadd]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d0d0f]/80 backdrop-blur-md border-b border-[#2d2419]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-widest text-[#c6a87c]">무림연대기 (武林年代記)</div>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#world" className="hover:text-[#c6a87c] transition-colors">세계관</a>
            <a href="#factions" className="hover:text-[#c6a87c] transition-colors">세력도</a>
            <a href="#characters" className="hover:text-[#c6a87c] transition-colors">주요인물</a>
            <a href="#biographies" className="hover:text-[#c6a87c] transition-colors">인물열전</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-[#2d2419]">
        {/* Deep dark mysterious background */}
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 bg-gradient-to-b from-[#1a1111] via-[#0d0d0f] to-[#0d0d0f] opacity-80"
        />
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,21,21,0.15)_0%,transparent_60%)]" />

        <motion.div 
          className="relative z-10 text-center flex flex-col items-center px-4"
          style={{ opacity: opacityHero }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#8b7355] text-sm md:text-base tracking-[0.3em] mb-4 block">역발산기개세 (力拔山氣蓋世)</span>
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#f1eadd] to-[#a39c90] mb-6 tracking-widest text-glow">
              무림연대기
            </h1>
            <p className="text-lg md:text-2xl text-[#c6a87c] font-light tracking-wide mt-8">
              강호무림기 롤플레잉 프로젝트
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 mt-16 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-[#8b7355]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Universe Info Section */}
      <section id="world" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="무림 배경" subtitle="세계관 설정 (世界觀)" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <InfoCard icon={<Scroll className="w-5 h-5" />} title="시대적 배경" content={universeInfo.background} />
            <InfoCard icon={<Focus className="w-5 h-5" />} title="통화 시스템" content={universeInfo.currency} />
            <InfoCard icon={<Castle className="w-5 h-5" />} title="낙양 (洛陽)" content={universeInfo.luoyang} />
            <InfoCard icon={<Swords className="w-5 h-5" />} title="무림맹 (武林盟)" content={universeInfo.alliance} />
          </div>
        </div>
      </section>

      {/* Factions Section */}
      <section id="factions" className="py-32 px-6 bg-[#111113] relative border-y border-[#2d2419]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="천하 세력도" subtitle="군웅할거 (群雄割據)" />
          
          <div className="mt-20 space-y-24">
            {factions.map((faction, idx) => (
              <motion.div 
                key={faction.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-baseline gap-4 mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#c6a87c]">{faction.name}</h3>
                  <p className="text-[#a39c90] text-lg">{faction.desc}</p>
                </div>
                
                {faction.sub.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10">
                    {faction.sub.map((sub, sIdx) => (
                      <FactionBook key={sub.name} faction={sub} onClick={() => setSelectedFaction(sub)} />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="주요 인물" subtitle="군상 (群像)" />
          
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {characters.map((char, idx) => (
              <CharacterCard key={char.name} character={char} index={idx} onClick={() => setSelectedCharacter(char)} />
            ))}
          </div>
        </div>
      </section>

      {/* Biographies Section */}
      <section id="biographies" className="py-32 px-6 bg-[#111113] relative border-t border-[#2d2419]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="인물 열전" subtitle="상세 기록 (詳細記錄)" />
          
          <div className="mt-20 space-y-12">
            {characters.map((char) => (
              <BiographyCard key={`bio-${char.name}`} character={char} />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-[#2d2419] bg-[#0d0d0f] text-[#8b7355] text-sm">
        <p>무림연대기 롤플레잉 프로젝트</p>
      </footer>

      <AnimatePresence>
        {selectedFaction && (
          <FactionModal 
            faction={selectedFaction} 
            onClose={() => setSelectedFaction(null)} 
          />
        )}
        {selectedCharacter && (
          <CharacterModal 
            character={selectedCharacter} 
            onClose={() => setSelectedCharacter(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <span className="text-[#7a1515] font-bold tracking-widest text-sm md:text-base">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-black mt-2 tracking-wide text-glow">{title}</h2>
      <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c6a87c] to-transparent mx-auto mt-8" />
    </motion.div>
  );
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-8 border border-[#2d2419] bg-[#111113]/50 backdrop-blur-sm relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#c6a87c] group-hover:h-full transition-all duration-500 ease-out" />
      <div className="flex items-center gap-4 mb-4 text-[#c6a87c]">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-[#a39c90] leading-relaxed">{content}</p>
    </motion.div>
  );
}

function CharacterCard({ character: char, index, onClick }: { character: any, index: number, onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const imageUrl = `https://raw.githubusercontent.com/ipip113/img/refs/heads/main/c/${char.name}/1.webp`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      className="group relative h-[450px] w-full overflow-hidden bg-[#111113] border border-[#2d2419] rounded-sm cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700"
        style={{ backgroundImage: `url(${imageUrl})` }}
        animate={{ scale: isHovered ? 1.05 : 1 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="flex justify-between items-end mb-2">
          <div>
            <span className="text-[#c6a87c] text-xs font-bold tracking-widest border border-[#c6a87c]/30 px-2 py-1 mb-2 inline-block">
              {char.faction}
            </span>
            <h3 className="text-2xl font-bold text-[#f1eadd]">{char.name}</h3>
          </div>
          <div className="text-right">
            <span className="text-[#7a1515] text-sm font-bold block">{char.realm}</span>
            <span className="text-[#8b7355] text-xs">{char.rank}</span>
          </div>
        </div>

        {/* Expandable Info on Hover */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 mt-2 border-t border-[#2d2419] space-y-2 text-sm">
            <p><span className="text-[#8b7355]">외모:</span> <span className="text-[#a39c90]">{char.appearance}</span></p>
            <p><span className="text-[#8b7355]">성격:</span> <span className="text-[#a39c90]">{char.personality.replace(/\+/g, ', ')}</span></p>
            <p><span className="text-[#8b7355]">말투:</span> <span className="text-[#a39c90]">{char.speech}</span></p>
            {char.trait !== '-' && (
              <p className="pt-2 text-xs text-[#c6a87c] leading-snug">{char.trait}</p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Faction Group vertical badge */}
      <div className="absolute top-4 right-4 bg-[#0d0d0f]/80 backdrop-blur-md border border-[#2d2419] px-2 py-4 rounded-sm">
        <span className="text-[#a39c90] text-xs font-bold" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
          {char.factionGroup}
        </span>
      </div>
    </motion.div>
  );
}

function BiographyCard({ character: char }: { character: any }) {
  const imageUrl = `https://raw.githubusercontent.com/ipip113/img/refs/heads/main/c/${char.name}/1.webp`;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col md:flex-row gap-8 bg-[#0d0d0f] border border-[#2d2419] p-6 md:p-8"
    >
      <div className="flex-shrink-0 w-full md:w-64 h-80 relative overflow-hidden border border-[#2d2419]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent opacity-10" />
      </div>
      <div className="flex-grow flex flex-col justify-center">
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="text-[#c6a87c] text-sm font-bold border border-[#c6a87c]/30 px-3 py-1 bg-[#c6a87c]/10">{char.faction}</span>
            <span className="text-[#8b7355] text-sm">{char.rank}</span>
            <span className="text-[#7a1515] text-sm font-bold ml-auto">{char.realm}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-[#f1eadd] tracking-wide mb-1 flex items-baseline gap-2 text-glow">
            {char.name}
            <span className="text-sm font-normal text-[#8b7355]">({char.gender})</span>
          </h3>
          <p className="text-[#8b7355] text-sm">{char.factionGroup}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm mt-4">
          <div>
            <span className="block text-[#7a1515] font-bold mb-1">외모</span>
            <p className="text-[#a39c90]">{char.appearance}</p>
          </div>
          <div>
            <span className="block text-[#7a1515] font-bold mb-1">성격</span>
            <p className="text-[#a39c90]">{char.personality.replace(/\+/g, ', ')}</p>
          </div>
          <div className="md:col-span-2">
            <span className="block text-[#7a1515] font-bold mb-1">언행</span>
            <p className="text-[#a39c90] italic">"{char.speech}"</p>
          </div>
          {char.trait !== '-' && (
            <div className="md:col-span-2 mt-2 pt-4 border-t border-[#2d2419]">
              <span className="block text-[#c6a87c] font-bold mb-1">특이사항</span>
              <p className="text-[#e6dfd1] leading-relaxed">{char.trait}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CharacterModal({ character: char, onClose }: { character: any, onClose: () => void }) {
  const imageUrl = `https://raw.githubusercontent.com/ipip113/img/refs/heads/main/c/${char.name}/1.webp`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-[#0d0d0f] border border-[#2d2419] shadow-2xl flex flex-col md:flex-row overflow-y-auto max-h-[90vh]"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#0d0d0f]/50 hover:bg-[#7a1515] text-[#c6a87c] hover:text-white transition-colors border border-[#2d2419] rounded-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:w-2/5 h-80 md:h-auto min-h-[300px] relative shrink-0">
           <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/40 to-transparent opacity-80 md:hidden" />
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0d0d0f]/40 to-[#0d0d0f] opacity-80 hidden md:block" />
        </div>

        <div className="p-8 md:p-10 flex-grow flex flex-col">
           <div className="mb-6">
             <div className="flex items-center gap-3 mb-3 flex-wrap">
               <span className="text-[#c6a87c] text-sm font-bold border border-[#c6a87c]/30 px-3 py-1 bg-[#c6a87c]/10">{char.faction}</span>
               <span className="text-[#8b7355] text-sm">{char.rank}</span>
               <span className="text-[#7a1515] text-sm font-bold ml-auto border-b border-[#7a1515] pb-1">{char.realm}</span>
             </div>
             <h3 className="text-4xl md:text-5xl font-black text-[#f1eadd] tracking-wide mb-2 flex items-baseline gap-2 text-glow">
               {char.name}
               <span className="text-base font-normal text-[#8b7355]">({char.gender})</span>
             </h3>
             <p className="text-[#8b7355] text-sm tracking-widest">{char.factionGroup}</p>
           </div>
           
           <div className="w-full h-px bg-gradient-to-r from-[#2d2419] via-[#8b7355]/30 to-[#2d2419] mb-6" />

           <div className="grid grid-cols-1 gap-y-6 text-sm flex-grow">
             <div>
               <span className="flex items-center gap-2 text-[#7a1515] font-bold mb-2">
                 <div className="w-1 h-3 bg-[#7a1515]" /> 외모
               </span>
               <p className="text-[#e6dfd1] pl-3 leading-relaxed">{char.appearance}</p>
             </div>
             <div>
               <span className="flex items-center gap-2 text-[#7a1515] font-bold mb-2">
                 <div className="w-1 h-3 bg-[#7a1515]" /> 성격
               </span>
               <p className="text-[#e6dfd1] pl-3 leading-relaxed">{char.personality.replace(/\+/g, ', ')}</p>
             </div>
             <div>
               <span className="flex items-center gap-2 text-[#7a1515] font-bold mb-2">
                 <div className="w-1 h-3 bg-[#7a1515]" /> 언행
               </span>
               <p className="text-[#a39c90] italic pl-3 leading-relaxed">"{char.speech}"</p>
             </div>
             {char.trait !== '-' && (
               <div className="mt-2 pt-6 border-t border-[#2d2419]">
                 <span className="flex items-center gap-2 text-[#c6a87c] font-bold mb-3">
                   <div className="w-1 h-3 bg-[#c6a87c]" /> 특이사항
                 </span>
                 <p className="text-[#e6dfd1] pl-3 leading-relaxed text-base">{char.trait}</p>
               </div>
             )}
           </div>
        </div>
      </motion.div>
    </div>
  );
}

const factionStyles: Record<string, { bg: string, spine: string, text: string, labelText: string, fx: string, fxColor?: string }> = {
  '소림사': { bg: '#8c6b24', spine: '#4a360d', text: '#fff9e6', labelText: '#3a2708', fx: 'gold', fxColor: '#fbbf24' },
  '무당파': { bg: '#2b3e54', spine: '#121b26', text: '#e0e6ed', labelText: '#0a121a', fx: 'mist', fxColor: '#e0f2fe' },
  '화산파': { bg: '#ab3251', spine: '#571324', text: '#ffe3eb', labelText: '#4d1021', fx: 'plum', fxColor: '#fbcfe8' },
  '종남파': { bg: '#454a54', spine: '#21242b', text: '#e6e3ed', labelText: '#14171f', fx: 'dust', fxColor: '#cbd5e1' },
  '아미파': { bg: '#604178', spine: '#311a42', text: '#ebdff5', labelText: '#231130', fx: 'mist', fxColor: '#e9d5ff' },
  '곤륜파': { bg: '#8b9396', spine: '#464c4f', text: '#f0f4f5', labelText: '#212121', fx: 'snow', fxColor: '#ffffff' },
  '점창파': { bg: '#1c6e5e', spine: '#0a362c', text: '#c4ede4', labelText: '#062b23', fx: 'dust', fxColor: '#6ee7b7' },
  '해남파': { bg: '#1b4b75', spine: '#0d2d4a', text: '#d3ecff', labelText: '#061b2e', fx: 'water', fxColor: '#93c5fd' },
  '청성파': { bg: '#365e23', spine: '#1d3610', text: '#d9f5ce', labelText: '#0e1c07', fx: 'leaf', fxColor: '#a3e635' },
  '개방': { bg: '#6e4720', spine: '#40270e', text: '#ffeacc', labelText: '#33200d', fx: 'dust', fxColor: '#fcd34d' },

  '남궁세가': { bg: '#1f3e80', spine: '#0f224d', text: '#d9e6ff', labelText: '#0b1633', fx: 'mist', fxColor: '#bfdbfe' },
  '사천당가': { bg: '#1d452d', spine: '#0e2919', text: '#b8ffcd', labelText: '#06170d', fx: 'poison', fxColor: '#34d399' },
  '하북팽가': { bg: '#8a2424', spine: '#521010', text: '#ffcccc', labelText: '#3b0808', fx: 'ash', fxColor: '#fca5a5' },
  '제갈세가': { bg: '#596963', spine: '#36423e', text: '#e6f0ec', labelText: '#121715', fx: 'mist', fxColor: '#ccfbf1' },
  '모용세가': { bg: '#60286b', spine: '#33103b', text: '#fae3ff', labelText: '#260a2e', fx: 'mist', fxColor: '#fbcfe8' },

  '북해빙궁': { bg: '#5894b0', spine: '#305c70', text: '#f0f8ff', labelText: '#133545', fx: 'snow', fxColor: '#e0f2fe' },
  '남만야수궁': { bg: '#3a5423', spine: '#1e300f', text: '#ceebb3', labelText: '#121f05', fx: 'leaf', fxColor: '#84cc16' },

  '녹림': { bg: '#4d5c2e', spine: '#2a3614', text: '#e5f2cf', labelText: '#182109', fx: 'leaf', fxColor: '#bef264' },
  '장강수로채': { bg: '#184363', spine: '#0c2436', text: '#b5deff', labelText: '#020d17', fx: 'water', fxColor: '#7dd3fc' },
  '하오문': { bg: '#2b2626', spine: '#141111', text: '#e6dfdf', labelText: '#000000', fx: 'dust', fxColor: '#94a3b8' },
  '살막': { bg: '#141414', spine: '#000000', text: '#cccccc', labelText: '#000000', fx: 'ash', fxColor: '#52525b' },

  '마교': { bg: '#140808', spine: '#000000', text: '#ff4d4d', labelText: '#4d0000', fx: 'demonic', fxColor: '#ef4444' },
  '천마신교': { bg: '#140808', spine: '#000000', text: '#ff4d4d', labelText: '#4d0000', fx: 'demonic', fxColor: '#ef4444' },
  '황실': { bg: '#c99604', spine: '#826000', text: '#fff6db', labelText: '#473400', fx: 'gold', fxColor: '#fde047' }
};

const getFactionStyle = (name: string) => {
  const key = Object.keys(factionStyles).find(k => name.includes(k));
  return key ? factionStyles[key] : { bg: '#473d32', spine: '#211c15', text: '#e8dbcc', labelText: '#26201a', fx: 'dust' };
};

function FactionBook({ faction, onClick }: { faction: any, onClick: () => void }) {
  const style = getFactionStyle(faction.name);
  return (
    <motion.div 
      onClick={onClick}
      whileHover={{ y: -16, scale: 1.05, rotateY: -5 }}
      style={{ backgroundColor: style.bg, perspective: 1000, transformStyle: "preserve-3d" }}
      className="relative w-full aspect-[2/3] border border-black/40 rounded-r-sm cursor-pointer shadow-[2px_4px_12px_rgba(0,0,0,0.5)] hover:shadow-[4px_8px_20px_rgba(0,0,0,0.6)] transition-all flex bg-texture group origin-left"
    >
      {/* Book Cover Texture Overlay */}
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none rounded-r-md" />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-r-md" />

      {/* Binding (Thread and Holes) */}
      <div className="absolute top-0 bottom-0 left-0 w-8 border-r border-[#1a1a1a]/40 z-10 flex flex-col justify-evenly items-center shadow-inner py-6" style={{ backgroundColor: style.spine }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="relative w-full flex items-center justify-center">
            {/* Hole */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a] shadow-[inset_0_1px_2px_rgba(0,0,0,1)] z-10" />
            {/* Thread Wrapping Right */}
            <div className="absolute w-8 h-[2px] bg-[#d4c3a3] shadow-[0_1px_2px_rgba(0,0,0,0.6)] right-1.5 z-20" />
          </div>
        ))}
        {/* Vertical thread connecting holes */}
        <div className="absolute top-8 bottom-8 left-[13px] w-[2px] bg-[#d4c3a3] shadow-[1px_0_2px_rgba(0,0,0,0.6)] z-20" />
      </div>

      {/* Title Slip (표지 - 제첨) */}
      <div className="absolute right-3 top-6 bottom-8 w-11 bg-[#eee6d8] shadow-[1px_1px_4px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center py-3 z-20 border border-[#bfae93]">
         <div className="absolute inset-[2px] border border-[#1a1a1a]/20" />
         <span className="text-xl md:text-2xl font-black font-serif tracking-widest writing-vertical text-[#1a1a1a] z-10 leading-none">
           {faction.name}
         </span>
         <span className="absolute bottom-4 text-[10px] md:text-xs font-serif writing-vertical text-[#521010] font-bold z-10 block opacity-80 border-t border-[#1a1a1a]/20 pt-2 tracking-widest">
           {faction.location.slice(0, 2)}
         </span>
      </div>
    </motion.div>
  )
}

function FactionModal({ faction, onClose }: { faction: any, onClose: () => void }) {
  const style = getFactionStyle(faction.name);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
       <motion.div 
         initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
         className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl"
         onClick={onClose}
       />
       {/* Cinematic Panel */}
       <motion.div
         initial={{ opacity: 0, scale: 0.97, y: 20 }}
         animate={{ opacity: 1, scale: 1, y: 0 }}
         exit={{ opacity: 0, scale: 0.97, y: 20 }}
         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
         className="relative w-full h-[90vh] md:h-[85vh] max-w-[1200px] shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col md:flex-row overflow-hidden border border-[#2a241e] bg-[#0c0a09] rounded-sm"
       >
         
         <button onClick={onClose} className="absolute top-6 right-6 z-50 text-[#a89680] hover:text-white transition-colors p-2 bg-black/40 backdrop-blur-md rounded-full border border-[#2a241e]">
           <X className="w-6 h-6" />
         </button>

         {/* Left Page (Thematic Visuals) */}
         <div className="flex-1 md:flex-[0.7] relative flex flex-col items-center justify-center p-8 z-10 border-b md:border-b-0 md:border-r border-[#1f1a16] overflow-hidden">
            <div className="absolute inset-0 opacity-[0.25] mix-blend-color" style={{ backgroundColor: style.bg }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-transparent to-[#0c0a09] z-0 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0c0a09] z-0 opacity-90" />
            
            <ParticleSystem type={style.fx} color={style.fxColor || style.spine} />
            
            <div className="relative z-20 flex flex-row-reverse items-center justify-center h-full mt-4 md:mt-0 gap-6 md:gap-12">
              <h2 className={`whitespace-nowrap font-black tracking-[0.2em] text-[#ede6db] font-serif writing-vertical opacity-95 drop-shadow-2xl ${
                faction.name.length >= 5 ? 'text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem]' :
                faction.name.length === 4 ? 'text-[4.5rem] sm:text-[5.5rem] md:text-[6.5rem]' :
                'text-[5rem] sm:text-[6rem] md:text-[7.5rem]'
              }`} style={{ textShadow: `0 0 40px ${style.bg}` }}>
                {faction.name}
              </h2>
              
              <div className="flex flex-col items-center mt-6 md:mt-12">
                <span className="whitespace-nowrap text-lg md:text-xl tracking-[0.4em] font-serif text-[#a89680] writing-vertical pt-4">
                  {faction.location.replace(/\s+/g, '')}
                </span>
                <div className="w-px h-12 md:h-20 bg-gradient-to-t from-[#a89680]/50 to-transparent mt-4" />
              </div>
            </div>
         </div>

         {/* Right Page (Readable Text) */}
         <div className="flex-[1.3] relative z-20 p-8 md:p-14 lg:p-20 overflow-y-auto flex flex-col selection:bg-[#a89680]/30 selection:text-white">
            <div className="absolute inset-0 bg-texture opacity-[0.03] pointer-events-none hidden md:block" />
            
            <div className="relative z-20 w-full h-full flex flex-col text-left py-4 md:py-8 max-w-3xl mx-auto">
               <div className="mb-10 pb-6 border-b border-[#1f1a16] w-full">
                  <span className="block text-[#857663] text-sm md:text-base tracking-[0.5em] uppercase mb-4 font-serif">Region & Faction</span>
                  <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-6">
                    <h3 className="text-4xl md:text-5xl text-[#ede6db] font-bold font-serif tracking-[0.1em]">{faction.name}</h3>
                    <p className="text-[#a89680] text-lg md:text-xl tracking-[0.2em] font-serif pb-0.5">{faction.location}</p>
                  </div>
               </div>
               
               <div className="text-lg md:text-2xl text-[#d4c5b0] leading-[1.9] md:leading-[2.2] font-serif flex-grow flex flex-col justify-start">
                 {faction.desc.split('. ').map((sentence: string, i: number, arr: any[]) => {
                   if (!sentence) return null;
                   const isLast = i === arr.length - 1;
                   return (
                     <div key={i} className="mb-6 flex gap-4 group opacity-90 transition-opacity hover:opacity-100">
                       <div className="text-[#6b5a45] mt-1.5 select-none text-xl transition-colors group-hover:text-[#a89680]">◈</div>
                       <p className="text-justify font-light">
                         {sentence}{!isLast && !!sentence && !sentence.endsWith('.') ? '.' : ''}
                         {isLast && !sentence.endsWith('.') && !!sentence ? '.' : ''}
                       </p>
                     </div>
                   );
                 })}
               </div>
               
               <div className="mt-12 pt-8 border-t border-[#1f1a16] flex justify-between items-center opacity-80">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-[#2a241e] flex items-center justify-center bg-[#0d0a08]">
                       <span className="font-serif text-[#a89680] text-xl">{faction.name.charAt(0)}</span>
                    </div>
                    <span className="font-serif tracking-[0.2em] text-sm md:text-base text-[#857663]">무림연대기 (武林年代記)</span>
                 </div>
               </div>
            </div>
         </div>
         
       </motion.div>
    </div>
  )
}

function ParticleSystem({ type, color }: { type: string, color?: string }) {
  // Define particle templates
  const configs: Record<string, any> = {
    plum: { shape: 'petal', baseColor: '#fbcfe8', dir: 'down', speed: 1.2, size: [12, 24], blur: 0, count: 35, opacity: [0, 0.9, 0] },
    snow: { shape: 'circle', baseColor: '#ffffff', dir: 'down', speed: 0.6, size: [4, 10], blur: 1, count: 60, opacity: [0, 1, 0] },
    dust: { shape: 'circle', baseColor: '#cbd5e1', dir: 'up', speed: 0.3, size: [3, 8], blur: 1, count: 35, opacity: [0, 0.5, 0] },
    mist: { shape: 'circle', baseColor: '#e2e8f0', dir: 'up', speed: 0.15, size: [150, 300], blur: 50, count: 10, opacity: [0, 0.2, 0] },
    leaf: { shape: 'leaf', baseColor: '#65a30d', dir: 'down', speed: 0.9, size: [14, 26], blur: 0, count: 25, opacity: [0, 0.9, 0] },
    water: { shape: 'circle', baseColor: '#93c5fd', dir: 'up', speed: 0.8, size: [6, 16], blur: 1, count: 40, opacity: [0, 0.7, 0] },
    poison: { shape: 'circle', baseColor: '#34d399', dir: 'up', speed: 0.7, size: [5, 14], blur: 2, count: 35, opacity: [0, 0.8, 0] },
    ash: { shape: 'circle', baseColor: '#52525b', dir: 'up', speed: 1.2, size: [5, 12], blur: 1, count: 45, opacity: [0, 0.85, 0] },
    demonic: { shape: 'circle', baseColor: '#ef4444', dir: 'up', speed: 1.8, size: [8, 20], blur: 3, count: 40, opacity: [0, 0.8, 0] },
    gold: { shape: 'circle', baseColor: '#fbbf24', dir: 'up', speed: 0.8, size: [4, 12], blur: 1, count: 55, opacity: [0, 0.9, 0] }
  };

  const config = configs[type] || configs.dust;
  const pColor = color || config.baseColor;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(config.count)].map((_, i) => {
        const s = Math.random() * (config.size[1] - config.size[0]) + config.size[0];
        const startX = Math.random() * 120 - 10;
        const startY = config.dir === 'up' ? 110 : -10;
        
        return (
          <motion.div
            key={i}
            className="absolute shadow-lg"
            style={{
              width: s, 
              height: config.shape === 'petal' || config.shape === 'leaf' ? s * 0.8 : s,
              backgroundColor: pColor,
              borderRadius: config.shape === 'petal' ? '50% 0 50% 0' : config.shape === 'leaf' ? '0 50% 0 50%' : '50%',
              filter: `blur(${config.blur}px)`,
              boxShadow: config.blur < 10 ? `0 0 ${s}px ${pColor}80` : 'none',
              left: `${startX}%`,
              top: `${startY}%`
            }}
            animate={{
              y: [`0vh`, `${config.dir === 'up' ? '-' : ''}130vh`],
              x: [0, (Math.random() * 100 - 50)],
              rotate: config.shape !== 'circle' ? [0, 360 * (Math.random() > 0.5 ? 2 : -2)] : 0,
              opacity: config.opacity
            }}
            transition={{
              duration: (Math.random() * 8 + 6) / config.speed,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          />
        )
      })}
    </div>
  );
}