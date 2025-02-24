import { create } from 'zustand'

interface UIState {
  isSideMenuOpen: boolean
  toggleSideMenu: () => void
}

const useUIStore = create<UIState>((set) => ({
  isSideMenuOpen: false,
  toggleSideMenu: () => set((state: UIState) => ({ isSideMenuOpen: !state.isSideMenuOpen })),
}))

export { useUIStore }