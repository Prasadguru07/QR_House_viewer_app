
"use client";
import React, { useState } from "react";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-4 shadow-xl bg-blue-700/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
                {/* Modern Home Logo */}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 shadow-md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12L12 3l9 9" />
                        <path d="M9 21V12h6v9" />
                    </svg>
                </span>
                <span className="ml-2 text-2xl font-extrabold tracking-wide text-white font-mono drop-shadow-lg">NeonNest</span>
            </div>
            <div className="relative">
                <button
                    className="flex flex-col justify-center items-center w-8 h-8 group"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="block w-6 h-0.5 bg-white mb-1 group-hover:bg-gray-300 transition-all"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1 group-hover:bg-gray-300 transition-all"></span>
                    <span className="block w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-all"></span>
                </button>
                {menuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white/80 backdrop-blur-lg rounded shadow-lg py-2">
                        <a href="#Hero" className="block px-4 py-2 text-blue-700 hover:bg-blue-100" onClick={() => setMenuOpen(false)}>Hero Section</a>
                        <a href="#HomeDetails" className="block px-4 py-2 text-blue-700 hover:bg-blue-100" onClick={() => setMenuOpen(false)}>Home Details</a>
                        <a href="#ConditionsAgree" className="block px-4 py-2 text-blue-700 hover:bg-blue-100" onClick={() => setMenuOpen(false)}>Condition & Agreement</a>
                        <a href="#HomeView" className="block px-4 py-2 text-blue-700 hover:bg-blue-100" onClick={() => setMenuOpen(false)}>Home View</a>
                        <a href="#Footer" className="block px-4 py-2 text-blue-700 hover:bg-blue-100" onClick={() => setMenuOpen(false)}>Footer</a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar