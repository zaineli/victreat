import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function map(n: number, start1: number, stop1: number, start2: number, stop2: number) {
  return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}