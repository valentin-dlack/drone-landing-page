import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function colornameToRgba(color: string, alpha: number): `rgba(${number}, ${number}, ${number}, ${number})` {
  // Example implementation for basic colors; expand as needed
  const colorMap: Record<string, [number, number, number]> = {
    blue: [59, 130, 246],
    green: [34, 197, 94],
    yellow: [250, 204, 21],
  };
  const rgb = colorMap[color] || [0, 0, 0];
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
}