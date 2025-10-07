"use client";

import { useState } from 'react';
import Image from 'next/image';

interface FlipCardProps {
  imageUrl: string;
  title: string;
  description: string;
  details: string | string[];
}

export default function FlipCard({ imageUrl, title, description, details }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[400px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="relative w-full h-64">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-[#003D63] mb-3">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-[#003D63] to-[#003D63]/90 rounded-xl shadow-lg p-6 rotate-y-180 overflow-y-auto">
          <h3 className="text-xl font-bold text-[#5CECD3] mb-4">{title}</h3>
          {Array.isArray(details) ? (
            <ul className="space-y-2 text-white text-sm text-left">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-[#5CECD3] mt-1">•</span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white text-sm leading-relaxed text-left">{details}</p>
          )}
        </div>
      </div>
    </div>
  );
}
