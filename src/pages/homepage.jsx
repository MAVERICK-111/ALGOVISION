import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HomePage = () => {
    const [randomText, setRandomText] = useState("ALGOVISION");
    const targetText = "ALGOVISION";

    useEffect(() => {
        //title
        const letters = targetText.split("");
        let tempText = Array(letters.length).fill("");
        let index = 0;

        const interval = setInterval(() => {
        if (index < letters.length) {
            tempText[index] = letters[index];
            setRandomText(tempText.join(""));
            index++;
        } else {
            clearInterval(interval);
        }
        }, 100);

        const randomizeText = () => {
        tempText = tempText.map(() =>
            String.fromCharCode(65 + Math.floor(Math.random() * 26))
        );
        setRandomText(tempText.join(""));
        };

        randomizeText();
    }, []);

    return (
        <div className="fixed inset-0 min-h-screen flex items-center justify-center">
        <div className="flex-1 p-4">
            <div
            className="flex flex-col items-center justify-center"
            style={{
                padding: "0",
                backgroundColor: "#f3f4f6",
            }}
            >
            <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-[1rem]"
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 25 }}
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
                {randomText}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-4 text-center">
                Welcome to AlgoVision, where algorithms come to life!
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4 text-center">
                Explore various algorithms through interactive visualizations.
                </p>
                <footer className="text-center mt-8 text-gray-600">
                <p>Created by Piyush Patil</p>
                <div className="flex justify-center space-x-4 mt-4">
                    {/* Email */}
                    <a
                    href="mailto:piyush3patil2005@gmail.com"
                    className="text-black hover:text-blue-500 transition"
                    aria-label="Email"
                    >
                    <FaEnvelope size={32} />
                    </a>
                    <a
                    href="https://github.com/MAVERICK-111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-500 transition"
                    aria-label="GitHub"
                    >
                    <FaGithub size={32} />
                    </a>
                    {/* LinkedIn */}
                    <a
                    href="https://www.linkedin.com/in/piyush-patil-1a7b64303"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-blue-500 transition"
                    aria-label="LinkedIn"
                    >
                    <FaLinkedin size={32} />
                    </a>
                </div>
                </footer>
            </motion.div>
            </div>
        </div>
        </div>
    );
};

export default HomePage;