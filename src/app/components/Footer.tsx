
"use client";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-white/70 backdrop-blur-md text-blue-600 py-8 px-4 mt-16 shadow-lg rounded-xl animate-fade-in-up">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center md:items-start">
                    <span className="font-bold text-lg mb-2">Developed by Guruprasad, Kushal</span>
                    <span className="text-sm">&copy; {new Date().getFullYear()} Modern Rental Homes</span>
                    <span className="text-sm mt-2">For rental inquiries, call: <a href="tel:+91 9008749883" className="text-blue-700 font-semibold hover:underline">+91-9008749883</a></span>
                </div>
                <div className="flex flex-col items-center md:items-end">
                    {/* <a href="#feedback" className="bg-white text-blue-600 font-semibold px-4 py-2 rounded shadow hover:bg-blue-100 transition-all mb-2">Feedback</a> */}
                    <span className="text-sm">Thank you for visiting! Connect with us for updates and support.</span>
                </div>
            </div>
            <style jsx>{`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1.2s ease;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
