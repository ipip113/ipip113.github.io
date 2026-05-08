import { FACTIONS, UNIVERSE_INFO } from '../data';
import { motion } from 'motion/react';

export default function WorldInfo() {
  return (
    <div className="relative space-y-24 py-16 text-zinc-200">
      {/* World Info Background Effect */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
        }}
      />

      {/* Intro */}
      <section className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl brush-font text-orange-300"
        >
          세계관 (世界觀)
        </motion.h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-800 to-transparent mx-auto" />
        <div className="space-y-4">
          {UNIVERSE_INFO.background.map((para, idx) => (
            <p key={idx} className="text-lg leading-relaxed text-zinc-300">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Grid Settings */}
      <section className="relative z-10 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Environment */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border border-zinc-800 bg-zinc-900/50 p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-red-900/50" />
          <h3 className="text-3xl brush-font text-amber-200 mb-6">환경 설정</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-red-700">❖</span>
              <div>
                <strong className="block text-zinc-100 mb-1">통화 (通貨)</strong>
                <span className="text-zinc-400">{UNIVERSE_INFO.currency}</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-red-700">❖</span>
              <div>
                <strong className="block text-zinc-100 mb-1">낙양 (洛陽)</strong>
                <span className="text-zinc-400">{UNIVERSE_INFO.luoyang}</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-red-700">❖</span>
              <div>
                <strong className="block text-zinc-100 mb-1">무림맹 (武林盟)</strong>
                <span className="text-zinc-400">{UNIVERSE_INFO.wulinAlliance}</span>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Levels */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border border-zinc-800 bg-zinc-900/50 p-8 relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-2 h-full bg-orange-900/50" />
          <h3 className="text-3xl brush-font text-amber-200 mb-6">무의 경지</h3>
          <div className="flex flex-wrap gap-2 text-sm mb-6">
            {UNIVERSE_INFO.levels.map((lvl, index) => (
              <span key={lvl} className="px-3 py-1 bg-zinc-950 border border-zinc-700 text-amber-100/80">
                {lvl} {index < UNIVERSE_INFO.levels.length - 1 && <span className="ml-2 text-red-900">➔</span>}
              </span>
            ))}
          </div>
          <div className="pt-4 border-t border-zinc-800">
             <h4 className="text-zinc-400 mb-2">세부 단계</h4>
             <div className="flex gap-4 font-medium text-amber-500/70">
                {UNIVERSE_INFO.subLevels.join(" ➔ ")}
             </div>
          </div>
        </motion.div>
      </section>

      {/* Factions */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 space-y-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl brush-font text-orange-300">세력 (勢力)</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-800 to-transparent mx-auto" />
        </div>

        <div className="space-y-12">
          {FACTIONS.map((faction, idx) => (
            <motion.div 
              key={faction.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-zinc-900/30 border-y border-zinc-800/50 py-8 px-4 md:px-8 flex flex-col md:flex-row gap-8"
            >
              <div className="md:w-1/4 shrink-0">
                <h3 className="text-3xl brush-font text-red-400 mb-2">{faction.name}</h3>
                <p className="text-sm text-zinc-500">{faction.description}</p>
              </div>
              <div className="md:w-3/4 grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {faction.members.map(member => (
                   <div key={member.name} className="flex flex-col">
                      <strong className="text-amber-100/90 text-lg mb-1">{member.name}</strong>
                      <span className="text-sm text-zinc-400 leading-relaxed">{member.desc}</span>
                   </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
