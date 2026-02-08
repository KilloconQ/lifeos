import { create } from "zustand";

type LifeState = {
  energy: number;
  focus: number;
  mood: number;

  habits: Record<string, boolean>;

  startDay: () => void;
  endDay: () => void;

  setEnergy: () => void;
  setFocus: () => void;
  setMood: () => void;

  toggleHabit: (id: string) => void;
  setHabit: (id: string, value: boolean) => void;
};

export const useLifeStore = () => {};
