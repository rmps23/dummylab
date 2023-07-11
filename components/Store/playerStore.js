import { create } from "zustand";

const usePlayerStore = create((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
  addPlayer: (newPlayer) =>
    set((state) => ({ data: [...state.data, newPlayer] })),
  removePlayer: (playerId) =>
    set((state) => ({
      data: state.data.filter((player) => player.id !== playerId),
    })),
  editPlayer: (playerId, updatedPlayer) =>
    set((state) => ({
      data: state.data.map((player) =>
        player.id === playerId ? updatedPlayer : player
      ),
    })),
}));

export default usePlayerStore;
