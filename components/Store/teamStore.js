import { create } from "zustand";

const useTeamStore = create((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
  addTeam: (newTeam) => set((state) => ({ data: [...state.data, newTeam] })),
}));

export default useTeamStore;
