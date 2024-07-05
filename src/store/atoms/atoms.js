import { atom } from "recoil";

export const cartProductAtom = atom({
  key: "cartProductAtom",
  default: []
})

export const buyNowAvailableAtom = atom({
  key: "buyNowAvailableAtom",
  default: false
})
