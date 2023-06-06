import { hexaColor } from "./hexColorGenerator";

export const hexaDecimalColorArray = () => {
  const arr = [];
  for (let i = 0; i < 32; i++) {
    arr.push(hexaColor());
  }
  return arr;
}