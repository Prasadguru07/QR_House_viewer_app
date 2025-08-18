
"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className="w-full bg-white py-20 flex flex-col items-center justify-center text-center shadow-md rounded-lg mt-24 transition-all duration-700 animate-fade-in-down relative overflow-hidden"
        >
            {/* Animated White Gradient Background */}
            <div className="absolute inset-0 -z-10 w-full h-full animate-heroWhite bg-gradient-to-br from-white via-blue-50 to-white opacity-80">
                {/* Elegant Moving Object */}
                <div className="absolute top-1/3 left-1/2 w-32 h-32 rounded-full bg-red/60 blur-2xl animate-heroMove"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-4 animate-fade-in-down">
                Find Your Modern Rental Home
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-6 animate-fade-in-up">
                Discover comfort, style, and convenience in every stay
            </h2>
            <p className="max-w-2xl text-gray-700 text-base md:text-lg mb-8 animate-fade-in">
                Our platform offers a curated selection of rental homes designed for modern living. Whether you&apos;re seeking a cozy apartment or a spacious house, enjoy flexible agreements, top-notch facilities, and immersive 360° home views. Experience hassle-free renting with transparent terms and dedicated support.
            </p>
            {visible && (
                <div className="mt-8 flex flex-col items-center animate-bounce-down">
                    <span className="text-blue-400 text-lg mb-2">Scroll Down</span>
                    <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400 animate-bounce" viewBox="0 0 24 24"><path d="M12 5v14m7-7-7 7-7-7"/></svg>
                </div>
            )}

            {/* Floating Contact Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <a
                    href="tel:+91 9008749883"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center px-5 py-3 mb-3 transition-all duration-300 animate-fade-in-up"
                    style={{ textDecoration: "none" }}
                    aria-label="Call Owner"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" className="mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.47l.7 2.1a2 2 0 01-.45 2.11l-1.27 1.27a16.06 16.06 0 006.58 6.58l1.27-1.27a2 2 0 012.11-.45l2.1.7A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" />
                    </svg>
                    Call Owner
                </a>
                <a
                    href="https://wa.me/919008749883"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center px-5 py-3 transition-all duration-300 animate-fade-in-up"
                    style={{ textDecoration: "none" }}
                    aria-label="WhatsApp Owner"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" className="mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.72 11.06a6.5 6.5 0 10-5.66 5.66l2.12.42a1 1 0 01.7.7l.42 2.12a6.5 6.5 0 005.66-5.66l-2.12-.42a1 1 0 01-.7-.7l-.42-2.12z" />
                    </svg>
                    WhatsApp
                </a>
            </div>
            <style jsx global>{`
                @keyframes heroMove {
                    0% { transform: translate(-50%, 0) scale(1); opacity: 0.7; }
                    50% { transform: translate(-50%, 40px) scale(1.15); opacity: 1; }
                    100% { transform: translate(-50%, 0) scale(1); opacity: 0.7; }
                }
                .animate-heroMove {
                    animation: heroMove 7s ease-in-out infinite;
                }
                @keyframes heroWhite {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                .animate-heroWhite {
                    background-size: 200% 200%;
                    animation: heroWhite 10s ease-in-out infinite;
                }
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 1s ease;
                }
                .animate-bounce-down {
                    animation: bounce-down 2s infinite;
                }
                @keyframes bounce-down {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(20px); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1.2s ease;
                }
                .animate-fade-in {
                    animation: fade-in 1.5s ease;
                }
            `}</style>
        </section>
    );
};

export default Hero;
