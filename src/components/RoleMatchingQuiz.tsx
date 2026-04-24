import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Hammer, Drama, Palette } from 'lucide-react';

const questions = [
  {
    question: "Wo fühlst du dich am wohlsten?",
    answers: [
      { text: "Im Rampenlicht, alle Blicke auf mich", type: "schauspiel" },
      { text: "Hinter den Kulissen, Probleme backend", type: "technik" },
      { text: "Beim kreativen Gestalten im Detail", type: "maske" }
    ]
  },
  {
    question: "Wie gehst du an Herausforderungen heran?",
    answers: [
      { text: "Emotional und mit vollem Körpereinsatz", type: "schauspiel" },
      { text: "Analytisch und lösungsorientiert", type: "technik" },
      { text: "Mit Geduld und Perfektionismus", type: "maske" }
    ]
  },
  {
    question: "Dein idealer Theater-Abend endet...",
    answers: [
      { text: "Mit tosendem Applaus für mich", type: "schauspiel" },
      { text: "Wenn das Licht pünktlich an und aus ging", type: "technik" },
      { text: "Wenn niemand die Klebestellen der Perücke sah", type: "maske" }
    ]
  }
];

const results = {
  schauspiel: {
    title: "Geborener Schauspieler",
    description: "Dein Platz ist auf der Bühne! Du hast die Präsenz und Emotion, um das Publikum in den Bann zu ziehen.",
    icon: Drama
  },
  technik: {
    title: "Technik & Bühnenbau",
    description: "Ohne dich bleibt es dunkel und stumm! Du sorgst für reibungslose Abläufe und das perfekte Set.",
    icon: Hammer
  },
  maske: {
    title: "Maske & Kostüm",
    description: "Du bist der unsichtbare Star! Deine Liebe zum Detail lässt Charaktere erst lebendig werden.",
    icon: Palette
  }
};

export default function RoleMatchingQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ schauspiel: 0, technik: 0, maske: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (type: 'schauspiel' | 'technik' | 'maske') => {
    setScores(prev => ({ ...prev, [type]: prev[type] + 1 }));
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScores({ schauspiel: 0, technik: 0, maske: 0 });
    setShowResult(false);
  };

  const getWinner = () => {
    const winner = Object.keys(scores).reduce((a, b) => scores[a as keyof typeof scores] > scores[b as keyof typeof scores] ? a : b);
    return results[winner as keyof typeof results];
  };

  const WinnerIcon = showResult ? getWinner().icon : null;

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Finde deine Rolle</h2>
        <p className="text-gray-400 mb-12">Teste in 3 Fragen, in welchem Bereich unseres Vereins du aufblühst.</p>
        
        <div className="bg-[#111] border border-[#222] p-8 md:p-12 relative min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="text-[#b91c1c] text-sm tracking-widest mb-6 uppercase">
                  Frage {currentQ + 1} von {questions.length}
                </div>
                <h3 className="text-2xl font-serif text-white mb-10">{questions[currentQ].question}</h3>
                
                <div className="space-y-4 flex flex-col items-center">
                  {questions[currentQ].answers.map((answer, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(answer.type as any)}
                      className="w-full max-w-md border border-[#333] hover:border-[#b91c1c] bg-transparent hover:bg-[#1a1a1a] text-gray-300 py-4 px-6 text-left transition-all duration-300 flex items-center group"
                    >
                      <span className="w-6 h-6 border border-gray-600 rounded-full mr-4 flex-shrink-0 group-hover:border-[#b91c1c] flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#b91c1c] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </span>
                      <span>{answer.text}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#b91c1c]/10 flex items-center justify-center text-[#b91c1c]">
                    {WinnerIcon && <WinnerIcon size={40} strokeWidth={1} />}
                  </div>
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">{getWinner().title}</h3>
                <p className="text-gray-400 mb-10 max-w-lg mx-auto">
                  {getWinner().description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="#kontakt" className="bg-[#b91c1c] text-black px-8 py-3 font-medium uppercase tracking-wider text-sm hover:bg-[#dc2626] transition-colors w-full sm:w-auto">
                    Komm ins Team
                  </a>
                  <button onClick={resetQuiz} className="border border-[#444] text-gray-300 px-8 py-3 uppercase tracking-wider text-sm hover:border-white hover:text-white transition-all w-full sm:w-auto">
                    Neu starten
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
