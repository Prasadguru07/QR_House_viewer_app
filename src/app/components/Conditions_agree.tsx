
"use client";
import React, { useEffect, useRef } from "react";

const ConditionsAgree = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const top = sectionRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 100) {
                    sectionRef.current.classList.add("animate-fade-in-up");
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-white py-16 px-6 rounded-lg shadow-xl mt-12 flex flex-col items-center transition-all opacity-0">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-6 animate-fade-in-down">Conditions &amp; Agreement</h2>
            <div className="w-full max-w-xl bg-blue-50 rounded-lg p-8 shadow-md animate-fade-in">
                <ul className="text-gray-700 text-lg list-disc list-inside space-y-4">
                    <li><span className="font-bold text-blue-500">1 Year Home Agreement:</span> Secure your stay for a full year with peace of mind.</li>
                    <li><span className="font-bold text-blue-500">Rent:</span> Only ₹5500 per month.</li>
                    <li><span className="font-bold text-blue-500">Annual Increase:</span> 5% rent increase every year.</li>
                    <li><span className="font-bold text-blue-500">Eligibility:</span> Only for married couples.</li>
                    <li><span className="font-bold text-blue-500">Easy Renewal:</span> Hassle-free renewal process after agreement period.</li>
                    <li><span className="font-bold text-blue-500">Transparent Terms:</span> All conditions clearly stated for your convenience.</li>
                </ul>
            </div>
            <style jsx>{`
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
                .animate-fade-in-up {
                    animation: fade-in-up 1.2s ease forwards;
                }
                .animate-fade-in {
                    animation: fade-in 1.5s ease;
                }
            `}</style>
        </section>
    );
};

export default ConditionsAgree;
