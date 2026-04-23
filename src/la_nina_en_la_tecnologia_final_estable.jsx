import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Code2,
  Bot,
  Palette,
  Sparkles,
  Brain,
  RotateCcw,
  CheckCircle2,
  Gamepad2,
  Search,
  X,
  Trophy,
  ArrowLeft,
  HelpCircle,
  Volume2,
  Medal,
  Crown,
  Gem,
  Lightbulb,
  CalendarDays,
  Expand,
  Minimize,
  Gauge,
  Orbit,
} from "lucide-react";
function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, className = "", ...props }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

const STORAGE_KEY = "lanina-tech-final-stable-v1";

const iconMap = {
  Programación: <Code2 className="h-10 w-10" />,
  Robótica: <Bot className="h-10 w-10" />,
  "Diseño digital": <Palette className="h-10 w-10" />,
  Ciencia: <Brain className="h-10 w-10" />,
};

const topics = [
  {
    title: "Programación",
    text: "Aprender a crear páginas, aplicaciones y videojuegos ayuda a desarrollar lógica, creatividad y confianza.",
  },
  {
    title: "Robótica",
    text: "Los robots convierten ideas en movimiento. Es una forma divertida de aprender ciencia, mecánica y tecnología.",
  },
  {
    title: "Diseño digital",
    text: "La tecnología también es arte. Diseñar imágenes, interfaces y contenido abre muchas puertas creativas.",
  },
];

const highlights = [
  {
    title: "Innovación",
    text: "Cada niña puede proponer ideas nuevas, resolver problemas y construir soluciones útiles para su comunidad.",
  },
  {
    title: "Aprendizaje",
    text: "Explorar herramientas digitales fortalece habilidades para el presente y prepara para un futuro con más oportunidades.",
  },
  {
    title: "Inspiración",
    text: "Ver a más niñas en tecnología motiva a otras a descubrir que también pueden crear, liderar e inventar.",
  },
];

const womenInTech = [
  {
    name: "Ada Lovelace",
    role: "Pionera de la programación",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
    text: "Es considerada una de las primeras programadoras de la historia.",
    year: "1843",
  },
  {
    name: "Grace Hopper",
    role: "Científica de la computación",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg",
    text: "Fue una figura clave en la evolución de los lenguajes de programación.",
    year: "1952",
  },
  {
    name: "Katherine Johnson",
    role: "Matemática de la NASA",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Katherine_Johnson_1983.jpg",
    text: "Sus cálculos ayudaron en misiones espaciales históricas.",
    year: "1962",
  },
];

const timelineItems = [
  {
    year: "1843",
    title: "Ada Lovelace escribe un algoritmo",
    text: "Una semilla temprana de la programación moderna.",
  },
  {
    year: "1952",
    title: "Grace Hopper impulsa nuevos lenguajes",
    text: "Ayudó a acercar la informática a más personas.",
  },
  {
    year: "1962",
    title: "Katherine Johnson apoya vuelos espaciales",
    text: "Sus cálculos fueron parte de misiones históricas.",
  },
  {
    year: "Hoy",
    title: "Más niñas crean el futuro",
    text: "Cada idea puede convertirse en una app, robot o diseño.",
  },
];

const techFacts = [
  "Ada Lovelace imaginó uno de los primeros programas de la historia.",
  "Grace Hopper ayudó a hacer la programación más accesible.",
  "Katherine Johnson participó en cálculos clave para misiones espaciales.",
  "La tecnología también puede usarse para resolver problemas reales en una comunidad.",
];

const memoryItems = [
  { label: "Programación", symbol: "💻" },
  { label: "Robótica", symbol: "🤖" },
  { label: "Diseño digital", symbol: "🎨" },
  { label: "Ciencia", symbol: "🔬" },
];

const quizQuestions = [
  {
    id: "q1",
    question: "¿Qué área se enfoca en crear páginas, apps y videojuegos?",
    options: ["Programación", "Robótica", "Astronomía"],
    correct: "Programación",
  },
  {
    id: "q2",
    question: "¿Quién fue una pionera de la programación?",
    options: ["Ada Lovelace", "Frida Kahlo", "Marie Curie"],
    correct: "Ada Lovelace",
  },
  {
    id: "q3",
    question: "¿Qué combina creatividad y tecnología para crear contenido visual?",
    options: ["Diseño digital", "Historia", "Cocina"],
    correct: "Diseño digital",
  },
  {
    id: "q4",
    question: "¿Qué institución hizo famosa a Katherine Johnson por sus cálculos?",
    options: ["NASA", "ONU", "UNESCO"],
    correct: "NASA",
  },
  {
    id: "q5",
    question: "¿Qué habilidad fortalece la programación?",
    options: ["La lógica", "Dormir más", "Bailar"],
    correct: "La lógica",
  },
];

const techWordSearch = {
  grid: [
    ["C", "O", "D", "I", "G", "O", "L", "M"],
    ["A", "R", "O", "B", "O", "T", "N", "P"],
    ["C", "I", "E", "N", "C", "I", "A", "Q"],
    ["N", "I", "Ñ", "A", "S", "T", "R", "S"],
    ["D", "I", "S", "E", "Ñ", "O", "K", "L"],
    ["P", "R", "O", "G", "R", "A", "M", "A"],
    ["T", "E", "C", "N", "O", "L", "O", "G"],
    ["I", "A", "X", "Y", "Z", "A", "B", "C"],
  ],
  words: [
    {
      id: "codigo",
      label: "Código",
      cells: ["0-0", "0-1", "0-2", "0-3", "0-4", "0-5"],
      color: "bg-pink-100 border-pink-300 text-pink-700",
      chip: "bg-pink-100 text-pink-700",
    },
    {
      id: "robot",
      label: "Robot",
      cells: ["1-1", "1-2", "1-3", "1-4", "1-5"],
      color: "bg-blue-100 border-blue-300 text-blue-700",
      chip: "bg-blue-100 text-blue-700",
    },
    {
      id: "ciencia",
      label: "Ciencia",
      cells: ["2-0", "2-1", "2-2", "2-3", "2-4", "2-5", "2-6"],
      color: "bg-emerald-100 border-emerald-300 text-emerald-700",
      chip: "bg-emerald-100 text-emerald-700",
    },
    {
      id: "nina",
      label: "Niña",
      cells: ["3-0", "3-1", "3-2", "3-3"],
      color: "bg-violet-100 border-violet-300 text-violet-700",
      chip: "bg-violet-100 text-violet-700",
    },
    {
      id: "diseno",
      label: "Diseño",
      cells: ["4-0", "4-1", "4-2", "4-3", "4-4", "4-5"],
      color: "bg-amber-100 border-amber-300 text-amber-700",
      chip: "bg-amber-100 text-amber-700",
    },
  ],
};

const sequenceIcons = [
  { id: "robot", label: "Robot", emoji: "🤖" },
  { id: "code", label: "Código", emoji: "💻" },
  { id: "design", label: "Diseño", emoji: "🎨" },
  { id: "science", label: "Ciencia", emoji: "🔬" },
];

const difficultyConfig = {
  facil: {
    label: "Fácil",
    memoryPreview: 1200,
    wordHint: true,
    sequenceLength: 3,
  },
  medio: {
    label: "Medio",
    memoryPreview: 700,
    wordHint: true,
    sequenceLength: 4,
  },
  dificil: {
    label: "Difícil",
    memoryPreview: 0,
    wordHint: false,
    sequenceLength: 5,
  },
};

const gamesCatalog = [
  {
    id: "memorias",
    title: "Juego de memorias",
    text: "Encuentra parejas relacionadas con tecnología y entrena tu memoria.",
    icon: Gamepad2,
  },
  {
    id: "sopa",
    title: "Sopa de letras",
    text: "Arrastra sobre las letras para descubrir palabras escondidas.",
    icon: Search,
  },
  {
    id: "quiz",
    title: "Mini quiz",
    text: "Responde preguntas rápidas y pon a prueba lo que aprendiste.",
    icon: HelpCircle,
  },
  {
    id: "secuencia",
    title: "Secuencia digital",
    text: "Memoriza una serie de íconos y repítela en el orden correcto.",
    icon: Orbit,
  },
];

const achievementsCatalog = [
  {
    id: "firstGame",
    title: "Primer paso",
    text: "Completaste tu primer juego.",
    icon: Medal,
  },
  {
    id: "score300",
    title: "Puntos en órbita",
    text: "Alcanzaste 300 puntos acumulados.",
    icon: Trophy,
  },
  {
    id: "allGames",
    title: "Arcade completo",
    text: "Jugaste todos los retos disponibles.",
    icon: Crown,
  },
  {
    id: "hardMode",
    title: "Modo valiente",
    text: "Ganaste un juego en dificultad difícil.",
    icon: Gem,
  },
];

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function buildDeck() {
  return shuffle(
    memoryItems
      .flatMap((item) => [
        { ...item, id: `${item.label}-a` },
        { ...item, id: `${item.label}-b` },
      ])
      .map((card) => ({ ...card, flipped: false, matched: false }))
  );
}

function safeLoadState() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function safeSaveState(value) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // ignore
  }
}

function useArcadeSounds(enabled) {
  const audioRef = useRef(null);

  const ensureContext = useCallback(() => {
    if (!enabled || typeof window === "undefined") return null;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return null;
    if (!audioRef.current) audioRef.current = new AudioCtx();
    if (audioRef.current.state === "suspended") {
      audioRef.current.resume().catch(() => {});
    }
    return audioRef.current;
  }, [enabled]);

  const tone = useCallback(
    (frequency, duration = 0.08, type = "triangle", volume = 0.04) => {
      const ctx = ensureContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = frequency;
      gain.gain.value = volume;
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now = ctx.currentTime;
      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      osc.start(now);
      osc.stop(now + duration);
    },
    [ensureContext]
  );

  return {
    click: () => tone(520, 0.05, "triangle", 0.03),
    success: () => {
      tone(660, 0.08, "triangle", 0.05);
      setTimeout(() => tone(880, 0.09, "triangle", 0.05), 70);
    },
    fail: () => tone(210, 0.11, "sawtooth", 0.035),
    victory: () => {
      tone(523.25, 0.09, "triangle", 0.05);
      setTimeout(() => tone(659.25, 0.1, "triangle", 0.05), 80);
      setTimeout(() => tone(783.99, 0.12, "triangle", 0.05), 170);
      setTimeout(() => tone(1046.5, 0.18, "triangle", 0.06), 280);
    },
  };
}

function triggerVibration(pattern = 30) {
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/60"
          style={{
            width: `${4 + (i % 4)}px`,
            height: `${4 + (i % 4)}px`,
            left: `${(i * 9) % 100}%`,
            top: `${(i * 11) % 100}%`,
          }}
          animate={{ y: [0, -14, 0], opacity: [0.35, 0.8, 0.35] }}
          transition={{ repeat: Infinity, duration: 3 + (i % 3), delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

function VictoryBurst({ show }) {
  if (!show) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.2, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.2, 1, 0.7],
            x: ((i % 4) - 1.5) * 90,
            y: (Math.floor(i / 4) - 1.5) * 70,
            rotate: i * 25,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-gradient-to-br from-yellow-300 via-pink-400 to-sky-400 shadow-[0_0_18px_rgba(244,114,182,0.55)]"
        />
      ))}
    </div>
  );
}

function ProgressBar({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/50 bg-white/70 p-3 shadow-sm backdrop-blur">
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-pink-500 via-violet-500 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}

function MascotBubble({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[28px] border border-white/60 bg-white/85 p-5 shadow-xl backdrop-blur"
    >
      <div className="flex items-start gap-4">
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [0, -4, 4, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br from-pink-500 to-blue-500 text-white shadow-lg"
        >
          <Bot className="h-8 w-8" />
        </motion.div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-600">Guía digital</p>
          <p className="mt-2 leading-7 text-slate-700">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

function MemoryGame({ onComplete, difficulty = "medio", soundOn = true }) {
  const [cards, setCards] = useState(buildDeck);
  const [selected, setSelected] = useState([]);
  const [locked, setLocked] = useState(false);
  const [moves, setMoves] = useState(0);
  const [finished, setFinished] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [previewing, setPreviewing] = useState(difficultyConfig[difficulty].memoryPreview > 0);
  const sounds = useArcadeSounds(soundOn);

  useEffect(() => {
    const previewTime = difficultyConfig[difficulty].memoryPreview;
    if (!previewTime) {
      setPreviewing(false);
      return undefined;
    }
    setPreviewing(true);
    const timer = window.setTimeout(() => setPreviewing(false), previewTime);
    return () => window.clearTimeout(timer);
  }, [difficulty]);

  const matches = useMemo(() => cards.filter((card) => card.matched).length / 2, [cards]);

  const handleCardClick = (clickedCard) => {
    if (previewing || locked || clickedCard.flipped || clickedCard.matched) return;
    sounds.click();

    const updatedCards = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, flipped: true } : card
    );
    const newSelected = [...selected, clickedCard.id];
    setCards(updatedCards);
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setLocked(true);
      setMoves((prev) => prev + 1);

      const [firstId, secondId] = newSelected;
      const firstCard = updatedCards.find((card) => card.id === firstId);
      const secondCard = updatedCards.find((card) => card.id === secondId);

      if (firstCard?.label === secondCard?.label) {
        sounds.success();
        triggerVibration([20, 25, 20]);
        const matchedCards = updatedCards.map((card) =>
          card.id === firstId || card.id === secondId ? { ...card, matched: true } : card
        );

        window.setTimeout(() => {
          setCards(matchedCards);
          setSelected([]);
          setLocked(false);
          if (matchedCards.every((card) => card.matched)) {
            setFinished(true);
            setCelebrate(true);
            sounds.victory();
            onComplete?.({ game: "memorias", score: 100, completed: true });
            window.setTimeout(() => setCelebrate(false), 1200);
          }
        }, 420);
      } else {
        sounds.fail();
        triggerVibration(20);
        window.setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstId || card.id === secondId ? { ...card, flipped: false } : card
            )
          );
          setSelected([]);
          setLocked(false);
        }, 780);
      }
    }
  };

  const resetGame = () => {
    setCards(buildDeck());
    setSelected([]);
    setLocked(false);
    setMoves(0);
    setFinished(false);
    setCelebrate(false);
    setPreviewing(difficultyConfig[difficulty].memoryPreview > 0);
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-pink-100 bg-white p-6 shadow-xl">
      <VictoryBurst show={celebrate} />
      {previewing && (
        <div className="mb-4 rounded-2xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
          Vista previa activa por nivel {difficultyConfig[difficulty].label}. Memoriza rápido antes de comenzar.
        </div>
      )}
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Juego de memorias</h3>
          <p className="text-sm text-slate-600">Encuentra las parejas relacionadas con la tecnología.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-pink-50 px-3 py-1 font-medium text-pink-700">Movimientos: {moves}</span>
          <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">Parejas: {matches}/4</span>
          <Button onClick={resetGame} variant="outline" className="rounded-2xl">
            <RotateCcw className="mr-2 h-4 w-4" /> Reiniciar
          </Button>
        </div>
      </div>

      {finished && (
        <div className="mb-5 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
          <CheckCircle2 className="h-5 w-5" /> ¡Muy bien! Completaste el juego y descubriste todas las parejas.
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {cards.map((card) => (
          <button key={card.id} onClick={() => handleCardClick(card)} className="group h-28 rounded-[24px] text-left touch-manipulation">
            <div
              className={`relative h-full w-full rounded-[24px] transition-all duration-500 [transform-style:preserve-3d] ${
                previewing || card.flipped || card.matched ? "[transform:rotateY(180deg)]" : ""
              } ${card.matched ? "scale-105" : ""}`}
            >
              <div className="absolute inset-0 flex items-center justify-center rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-pink-900 text-3xl text-white shadow-lg [backface-visibility:hidden]">
                ✦
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[24px] border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-blue-50 p-3 text-center shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <span className="text-3xl">{card.symbol}</span>
                <span className="mt-2 text-sm font-semibold text-slate-700">{card.label}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function WordSearchGame({ onComplete, difficulty = "medio", soundOn = true }) {
  const [foundWords, setFoundWords] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [selectedCells, setSelectedCells] = useState([]);
  const [flash, setFlash] = useState(false);
  const activePointerId = useRef(null);
  const sounds = useArcadeSounds(soundOn);

  useEffect(() => {
    if (foundWords.length === techWordSearch.words.length && foundWords.length > 0) {
      onComplete?.({ game: "sopa", score: 100, completed: true });
      sounds.victory();
      triggerVibration([35, 20, 40]);
      setFlash(true);
      const t = window.setTimeout(() => setFlash(false), 1200);
      return () => window.clearTimeout(t);
    }
    return undefined;
  }, [foundWords, onComplete, sounds]);

  const sameSequence = (a, b) => a.length === b.length && a.every((item, idx) => item === b[idx]);

  const getWordFromSelection = (selection) => {
    return techWordSearch.words.find((word) => {
      const reverse = [...word.cells].reverse();
      return sameSequence(selection, word.cells) || sameSequence(selection, reverse);
    });
  };

  const appendCell = useCallback((key) => {
    setSelectedCells((prev) => (prev.includes(key) ? prev : [...prev, key]));
  }, []);

  const beginSelection = useCallback((key, pointerId = null) => {
    sounds.click();
    activePointerId.current = pointerId;
    setDragging(true);
    setSelectedCells([key]);
  }, [sounds]);

  const finishSelection = useCallback(() => {
    setDragging(false);
    activePointerId.current = null;
    setSelectedCells((currentSelection) => {
      const matchedWord = getWordFromSelection(currentSelection);
      if (matchedWord && !foundWords.includes(matchedWord.id)) {
        sounds.success();
        triggerVibration(25);
        setFoundWords((prev) => [...prev, matchedWord.id]);
      } else if (currentSelection.length > 1) {
        sounds.fail();
      }
      return [];
    });
  }, [foundWords, sounds]);

  const moveFromPoint = useCallback(
    (clientX, clientY) => {
      if (typeof document === "undefined") return;
      const el = document.elementFromPoint(clientX, clientY);
      const cell = el?.closest?.("[data-cell-key]");
      const key = cell?.getAttribute?.("data-cell-key");
      if (key) appendCell(key);
    },
    [appendCell]
  );

  const handleBoardPointerMove = useCallback(
    (event) => {
      if (!dragging) return;
      if (activePointerId.current !== null && event.pointerId !== activePointerId.current) return;
      event.preventDefault();
      moveFromPoint(event.clientX, event.clientY);
    },
    [dragging, moveFromPoint]
  );

  useEffect(() => {
    if (!dragging || typeof window === "undefined") return undefined;
    const handleWindowPointerUp = () => finishSelection();
    const handleWindowPointerCancel = () => finishSelection();
    window.addEventListener("pointerup", handleWindowPointerUp);
    window.addEventListener("pointercancel", handleWindowPointerCancel);
    return () => {
      window.removeEventListener("pointerup", handleWindowPointerUp);
      window.removeEventListener("pointercancel", handleWindowPointerCancel);
    };
  }, [dragging, finishSelection]);

  const resetWords = () => {
    setFoundWords([]);
    setDragging(false);
    setSelectedCells([]);
    setFlash(false);
    activePointerId.current = null;
  };

  const showAllWords = () => {
    setFoundWords(techWordSearch.words.map((word) => word.id));
    setDragging(false);
    setSelectedCells([]);
    activePointerId.current = null;
  };

  const getCellClass = (rowIndex, colIndex) => {
    const key = `${rowIndex}-${colIndex}`;
    if (selectedCells.includes(key)) {
      return "bg-slate-900 border-slate-900 text-white scale-105";
    }
    const matchingWords = techWordSearch.words.filter(
      (word) => foundWords.includes(word.id) && word.cells.includes(key)
    );
    if (matchingWords.length > 0) {
      return matchingWords[matchingWords.length - 1].color;
    }
    return "bg-white border-slate-200 text-slate-800";
  };

  return (
    <div className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br from-sky-600 via-blue-500 to-indigo-600 p-5 shadow-xl md:p-8 ${flash ? "ring-4 ring-yellow-300" : ""}`}>
      <VictoryBurst show={flash} />
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">Juegos</p>
          <h3 className="text-3xl font-bold text-white">Sopa de letras</h3>
          <p className="mt-1 text-blue-100">Arrastra con mouse o dedo sobre las letras para formar una palabra completa.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-2xl bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">Encontradas: {foundWords.length}/{techWordSearch.words.length}</span>
          <button onClick={resetWords} className="rounded-2xl bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/20 touch-manipulation">Limpiar</button>
          <button onClick={showAllWords} className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-md transition hover:scale-105 touch-manipulation">Mostrar todas</button>
        </div>
      </div>

      <div className="rounded-[28px] bg-white/15 p-4 backdrop-blur md:p-5">
        <div className="mb-4 rounded-2xl bg-white/10 px-4 py-3 text-sm text-white">
          {difficultyConfig[difficulty].wordHint
            ? "Consejo: mantén presionado y desliza el dedo o el mouse sobre la palabra completa."
            : "Modo difícil: descubre las palabras sin pista extra y arrastra con precisión."}
        </div>
        <div className="rounded-[26px] bg-white p-4 shadow-xl md:p-6">
          <div
            className="grid grid-cols-8 justify-center gap-2 select-none touch-none"
            style={{ touchAction: "none" }}
            onPointerMove={handleBoardPointerMove}
            onPointerLeave={() => {
              if (dragging) finishSelection();
            }}
          >
            {techWordSearch.grid.map((row, rowIndex) =>
              row.map((letter, colIndex) => {
                const key = `${rowIndex}-${colIndex}`;
                return (
                  <button
                    type="button"
                    key={key}
                    data-cell-key={key}
                    onPointerDown={(event) => {
                      event.preventDefault();
                      beginSelection(key, event.pointerId);
                    }}
                    onPointerEnter={() => {
                      if (dragging) appendCell(key);
                    }}
                    onPointerUp={(event) => {
                      if (activePointerId.current === null || event.pointerId === activePointerId.current) finishSelection();
                    }}
                    className={`flex h-10 w-10 touch-none items-center justify-center rounded-xl border text-lg font-bold shadow-sm transition md:h-12 md:w-12 md:text-xl ${getCellClass(rowIndex, colIndex)}`}
                    style={{ touchAction: "none" }}
                  >
                    {letter}
                  </button>
                );
              })
            )}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {techWordSearch.words.map((word) => {
            const active = foundWords.includes(word.id);
            return (
              <div key={word.id} className={`rounded-xl px-4 py-2 text-sm font-bold uppercase tracking-wide shadow-sm transition md:text-base ${active ? `${word.chip} ring-2 ring-white/50` : "bg-white/15 text-white"}`}>
                {word.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MiniQuizArcade({ onComplete, difficulty = "medio", soundOn = true }) {
  const [quizAnswers, setQuizAnswers] = useState(
    Object.fromEntries(quizQuestions.map((item) => [item.id, ""]))
  );
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [winFlash, setWinFlash] = useState(false);
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const sounds = useArcadeSounds(soundOn);

  const score = quizQuestions.reduce(
    (acc, item) => acc + (quizAnswers[item.id] === item.correct ? 1 : 0),
    0
  );
  const answeredCount = Object.values(quizAnswers).filter(Boolean).length;

  useEffect(() => {
    if (quizSubmitted) {
      const finalScore = Math.round((score / quizQuestions.length) * 100);
      onComplete?.({ game: "quiz", score: finalScore, completed: finalScore >= 70 });
      if (finalScore >= 70) {
        sounds.victory();
        triggerVibration([30, 20, 40]);
        setWinFlash(true);
        const t = window.setTimeout(() => setWinFlash(false), 1200);
        return () => window.clearTimeout(t);
      }
      sounds.fail();
    }
    return undefined;
  }, [quizSubmitted, score, onComplete, sounds]);

  const handleSelect = (questionId, option) => {
    sounds.click();
    setQuizAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const resetQuiz = () => {
    setQuizAnswers(Object.fromEntries(quizQuestions.map((item) => [item.id, ""])));
    setQuizSubmitted(false);
    setCurrentQuestionIndex(0);
    setWinFlash(false);
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-6 shadow-xl">
      <VictoryBurst show={winFlash} />
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Mini quiz</h3>
          <p className="text-sm text-slate-600">Responde preguntas rápidas dentro de la zona de juegos.</p>
        </div>
        <Button onClick={resetQuiz} variant="outline" className="rounded-2xl">Reiniciar quiz</Button>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-pink-50 px-3 py-1 font-medium text-pink-700">Respondidas: {answeredCount}/{quizQuestions.length}</span>
        <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">Nivel {difficultyConfig[difficulty].label}</span>
      </div>

      <div className="rounded-2xl border border-slate-100 p-5">
        <h4 className="text-lg font-semibold text-slate-900">{currentQuestion.question}</h4>
        <div className="mt-4 grid gap-3">
          {currentQuestion.options.map((option) => {
            const selected = quizAnswers[currentQuestion.id] === option;
            const isCorrect = currentQuestion.correct === option;
            return (
              <button
                type="button"
                key={option}
                onClick={() => handleSelect(currentQuestion.id, option)}
                className={`rounded-2xl border px-4 py-3 text-left transition touch-manipulation ${selected ? "border-slate-900 bg-slate-50" : "border-slate-200 bg-white hover:bg-slate-50"} ${quizSubmitted && isCorrect ? "border-emerald-300 bg-emerald-50" : ""}`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          type="button"
          onClick={() => setCurrentQuestionIndex((prev) => (prev === 0 ? quizQuestions.length - 1 : prev - 1))}
          variant="outline"
          className="rounded-2xl"
        >
          Anterior
        </Button>
        <Button
          type="button"
          onClick={() => setCurrentQuestionIndex((prev) => (prev + 1) % quizQuestions.length)}
          variant="outline"
          className="rounded-2xl"
        >
          Siguiente
        </Button>
        <Button onClick={() => setQuizSubmitted(true)} className="rounded-2xl">Ver resultado</Button>
        {quizSubmitted && (
          <div className="rounded-2xl bg-pink-50 px-4 py-3 font-medium text-pink-700">Tu puntaje es {score} de {quizQuestions.length}</div>
        )}
      </div>
    </div>
  );
}

function SequenceGame({ onComplete, difficulty = "medio", soundOn = true }) {
  const sounds = useArcadeSounds(soundOn);
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [showing, setShowing] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [roundDone, setRoundDone] = useState(false);
  const requiredLength = difficultyConfig[difficulty].sequenceLength;

  const buildSequence = useCallback(
    () => Array.from({ length: requiredLength }, () => sequenceIcons[Math.floor(Math.random() * sequenceIcons.length)].id),
    [requiredLength]
  );

  useEffect(() => {
    const next = buildSequence();
    setSequence(next);
    setPlayerSequence([]);
    setRoundDone(false);
    setShowing(true);
  }, [difficulty, buildSequence]);

  useEffect(() => {
    if (!showing || sequence.length === 0) return undefined;
    let index = 0;
    const interval = window.setInterval(() => {
      const id = sequence[index];
      setActiveId(id);
      sounds.click();
      window.setTimeout(() => setActiveId(null), 320);
      index += 1;
      if (index >= sequence.length) {
        window.clearInterval(interval);
        window.setTimeout(() => setShowing(false), 400);
      }
    }, 650);
    return () => window.clearInterval(interval);
  }, [showing, sequence, sounds]);

  const resetRound = () => {
    const next = buildSequence();
    setSequence(next);
    setPlayerSequence([]);
    setRoundDone(false);
    setShowing(true);
  };

  const handlePress = (id) => {
    if (showing || roundDone) return;
    sounds.click();
    const next = [...playerSequence, id];
    setPlayerSequence(next);
    const currentIndex = next.length - 1;
    if (sequence[currentIndex] !== id) {
      sounds.fail();
      triggerVibration(20);
      onComplete?.({ game: "secuencia", score: 35, completed: false });
      setRoundDone(true);
      return;
    }
    if (next.length === sequence.length) {
      sounds.victory();
      triggerVibration([30, 20, 40]);
      onComplete?.({ game: "secuencia", score: 100, completed: true });
      setRoundDone(true);
    }
  };

  return (
    <div className="rounded-[28px] border border-violet-100 bg-white p-6 shadow-xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Secuencia digital</h3>
          <p className="text-sm text-slate-600">Observa la serie y repítela en el mismo orden.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">Longitud {requiredLength}</span>
          <Button variant="outline" className="rounded-2xl" onClick={resetRound}>Nueva secuencia</Button>
        </div>
      </div>

      <div className="mb-5 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
        {showing ? "Memoriza la secuencia brillante." : roundDone ? "Ronda terminada. Puedes generar otra secuencia." : "Ahora toca los íconos en el orden correcto."}
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        {sequenceIcons.map((item) => (
          <button
            key={item.id}
            onClick={() => handlePress(item.id)}
            className={`rounded-[24px] border p-6 text-center transition touch-manipulation ${activeId === item.id ? "scale-105 border-violet-400 bg-violet-50 shadow-lg" : "border-slate-200 bg-white hover:bg-slate-50"}`}
          >
            <div className="text-4xl">{item.emoji}</div>
            <div className="mt-3 font-semibold text-slate-700">{item.label}</div>
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
        Tu intento: {playerSequence.length > 0 ? playerSequence.map((id) => sequenceIcons.find((item) => item.id === id)?.emoji).join(" ") : "Aún no has tocado ningún ícono."}
      </div>
    </div>
  );
}

function AchievementPanel({ unlockedIds }) {
  return (
    <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-xl backdrop-blur">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-2xl bg-gradient-to-br from-amber-400 to-pink-500 p-3 text-white shadow-lg">
          <Crown className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Logros desbloqueables</h3>
          <p className="text-sm text-slate-600">Cada pequeño avance suma una chispa al arcade.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        {achievementsCatalog.map((achievement) => {
          const unlocked = unlockedIds.includes(achievement.id);
          const Icon = achievement.icon;
          return (
            <div key={achievement.id} className={`rounded-[24px] border p-4 transition ${unlocked ? "border-emerald-200 bg-emerald-50" : "border-slate-200 bg-white"}`}>
              <div className="flex items-start gap-3">
                <div className={`rounded-2xl p-3 ${unlocked ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{achievement.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{achievement.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function InspirationTimeline() {
  return (
    <Card className="rounded-[32px] border-slate-100 shadow-lg">
      <CardContent className="p-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Línea del tiempo inspiradora</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">Un pequeño recorrido por ideas y nombres que abrieron caminos.</p>
        </div>
        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <div key={item.year + item.title} className="grid gap-4 md:grid-cols-[120px_1fr] md:gap-6">
              <div className="flex items-start">
                <div className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white shadow-md">{item.year}</div>
              </div>
              <div className="relative rounded-[24px] border border-slate-100 bg-slate-50 p-5">
                {index < timelineItems.length - 1 && <div className="absolute -bottom-6 left-6 h-6 w-[2px] bg-gradient-to-b from-pink-300 to-blue-300" />}
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function GamesModal({ open, onClose, persistentState, setPersistentState }) {
  const [activeGame, setActiveGame] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [difficulty, setDifficulty] = useState(persistentState.unlockedHard ? "dificil" : "medio");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;
    const handler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const handleComplete = ({ game, score, completed }) => {
    setPersistentState((prev) => {
      const updatedGameScores = { ...prev.gameScores, [game]: Math.max(prev.gameScores[game] || 0, score) };
      const playedGames = Array.from(new Set([...(prev.playedGames || []), game]));
      const totalPoints = Object.values(updatedGameScores).reduce((a, b) => a + b, 0);
      const highScore = Math.max(prev.highScore || 0, totalPoints);

      const unlocked = new Set(prev.achievements || []);
      if (playedGames.length >= 1) unlocked.add("firstGame");
      if (totalPoints >= 300) unlocked.add("score300");
      if (playedGames.length >= gamesCatalog.length) unlocked.add("allGames");
      if (difficulty === "dificil" && completed) unlocked.add("hardMode");

      const unlockedHard = prev.unlockedHard || playedGames.length >= 3 || totalPoints >= 200;

      return {
        ...prev,
        gameScores: updatedGameScores,
        playedGames,
        highScore,
        achievements: Array.from(unlocked),
        unlockedHard,
      };
    });

    if (Object.keys({ ...persistentState.gameScores, [game]: score }).length >= gamesCatalog.length) {
      setShowSummary(true);
    }
  };

  const totalPoints = Object.values(persistentState.gameScores || {}).reduce((a, b) => a + b, 0);
  const averagePoints = gamesCatalog.length ? Math.round(totalPoints / gamesCatalog.length) : 0;
  const progressPercent = Math.round(((persistentState.playedGames?.length || 0) / gamesCatalog.length) * 100);

  const toggleFullscreen = async () => {
    if (typeof document === "undefined" || !wrapperRef.current) return;
    try {
      if (!document.fullscreenElement && wrapperRef.current.requestFullscreen) {
        await wrapperRef.current.requestFullscreen();
      } else if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {
      // ignore
    }
  };

  const renderGame = () => {
    if (activeGame === "memorias") return <MemoryGame onComplete={handleComplete} difficulty={difficulty} soundOn={soundOn} />;
    if (activeGame === "sopa") return <WordSearchGame onComplete={handleComplete} difficulty={difficulty} soundOn={soundOn} />;
    if (activeGame === "quiz") return <MiniQuizArcade onComplete={handleComplete} difficulty={difficulty} soundOn={soundOn} />;
    if (activeGame === "secuencia") return <SequenceGame onComplete={handleComplete} difficulty={difficulty} soundOn={soundOn} />;
    return null;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <motion.div
            ref={wrapperRef}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative h-[92vh] w-full max-w-7xl overflow-hidden rounded-[36px] border border-white/20 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.22),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.22),_transparent_25%),linear-gradient(to_bottom,_#fff7fb,_#ffffff,_#eff6ff)] shadow-2xl"
          >
            <FloatingParticles />
            <div className="relative flex h-full flex-col">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 bg-white/70 px-6 py-4 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-900 p-3 text-white shadow-md"><Gamepad2 className="h-5 w-5" /></div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Zona de juegos</h2>
                    <p className="text-sm text-slate-600">Un mini arcade para aprender jugando.</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-end gap-2">
                  <button type="button" onClick={() => setSoundOn((prev) => !prev)} className={`rounded-2xl border px-4 py-2 text-sm font-medium touch-manipulation ${soundOn ? "bg-white text-slate-900" : "bg-slate-100 text-slate-500"}`}>
                    <Volume2 className="mr-2 inline h-4 w-4" /> {soundOn ? "Sonido on" : "Sonido off"}
                  </button>
                  <button type="button" onClick={toggleFullscreen} className="rounded-2xl border bg-white px-4 py-2 text-sm font-medium text-slate-900 touch-manipulation">
                    {isFullscreen ? <Minimize className="mr-2 inline h-4 w-4" /> : <Expand className="mr-2 inline h-4 w-4" />}
                    {isFullscreen ? "Salir pantalla completa" : "Pantalla completa"}
                  </button>
                  <div className="flex items-center gap-2 rounded-2xl border bg-white px-3 py-2">
                    {Object.entries(difficultyConfig).map(([key, value]) => {
                      const locked = key === "dificil" && !persistentState.unlockedHard;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => !locked && setDifficulty(key)}
                          className={`rounded-xl px-3 py-1 text-sm font-medium transition touch-manipulation ${difficulty === key ? "bg-slate-900 text-white" : locked ? "text-slate-300" : "text-slate-600 hover:bg-slate-100"}`}
                        >
                          {value.label}{locked ? " 🔒" : ""}
                        </button>
                      );
                    })}
                  </div>
                  <button type="button" onClick={() => setShowSummary(true)} className="rounded-2xl border bg-white px-4 py-2 text-sm font-medium text-slate-900 touch-manipulation"><Trophy className="mr-2 inline h-4 w-4" /> Puntaje</button>
                  {activeGame && <Button variant="outline" className="rounded-2xl" onClick={() => setActiveGame(null)}><ArrowLeft className="mr-2 h-4 w-4" /> Volver</Button>}
                  <Button variant="outline" className="rounded-2xl" onClick={onClose}><X className="mr-2 h-4 w-4" /> Cerrar</Button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto overscroll-contain p-6 md:p-8">
                {!activeGame ? (
                  <>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur">
                      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
                        <div>
                          <p className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700"><Sparkles className="h-4 w-4" /> Arcade creativo</p>
                          <h3 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">Elige un juego para empezar</h3>
                          <p className="mt-3 max-w-2xl leading-7 text-slate-600">Aquí encontrarás actividades interactivas sobre tecnología. Cada botón abre un juego en grande, con progreso guardado y logros.</p>
                          <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <ProgressBar value={progressPercent} label="Exploración del arcade" />
                            <ProgressBar value={clamp(Math.round((totalPoints / 400) * 100), 0, 100)} label="Energía de puntaje" />
                          </div>
                        </div>
                        <div className="grid gap-4">
                          <div className="rounded-[28px] bg-gradient-to-br from-slate-900 via-slate-800 to-pink-900 px-6 py-5 text-white shadow-lg">
                            <p className="text-sm uppercase tracking-[0.2em] text-pink-200">Modo juego</p>
                            <p className="mt-2 text-3xl font-bold">{gamesCatalog.length} retos</p>
                            <p className="mt-1 text-sm text-slate-200">Puntaje total: {totalPoints}</p>
                            <p className="mt-1 text-xs text-pink-200">Récord: {persistentState.highScore || 0}</p>
                          </div>
                          <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-5 shadow-sm">
                            <div className="flex items-start gap-3">
                              <div className="rounded-2xl bg-white p-3 shadow-sm"><CalendarDays className="h-5 w-5 text-amber-500" /></div>
                              <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Experiencia destacada</p>
                                <h4 className="mt-1 text-lg font-bold text-slate-900">Arcade educativo</h4>
                                <p className="mt-2 text-sm leading-6 text-slate-600">Selección final con logros, pantalla completa, línea del tiempo y juegos bien pulidos.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                      {gamesCatalog.map((game, index) => {
                        const Icon = game.icon;
                        const completed = persistentState.gameScores?.[game.id] !== undefined;
                        return (
                          <motion.div key={game.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: index * 0.05 }}>
                            <Card className="h-full rounded-[32px] border-slate-100 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                              <CardContent className="flex h-full flex-col p-6">
                                <div className="mb-5 flex items-center justify-between">
                                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-blue-100 text-slate-800"><Icon className="h-7 w-7" /></div>
                                  {completed && <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{persistentState.gameScores[game.id]} pts</div>}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">{game.title}</h3>
                                <p className="mt-3 flex-1 leading-7 text-slate-600">{game.text}</p>
                                <div className="mt-5 rounded-[24px] border border-slate-100 bg-slate-50 p-4">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-slate-700">Vista previa</span>
                                    <span className="text-xs text-slate-500">Arcade</span>
                                  </div>
                                  <div className="mt-4 flex items-center justify-center rounded-2xl bg-white p-5 shadow-sm"><Icon className="h-10 w-10 text-slate-800" /></div>
                                </div>
                                <Button onClick={() => setActiveGame(game.id)} className="mt-5 rounded-2xl">Abrir juego</Button>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <motion.div key={activeGame} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.25 }}>
                    {renderGame()}
                  </motion.div>
                )}
              </div>
            </div>

            <AnimatePresence>
              {showSummary && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/45 p-4">
                  <motion.div initial={{ scale: 0.9, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }} className="w-full max-w-2xl rounded-[32px] border border-white/40 bg-white/95 p-8 shadow-2xl">
                    <div className="text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-pink-400 text-white shadow-lg"><Trophy className="h-10 w-10" /></div>
                      <h3 className="mt-5 text-3xl font-bold text-slate-900">Pantalla final</h3>
                      <p className="mt-2 text-slate-600">Aquí va tu resumen de puntaje.</p>
                    </div>
                    <div className="mt-6 grid gap-4 sm:grid-cols-4">
                      <div className="rounded-2xl bg-pink-50 p-4 text-center"><p className="text-sm text-pink-700">Puntos</p><p className="mt-1 text-3xl font-bold text-pink-700">{totalPoints}</p></div>
                      <div className="rounded-2xl bg-blue-50 p-4 text-center"><p className="text-sm text-blue-700">Promedio</p><p className="mt-1 text-3xl font-bold text-blue-700">{averagePoints}</p></div>
                      <div className="rounded-2xl bg-emerald-50 p-4 text-center"><p className="text-sm text-emerald-700">Completados</p><p className="mt-1 text-3xl font-bold text-emerald-700">{persistentState.playedGames?.length || 0}/{gamesCatalog.length}</p></div>
                      <div className="rounded-2xl bg-amber-50 p-4 text-center"><p className="text-sm text-amber-700">Récord</p><p className="mt-1 text-3xl font-bold text-amber-700">{persistentState.highScore || 0}</p></div>
                    </div>
                    <div className="mt-6 space-y-3">
                      {gamesCatalog.map((game) => (
                        <div key={game.id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                          <div className="flex items-center gap-3"><Medal className="h-5 w-5 text-amber-500" /><span className="font-medium text-slate-800">{game.title}</span></div>
                          <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-slate-700 shadow-sm">{persistentState.gameScores?.[game.id] ?? 0} pts</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <Button variant="outline" className="rounded-2xl" onClick={() => setShowSummary(false)}>Cerrar resumen</Button>
                      <Button className="rounded-2xl" onClick={() => { setActiveGame(null); setShowSummary(false); }}>Seguir jugando</Button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function LaNinaEnLaTecnologiaWeb() {
  const [showExplore, setShowExplore] = useState(false);
  const [showGames, setShowGames] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const [persistentState, setPersistentState] = useState({
    gameScores: {},
    highScore: 0,
    playedGames: [],
    achievements: [],
    unlockedHard: false,
  });

  useEffect(() => {
    const loaded = safeLoadState();
    if (loaded) {
      setPersistentState((prev) => ({ ...prev, ...loaded }));
    }
  }, []);

  useEffect(() => {
    safeSaveState(persistentState);
  }, [persistentState]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFactIndex((prev) => (prev + 1) % techFacts.length);
    }, 3800);
    return () => window.clearInterval(interval);
  }, []);

  const exploredProgress = Math.round(((persistentState.playedGames?.length || 0) / gamesCatalog.length) * 100);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.10),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.12),_transparent_30%),linear-gradient(to_bottom,_#fff7fb,_#ffffff,_#eff6ff)] text-slate-800">
      <FloatingParticles />
      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-2xl backdrop-blur md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700 shadow-sm">
                <Sparkles className="h-4 w-4" /> Experiencia web interactiva final
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">La niña en la tecnología</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">Un espacio que celebra la creatividad, la inteligencia y el futuro de las niñas dentro del mundo tecnológico.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <ProgressBar value={exploredProgress} label="Progreso del mundo interactivo" />
                <ProgressBar value={clamp(Math.round(((persistentState.highScore || 0) / 400) * 100), 0, 100)} label="Récord acumulado" />
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button onClick={() => setShowExplore((prev) => !prev)} className="rounded-2xl px-6 py-6 text-base">{showExplore ? "Ocultar opciones" : "Conocer más"}</Button>
                <Button onClick={() => setShowGames(true)} variant="outline" className="rounded-2xl px-6 py-6 text-base"><Gamepad2 className="mr-2 h-5 w-5" /> Abrir juegos</Button>
              </div>
            </div>

            <div className="relative space-y-5">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-pink-200/60 blur-2xl" />
              <div className="absolute -bottom-3 right-5 h-24 w-24 rounded-full bg-blue-200/70 blur-2xl" />
              <Card className="overflow-hidden rounded-[32px] border-pink-100 shadow-xl">
                <CardContent className="bg-gradient-to-br from-slate-900 via-slate-800 to-pink-900 p-8 text-white">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-white/10 p-3"><Cpu className="h-8 w-8" /></div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-pink-200">Futuro digital</p>
                      <h2 className="text-2xl font-bold">Ideas que brillan</h2>
                    </div>
                  </div>
                  <p className="leading-7 text-slate-200">La tecnología no solo se trata de máquinas y pantallas. También trata de imaginación, soluciones, diseño, trabajo en equipo y sueños que aprenden a encenderse.</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white/10 p-4"><p className="text-3xl font-bold">+Creatividad</p><p className="mt-1 text-sm text-slate-200">Más ideas, más confianza, más oportunidades.</p></div>
                    <div className="rounded-2xl bg-white/10 p-4"><p className="text-3xl font-bold">+Aprendizaje</p><p className="mt-1 text-sm text-slate-200">Explorar, crear y descubrir nuevas habilidades.</p></div>
                  </div>
                </CardContent>
              </Card>
              <MascotBubble text={`Tip brillante: ${techFacts[factIndex]}`} />
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-[32px] border-slate-100 shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700"><CalendarDays className="h-4 w-4" /> Experiencia destacada</p>
                  <h2 className="mt-4 text-3xl font-bold text-slate-900">Arcade educativo</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-slate-600">Una selección final con logros, pantalla completa, línea del tiempo y cuatro juegos bien pulidos.</p>
                </div>
                <div className="rounded-[28px] bg-slate-50 px-6 py-5 text-center shadow-sm text-slate-700">
                  <p className="text-sm uppercase tracking-[0.18em]">Estado</p>
                  <p className="mt-2 text-2xl font-bold">Activo</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-[32px] border-slate-100 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-pink-100 p-3 text-slate-800"><Gauge className="h-6 w-6" /></div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Tablero rápido</h2>
                  <p className="text-sm text-slate-600">Un vistazo a tus avances.</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-pink-50 p-4 text-center"><p className="text-sm text-pink-700">Récord</p><p className="mt-1 text-3xl font-bold text-pink-700">{persistentState.highScore || 0}</p></div>
                <div className="rounded-2xl bg-blue-50 p-4 text-center"><p className="text-sm text-blue-700">Juegos probados</p><p className="mt-1 text-3xl font-bold text-blue-700">{persistentState.playedGames?.length || 0}</p></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {showExplore && (
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mt-10 rounded-[32px] border border-pink-100 bg-white p-8 shadow-xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-slate-900">Explora áreas de la tecnología</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {topics.map((topic) => (
                <Card key={topic.title} className="rounded-[28px] border-slate-100 shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-pink-100 to-blue-100 p-3 text-slate-700">{iconMap[topic.title]}</div>
                    <h3 className="text-xl font-semibold text-slate-900">{topic.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{topic.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: index * 0.07 }}>
              <Card className="h-full rounded-[28px] border-slate-100 shadow-md">
                <CardContent className="p-6">
                  <h2 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h2>
                  <p className="leading-7 text-slate-600">{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-[32px] border-slate-100 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900">¿Por qué es importante?</h2>
              <p className="mt-4 leading-8 text-slate-600">La participación de las niñas en la tecnología impulsa la igualdad, fortalece la educación y demuestra que el talento no tiene límites. Cuando una niña descubre que puede programar, diseñar, inventar o construir, también descubre una nueva forma de creer en sí misma.</p>
              <p className="mt-4 leading-8 text-slate-600">Esta versión final se enfocó en menos funciones, pero mejor ejecutadas: logros, línea del tiempo, pantalla completa y juegos sólidos.</p>
            </CardContent>
          </Card>
          <AchievementPanel unlockedIds={persistentState.achievements || []} />
        </div>

        <div className="mt-10">
          <Card className="rounded-[32px] border-slate-100 shadow-lg">
            <CardContent className="p-8">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-900">Mujeres que inspiran en la tecnología</h2>
                <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">Grandes mujeres han dejado huella en la historia de la tecnología.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {womenInTech.map((woman, index) => (
                  <motion.div key={woman.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: index * 0.08 }}>
                    <Card className="overflow-hidden rounded-[28px] border-slate-100 shadow-md">
                      <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                        <img src={woman.image} alt={woman.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                        <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-sm font-bold text-slate-900 shadow">{woman.year}</div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-slate-900">{woman.name}</h3>
                        <p className="mt-1 text-sm font-medium text-pink-600">{woman.role}</p>
                        <p className="mt-3 leading-7 text-slate-600">{woman.text}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10"><InspirationTimeline /></div>

        <div className="mt-10 rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Sabías que...</h2>
              <p className="mt-2 leading-7 text-slate-600">Las ideas pequeñas pueden convertirse en grandes inventos digitales.</p>
            </div>
            <div className="rounded-[28px] bg-gradient-to-br from-slate-900 to-pink-900 px-5 py-4 text-white shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-pink-200">Dato curioso</p>
              <AnimatePresence mode="wait">
                <motion.p key={factIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-2 max-w-md leading-7 text-slate-100">
                  {techFacts[factIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {techFacts.slice(0, 2).map((fact) => (
              <div key={fact} className="rounded-[24px] border border-slate-100 bg-slate-50 p-5">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                <p className="mt-3 leading-7 text-slate-700">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GamesModal open={showGames} onClose={() => setShowGames(false)} persistentState={persistentState} setPersistentState={setPersistentState} />
    </main>
  );
}
