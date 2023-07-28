import { create } from "zustand";

const useChampImgStore = create((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
}));

export default useChampImgStore;
