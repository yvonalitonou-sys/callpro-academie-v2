/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

// Deterministic pseudo-random bar heights so the waveform looks organic
// but never re-randomizes on re-render (which would feel jittery/cheap).
const PATTERN = [6, 14, 9, 22, 13, 28, 16, 8, 19, 11, 25, 14, 7, 17, 10, 21, 12, 6, 15, 9];

interface WaveformProps {
  className?: string;
  height?: number;
  color?: "rust" | "bronze" | "sage" | "paper";
  bars?: number;
}

const colorMap = {
  rust: "bg-rust",
  bronze: "bg-bronze",
  sage: "bg-sage",
  paper: "bg-paper",
};

export default function Waveform({ className = "", height = 32, color = "rust", bars = 20 }: WaveformProps) {
  const sequence = Array.from({ length: bars }, (_, i) => PATTERN[i % PATTERN.length]);
  const colorClass = colorMap[color];

  return (
    <div className={`flex items-end gap-[3px] ${className}`} style={{ height }} aria-hidden="true">
      {sequence.map((h, i) => (
        <div
          key={i}
          className={`waveform-bar ${colorClass} w-[2.5px]`}
          style={{
            height: `${(h / 28) * 100}%`,
            opacity: 0.25 + (h / 28) * 0.65,
          }}
        />
      ))}
    </div>
  );
}
