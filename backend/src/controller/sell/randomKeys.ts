export default function randomKeys ():string {
  return Math.random().toString(36).slice(-6);
} 