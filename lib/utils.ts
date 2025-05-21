import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function colornameToRgba(name: string, opacity: number) {
  const colors: Record<string, string> = {
    blue: `rgba(59, 130, 246, ${opacity})`,
    green: `rgba(16, 185, 129, ${opacity})`,
    yellow: `rgba(251, 191, 36, ${opacity})`,
  }

  return colors[name];
}