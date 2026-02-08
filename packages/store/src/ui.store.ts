import { create } from "zustand";
import { persist } from "zustand/middleware";

type UiState = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
};

export const useUIStore = create<UiState>()(
  persist(
    (set, get) => ({
      theme: "dark",

      setTheme: (theme) => set({ theme }),

      toggleTheme: () =>
        set({
          theme: get().theme === "dark" ? "light" : "dark",
        }),
    }),
    {
      name: "lifeos-ui",
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
