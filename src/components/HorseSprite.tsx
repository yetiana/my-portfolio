'use client';
import React from 'react';

export default function HorseSprite() {
  return (
    <div
      className="w-[82px] h-[66px] bg-[url('/horse-idle.png')] bg-no-repeat animate-horse"
      style={{ imageRendering: 'pixelated' }}
    />
  );
}
