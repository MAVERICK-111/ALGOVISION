import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchControls from "../components/SearchControls";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SiJavascript, SiPython, SiC } from "react-icons/si";
import { FiCopy, FiCheck } from "react-icons/fi";
import { algorithmsInfo } from "../components/algorithmsInfo";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { xcodeLight, xcodeLightInit } from '@uiw/codemirror-theme-xcode';
import { isMobile, isTablet } from 'react-device-detect';

const SearchAlgorithmPage = ({ showSidebar, setAlgorithm }) => {
  const { algorithm: paramAlgorithm } = useParams();
  const [language, setLanguage] = useState("javascript");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setAlgorithm(paramAlgorithm);
  }, [paramAlgorithm, setAlgorithm]);

  useEffect(() => {
      window.scrollTo(0,0);
    },[paramAlgorithm]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const renderAlgorithmInfo = () => {
    const algorithmData = algorithmsInfo[paramAlgorithm];
    if (algorithmData) {
      return (
        <div className="bg-cream p-4 rounded-lg border border-gray-300 shadow-lg">
          <p>{algorithmData.description}</p>
          <p className="mt-2">{algorithmData.timeComplexity}</p>
        </div>
      );
    }
    return <p>Algorithm not found.</p>;
  };

  const renderCodeSection = () => {
    const algorithmData = algorithmsInfo[paramAlgorithm];
    if (algorithmData) {
      const languageMode =
        language === "javascript"
          ? javascript()
          : language === "python"
          ? python()
          : cpp();

      return (
        <div className="mt-2">
          <div className="bg-cream p-4 rounded-lg border border-gray-300 shadow-lg" style={{ width: `100%`, overflowX: `auto`, whiteSpace: `nowrap` }}>
            <CodeMirror
              value={algorithmData.code[language]}
              height="auto"
              extensions={[languageMode, xcodeLight]}
              //theme={xcodeLight}
              theme={xcodeLightInit({
                settings: {
                  caret: '#c6c6c6',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                }
              })}
              editable={false}
            />
          </div>
        </div>
      );
    }
    return <p>Code not available for this algorithm.</p>;
  };

  const HowToUseDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    
    return (
      <div className="w-full">
        <button
          onClick={toggleDropdown}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full text-left transition-all duration-300 ease-in-out"
        >
          {isOpen ? "Hide Instructions" : "How to Use"}
        </button>
        {isOpen && (
          <div className="bg-cream p-4 rounded-lg border border-gray-300 shadow-lg -mt-4">
            <p>1. Enter whole numbers (comma-separated), enter target, click "Generate Array", then click "Start Search".</p>
            <p>OR</p>
            <p>2. Click "Random Array" to generate a random array, enter target and then click "Start Search".</p>
            <p>3. User can hover over the bar to check it's value.</p>
          </div>
        )}
      </div>
    );
  };  

  const contentClass = showSidebar
    ? "transition-all duration-300 ease-in-out transform md:ml-64 md:max-w-[calc(100%-16rem)]"
    : "transition-all duration-300 ease-in-out md:max-w-full";
  const gridColsClass = isMobile
      ? "grid-cols-1"
      : isTablet
      ? "grid-cols-1"
      :"grid-cols-2";

  return (
    <div className={`p-4 min-h-screen flex flex-col ${contentClass}`}>
      <motion.h1
        className="mt-16 sm:mt-2 text-3xl font-bold text-center"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
      >
        {algorithmsInfo[paramAlgorithm]?.title || "Algorithm"}
      </motion.h1>
      <div className={`mt-3 sm:mt-7 grid ${gridColsClass} gap-4 flex-grow`}>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg flex-1 overflow-y-auto md:h-[calc(100vh-6.5rem)]"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
        >
          <SearchControls algorithm={paramAlgorithm} />
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg flex-1 overflow-y-auto md:h-[calc(100vh-6.5rem)]"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
        >
          <div className="mt-0 mb-2">{renderAlgorithmInfo()}</div>
          <HowToUseDropdown />          
          <div className="mt-2 mb-2 bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-between">
            <div className="flex space-x-2">
              <button
                onClick={() => setLanguage("javascript")}
                className={`py-2 px-4 cursor-pointer ${
                  language === "javascript" ? "bg-blue-700" : ""
                } rounded-md transition-colors`}
              >
                <SiJavascript size={24} />
              </button>
              <button
                onClick={() => setLanguage("python")}
                className={`py-2 px-4 cursor-pointer ${
                  language === "python" ? "bg-blue-700" : ""
                } rounded-md transition-colors`}
              >
                <SiPython size={24} />
              </button>
              <button
                onClick={() => setLanguage("c")}
                className={`py-2 px-4 cursor-pointer ${
                  language === "c" ? "bg-blue-700" : ""
                } rounded-md transition-colors`}
              >
                <SiC size={24} />
              </button>
            </div>
            <CopyToClipboard
              text={algorithmsInfo[paramAlgorithm]?.code[language]}
              onCopy={() => setCopied(true)}
            >
              <button
                style={{
                  padding: "8px 16px",
                  color: copied ? "#90EE90" : "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {copied ? <FiCheck size={20} /> : <FiCopy size={20} />}
              </button>
            </CopyToClipboard>
          </div>
          {renderCodeSection()}
        </motion.div>
      </div>
    </div>
  );
};

export default SearchAlgorithmPage;