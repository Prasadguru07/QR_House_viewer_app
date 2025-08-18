'use client';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeDetails from './components/homedetails';
import ConditionsAgree from './components/Conditions_agree';
import HomeView from './components/Home_view';
import Footer from './components/Footer';
const Home = () => {
    return (
        <main className="relative min-h-screen overflow-x-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10 w-full h-full animate-whitefade bg-white/60 backdrop-blur-lg">
                {/* Moving Circle Animation */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-300/40 blur-2xl animate-moveCircle"></div>
                <div className="absolute top-2/3 left-2/3 w-24 h-24 rounded-full bg-blue-400/30 blur-xl animate-moveCircle2"></div>
                {/* Neon Home Animation */}
                <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center animate-neonHome">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="30" y="60" width="60" height="40" rx="10" fill="#0ff" fillOpacity="0.2" stroke="#0ff" strokeWidth="3" filter="url(#neon-glow)" />
                        <polygon points="60,30 25,60 95,60" fill="#f0f" fillOpacity="0.15" stroke="#f0f" strokeWidth="3" filter="url(#neon-glow)" />
                        <defs>
                            <filter id="neon-glow" x="0" y="0" width="120" height="120" filterUnits="userSpaceOnUse">
                                <feGaussianBlur stdDeviation="6" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className="absolute top-1/3 left-3/4 w-16 h-16 rounded-full bg-pink-400/60 blur-xl animate-neonPulse"></div>
                <div className="absolute top-3/4 left-1/5 w-20 h-20 rounded-full bg-cyan-400/60 blur-xl animate-neonPulse2"></div>
            </div>
            <div>
                <Navbar />
                <section id="Hero"><Hero /></section>
                <br />
                <section id="HomeDetails"><HomeDetails /></section>
                <section id="ConditionsAgree"><ConditionsAgree /></section>
                <section id="HomeView"><HomeView /></section>
                <section id="Footer"><Footer /></section>
            </div>
            <style jsx global>{`
                @keyframes neonHome {
                    0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 0.7; }
                    50% { transform: translate(-50%, -50%) scale(1.08) rotate(8deg); opacity: 1; }
                    100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 0.7; }
                }
                .animate-neonHome {
                    animation: neonHome 6s ease-in-out infinite;
                }
                @keyframes neonPulse {
                    0%, 100% { opacity: 0.7; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                .animate-neonPulse {
                    animation: neonPulse 4s ease-in-out infinite;
                }
                @keyframes neonPulse2 {
                    0%, 100% { opacity: 0.7; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.3); }
                }
                .animate-neonPulse2 {
                    animation: neonPulse2 5s ease-in-out infinite;
                }
                @keyframes moveCircle {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(60px, -40px) scale(1.2); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                @keyframes moveCircle2 {
                    0% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-40px, 40px) scale(0.8); }
                    100% { transform: translate(0, 0) scale(1); }
                }
                .animate-moveCircle {
                    animation: moveCircle 7s ease-in-out infinite;
                }
                .animate-moveCircle2 {
                    animation: moveCircle2 9s ease-in-out infinite;
                }
                @keyframes whitefade {
                    0% {
                        opacity: 0.8;
                        filter: blur(0px);
                    }
                    50% {
                        opacity: 1;
                        filter: blur(6px);
                    }
                    100% {
                        opacity: 0.8;
                        filter: blur(0px);
                    }
                }
                .animate-whitefade {
                    animation: whitefade 8s ease-in-out infinite;
                }
            `}</style>
        </main>
    )
}

export default Home;






















































































