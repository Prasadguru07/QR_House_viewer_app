
"use client";
import React from "react";
import Image from "next/image";
const homeImages = [
    {
        src: "/images/bedroom.png",
        alt: "Bedroom",
        title: "Bedroom",
        desc: "Spacious bedroom with natural light and modern furnishings."
    },
    {
        src: "/images/kitchen.png",
        alt: "Kitchen",
        title: "Kitchen",
        desc: "Fully equipped kitchen with sleek cabinets and appliances."
    },
    {
        src: "/images/livingroom.png",
        alt: "Living room",
        title: "Living Room",
        desc: "Open living hall perfect for family gatherings and relaxation."
    },
    {
        src: "/images/washroom.png",
        alt: "Washroom",
        title: "Washroom",
        desc: "Modern washroom with premium fittings and clean design."
    },
];

const HomeView = () => {
    return (
        <section className="w-full py-16 px-6 bg-white rounded-lg shadow-md mt-12">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-10 text-center animate-fade-in-down">Home View</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                {homeImages.map((img, idx) => (
                    <div key={idx} className="bg-blue-50 rounded-xl shadow-lg overflow-hidden w-full max-w-xs transform transition duration-500 hover:scale-105 animate-fade-in-up">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={400}
                            height={192}
                            className="w-full h-48 object-cover"
                            style={{ objectFit: "cover" }}
                            priority={idx === 0}
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-blue-500 mb-2">{img.title}</h3>
                            <p className="text-gray-700 text-base">{img.desc}</p>
                        </div>
                    </div>
                ))}
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
                .animate-fade-in-down {
                    animation: fade-in-down 1s ease;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1.2s ease;
                }
            `}</style>
        </section>
    );
};

export default HomeView;
