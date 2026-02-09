import { create } from "zustand";
import { persist } from "zustand/middleware";

type LifeState = {
  energy: number;
  focus: number;
  mood: number;

  habits: Record<string, boolean>;

  startDay: () => void;
  endDay: () => void;

  setEnergy: (value: number) => void;
  setFocus: (value: number) => void;
  setMood: (value: number) => void;

  toggleHabit: (id: string) => void;
  setHabit: (id: string, value: boolean) => void;
};

const initialLifeState = {
  energy: 70,
  focus: 70,
  mood: 0,
};

export const useLifeStore = create<LifeState>()(
  persist(
    (set, get) => ({
      ...initialLifeState,
      habits: {},

      startDay: () =>
        set({
          ...initialLifeState,
          habits: {},
        }),

      endDay: () => {
        // placeholder: aquí luego irán stats, XP, logs
        console.log("End day snapshot", get());
      },

      setEnergy: (value) => set({ energy: Math.max(0, Math.min(100, value)) }),

      setFocus: (value) => set({ focus: Math.max(0, Math.min(100, value)) }),

      setMood: (value) => set({ mood: Math.max(-5, Math.min(5, value)) }),

      toggleHabit: (id) =>
        set((state) => ({
          habits: {
            ...state.habits,
            [id]: !state.habits[id],
          },
        })),

      setHabit: (id, value) =>
        set((state) => ({
          habits: {
            ...state.habits,
            [id]: value,
          },
        })),
    }),
    {
      name: "lifeos-habits",
      partialize: (state) => ({
        habits: state.habits,
      }),
    },
  ),
);
