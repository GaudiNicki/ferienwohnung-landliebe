import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsStore {
  prices: Prices;
  blockedPeriods: BlockedPeriod[];
  setPrices: (prices: Prices) => void;
  setBlockedPeriods: (periods: BlockedPeriod[]) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      prices: {
        onePerson: 45,
        twoPersons: 70,
        cleaningFee: 40,
        minStay: 2
      },
      blockedPeriods: [],
      setPrices: (prices) => set({ prices }),
      setBlockedPeriods: (blockedPeriods) => set({ blockedPeriods })
    }),
    {
      name: 'settings-storage',
    }
  )
)