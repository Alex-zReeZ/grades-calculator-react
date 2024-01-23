import { create } from 'zustand'

interface allAverageStore{
    overAll: null  | number | string,
    math:null | number | string,
    eng:null | number | string,
    soci:null | number | string,
    info:null | number | string,
    modepsic:null | number | string,
    cie:null | number | string,

    updateAverage(mathAverage: number | null, math: string): void;
}

export const useAverageStore = create<allAverageStore>((set)  => ({
    overAll: "-",
    math: "-",
    eng: "-",
    soci: "-",
    info: "-",
    modepsic: "-",
    cie: "-",
    updateAverage: (newAverage : number, key: keyof allAverageStore) => set(() => ({[key]:newAverage}))  }))