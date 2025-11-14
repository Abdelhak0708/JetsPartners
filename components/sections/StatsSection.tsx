"use client";

import { useEffect, useState, useRef } from "react";

interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export default function StatsSection() {
  const stats: Stat[] = [
    { id: 1, value: 300, suffix: "+", label: "Clients Served" },
    { id: 2, value: 30000, suffix: "+", label: "Aircraft" },
    { id: 3, value: 10, suffix: "+", label: "Lives Saved" },
  ];

  // Images de la bobine
  const leftSlides = [
    "https://jets.partners/wp-content/uploads/2025/08/688686.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/638.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/536464.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/753673.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/37335.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/9898689.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/55557.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/69896.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/688686-1.jpg",
  ];

  const rightSlides = [
    "https://jets.partners/wp-content/uploads/2025/08/55557-1.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/9898689-1.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/69896-1.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/37335-1.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/753673-1.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/536464-1.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/638-1.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/688686-2.jpg",
    "https://jets.partners/wp-content/uploads/2025/08/9898689-2.jpg",
  ];

  return (
    <section
      id="stats"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 35, 50, 0.85), rgba(26, 35, 50, 0.9)), url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Bobine de film gauche */}
      <div className="absolute top-0 left-0 h-full flex animate-scrollLeft space-x-4">
        {leftSlides.map((src, i) => (
          <img key={i} src={src} className="h-full object-cover" />
        ))}
      </div>

      {/* Bobine de film droite */}
      <div className="absolute top-0 right-0 h-full flex animate-scrollRight space-x-4">
        {rightSlides.map((src, i) => (
          <img key={i} src={src} className="h-full object-cover" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat) => (
            <StatCounter key={stat.id} stat={stat} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-scrollLeft {
          animation: scrollLeft 30s linear infinite;
        }
        .animate-scrollRight {
          animation: scrollRight 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

function StatCounter({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else setCount(Math.floor(currentCount));
    }, stepDuration);
    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + " " + (num % 1000).toString().padStart(3, "0");
    }
    return num.toString();
  };

  return (
    <div ref={ref} className="text-center">
      <div className="text-white mb-4">
        <span className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight">
          {formatNumber(count)}
        </span>
        <span className="text-4xl md:text-5xl lg:text-6xl font-light text-accent-blue">
          {stat.suffix}
        </span>
      </div>
      <p className="text-white text-lg md:text-xl font-light tracking-wide">{stat.label}</p>
    </div>
  );
}
