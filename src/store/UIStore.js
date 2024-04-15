import { create } from "zustand";
import { DateTime } from "luxon";

const UIStore = create((set) => ({
    date: DateTime.local(),
    setDate: (date) => set({date: date})
}));

export default UIStore;