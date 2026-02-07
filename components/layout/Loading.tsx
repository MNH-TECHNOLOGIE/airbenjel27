"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Hide loading after page is fully loaded
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Show for 2 seconds minimum

    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Background Elements - Sports Equipment */}
      <div className="absolute inset-0 overflow-hidden bg-gray-50">
        {/* Animated Football */}
        <div className="absolute -left-20 top-1/4 animate-bounce-slow">
          <div className="h-16 w-16 rounded-full bg-gray-200/50 backdrop-blur-sm">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <polygon
                points="50,5 61,20 79,20 67,35 75,50 50,50 25,50 33,35 21,20 39,20"
                fill="gray"
                fillOpacity="0.2"
              />
            </svg>
          </div>
        </div>

        {/* Animated Basketball */}
        <div className="absolute -right-20 top-1/3 animate-bounce-slow-delay">
          <div className="h-12 w-12 rounded-full bg-gray-200/50 backdrop-blur-sm">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <path
                d="M50,10 Q30,30 30,50 Q30,70 50,90 Q70,70 70,50 Q70,30 50,10"
                stroke="gray"
                strokeWidth="2"
                fill="none"
                opacity="0.2"
              />
            </svg>
          </div>
        </div>

        {/* Animated Tennis Ball */}
        <div className="absolute left-1/4 -bottom-20 animate-bounce-slow-delay-2">
          <div className="h-10 w-10 rounded-full bg-gray-200/50 backdrop-blur-sm"></div>
        </div>

        {/* Floating Sports Icons */}
        <div className="absolute left-1/3 top-1/2 animate-float">
          <div className="text-4xl opacity-5">⚽</div>
        </div>
        <div className="absolute right-1/3 top-1/4 animate-float-delay">
          <div className="text-4xl opacity-5">🏀</div>
        </div>
        <div className="absolute left-1/2 bottom-1/4 animate-float-delay-2">
          <div className="text-4xl opacity-5">🎾</div>
        </div>

        {/* Animated Lines - Movement */}
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="absolute left-1/4 top-0 h-1 w-1/2 animate-slide-down bg-gray-200/30"></div>
          <div className="absolute right-1/4 top-0 h-1 w-1/3 animate-slide-down-delay bg-gray-200/30"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo with Animation - Much Larger */}
        <div className="mb-12 animate-scale-in">
          <Image
            src="/logo1.png"
            alt="AIR BENJEL 27 Logo"
            width={600}
            height={200}
            className="h-48 w-auto object-contain drop-shadow-lg sm:h-64 md:h-80 lg:h-96"
            style={{ maxWidth: "600px" }}
            onError={(e) => {
              console.error("Error loading logo:", e);
              // Fallback to text if image fails
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Sports Equipment Animation */}
        <div className="mb-8 flex items-center gap-4">
          {/* Animated Shirt */}
          <div className="animate-swing">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="1.5"
              className="opacity-40"
            >
              <path d="M6 3h12l-1 7H7L6 3z" />
              <path d="M6 10v11h12V10" />
            </svg>
          </div>

          {/* Animated Football */}
          <div className="animate-bounce">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="1.5"
              className="opacity-40"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a10 10 0 0 0-8 10 10 10 0 0 0 8 10" />
              <path d="M12 2a10 10 0 0 1 8 10 10 10 0 0 1-8 10" />
            </svg>
          </div>

          {/* Animated Trophy */}
          <div className="animate-pulse">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="1.5"
              className="opacity-40"
            >
              <path d="M6 9H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
              <path d="M6 9V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
              <path d="M6 13v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4" />
            </svg>
          </div>
        </div>

        {/* Loading Spinner with Sports Theme */}
        <div className="relative mb-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-secondary"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-secondary/20"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-2 h-1 w-48 overflow-hidden rounded-full bg-gray-200 sm:w-64">
          <div
            className="h-full bg-secondary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="text-sm font-semibold text-gray-700 sm:text-base">
          Chargement...
        </p>

        {/* Sports Equipment Text */}
        <p className="mt-2 text-xs text-gray-500 sm:text-sm">
          Équipementier sportif
        </p>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(20px);
          }
        }

        @keyframes bounce-slow-delay {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(-15px);
          }
        }

        @keyframes bounce-slow-delay-2 {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-25px) translateX(10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-180deg);
          }
        }

        @keyframes float-delay-2 {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-35px) rotate(90deg);
          }
        }

        @keyframes slide-down {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes slide-down-delay {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes scale-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes swing {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-10deg);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-bounce-slow-delay {
          animation: bounce-slow-delay 3.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-bounce-slow-delay-2 {
          animation: bounce-slow-delay-2 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 4.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-delay-2 {
          animation: float-delay-2 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-slide-down {
          animation: slide-down 3s linear infinite;
        }

        .animate-slide-down-delay {
          animation: slide-down-delay 3.5s linear infinite;
          animation-delay: 1s;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }

        .animate-swing {
          animation: swing 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
