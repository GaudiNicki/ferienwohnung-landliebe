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
      blockedPeriods: [
        {
          id: '1',
          startDate: '2024-11-01',
          endDate: '2024-11-03',
          reason: 'Dennis Müller'
        },
        {
          id: '2',
          startDate: '2024-11-15',
          endDate: '2024-11-16',
          reason: 'Santa Claus'
        }
      ],
      setPrices: (prices) => set({ prices }),
      setBlockedPeriods: (blockedPeriods) => set({ blockedPeriods })
    }),
    {
      name: 'settings-storage',
    }
  )
)