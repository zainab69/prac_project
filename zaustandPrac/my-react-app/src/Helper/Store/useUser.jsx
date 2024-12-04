import { create } from "zustand";
export const Users = create((set) => ({
  users: [],
  setUsers: (users) => set({ users: users }),
  search: "",
  setSearch: (search) => set({ search: search }),
  filteredUsers: [],
  setFilteredUsers: (state) => set({ filteredUsers: state }),
}));
