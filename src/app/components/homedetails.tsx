
"use client";
import React,{useRef, useEffect}from "react";

const HomeDetails = () => {

        const sectionRef = useRef<HTMLDivElement>(null);
    
        useEffect(() => {
            const handleScroll = () => {
                if (sectionRef.current) {
                    const top = sectionRef.current.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    if (top < windowHeight - 100) {
                        sectionRef.current.classList.add("animate-fade-in-down");
                    }
                }
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    return (
        <section className="w-full bg-white py-16 px-6 rounded-lg shadow-md mt-12 flex flex-col items-center">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-6 animate-fade-in-down">Home Details</h2>
            <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-lg p-6 shadow-sm animate-fade-in-up">
                    <h3 className="text-xl font-bold text-blue-500 mb-2">Configuration</h3>
                    <ul className="text-gray-700 text-base list-disc list-inside">
                        <li>1 BHK / 2 BHK options</li>
                        <li>Spacious living and bedrooms</li>
                        <li>Modern kitchen &amp; bath fittings</li>
                    </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 shadow-sm animate-fade-in-up">
                    <h3 className="text-xl font-bold text-blue-500 mb-2">Location &amp; Nearby</h3>
                    <ul className="text-gray-700 text-base list-disc list-inside">
                        <li>Near Metro Station</li>
                        <li>Close to schools &amp; supermarkets</li>
                        <li>Easy access to highway</li>
                        <li>Green parks &amp; fitness centers nearby</li>
                    </ul>
                </div>
            </div>
            
            <div className="w-full max-w-2xl bg-white rounded-lg p-6 shadow-sm animate-fade-in-up">
                <h3 className="text-xl font-bold text-blue-500 mb-2">Extra Features</h3>
                <ul className="text-gray-700 text-base list-disc list-inside">
                    <li>24/7 water supply &amp; CCTV</li>
                    <li>Dedicated parking space</li>
                    <li>LED bulbs and in-built fans</li>
                    <li>Solar water connection</li>
                    <li>Pet-friendly environment</li>
                </ul>
            </div>
            <style jsx>{``}</style>
        </section>
    );
};

export default HomeDetails;
