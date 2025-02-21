import { create } from 'zustand'

interface State {
  isSideMenuOpen: boolean
  toggleSideMenu: () => void
}

const useUIStore = create<State>((set) => ({
  isSideMenuOpen: false,
  toggleSideMenu: () => set((state: State) => ({ isSideMenuOpen: !state.isSideMenuOpen })),
}))

export { useUIStore }