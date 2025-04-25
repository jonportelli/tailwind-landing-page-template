import Image from "next/image";
import React from "react";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
import './text.css'

export default function Text() {
  return (
    <div>
      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/7habStxHAKo?si=3bIRUc16P59UPZl_?&autoplay=1&control=0&mute=1&loop=1&playlist=7habStxHAKo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="video-copy">
          <h1 className={bebas.className}>SAAS</h1>
        </div>
      </div>
    </div>
  );
}
