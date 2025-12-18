import React from "react";
import "./App.css";
import Home from "./Home";
// import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
// import { FaInstagram } from "react-icons/fa";

function App() {
  return (
    <div dir="rtl" className="min-h-screen w-full flex flex-col items-center ">
      <Home />
      {/* WhatsApp floating button */}
      {/* <WhatsAppFloatingButton /> */}
      {/* Instagram floating button */}
      <a
        href="https://wa.me/972546197799"
        target="_blank"
        rel="noopener noreferrer"
        className="
    fixed
    bottom-5
    right-5
    z-50
    w-14
    h-14
    rounded-full
    flex
    items-center
    justify-center
    shadow-lg
    transition
    hover:scale-110
  "
        style={{ backgroundColor: "#81361A" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="block translate-x-[1px]"
          width="26"
          height="26"
          fill="#CFC4B2"
        >
          <path d="M19.11 17.87c-.31-.16-1.84-.91-2.12-1.01-.28-.1-.49-.16-.7.16-.21.31-.81 1.01-.99 1.21-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.02-.54-.08-.16-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53l-.6-.01c-.21 0-.54.08-.82.39-.28.31-1.07 1.05-1.07 2.56s1.1 2.97 1.25 3.18c.16.21 2.16 3.3 5.23 4.62.73.31 1.3.5 1.74.64.73.23 1.39.2 1.91.12.58-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.21-.59-.36zM16 3C8.83 3 3 8.83 3 16c0 2.82.74 5.57 2.14 7.98L3 29l5.2-2.06A12.9 12.9 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3zm0 23.5c-2.37 0-4.69-.64-6.7-1.86l-.48-.29-3.08 1.22 1.24-3-.31-.49A10.46 10.46 0 0 1 5.5 16C5.5 10.21 10.21 5.5 16 5.5S26.5 10.21 26.5 16 21.79 26.5 16 26.5z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
