import { create } from 'zustand'

export interface allAverageStore{
    OverAllGrade: null  | number,
    Mathematique:null | number,
    Anglais:null | number,
    SocieteEtLangues:null | number,
    Informatique:null | number,
    ModuleEpsic:null | number,
    Cie:null | number,

    updateAverage(mathAverage: number | null, math: string): void;
}

export const useAverageStore = create<allAverageStore>((set)  => ({
    OverAllGrade: null,
    Mathematique: null,
    Anglais: null,
    SocieteEtLangues: null,
    Informatique: null,
    ModuleEpsic: null,
    Cie: null,
    updateAverage: (newAverage : number, key: keyof allAverageStore) => set(() => ({[key]:newAverage}))  }))