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
          startDate: '2025-04-25',
          endDate: '2025-04-27',
          reason: 'Nicole Martina Hennich'
        },
        {
          id: '2',
          startDate: '2025-05-05',
          endDate: '2025-05-13',
          reason: 'Hochzeit Niklas'
        },
        {
          id: '3',
          startDate: '2025-05-15',
          endDate: '2025-05-18',
          reason: 'Martin Zimmer'
        },
        {
          id: '4',
          startDate: '2025-06-06',
          endDate: '2025-06-09',
          reason: 'Gerrit Stöver'
        },
        {
          id: '5',
          startDate: '2025-06-10',
          endDate: '2025-06-23',
          reason: 'Urlaub'
        },
        {
          id: '6',
          startDate: '2025-07-24',
          endDate: '2025-07-27',
          reason: 'Fam. Weniger'
        },
        {
          id: '7',
          startDate: '2025-08-21',
          endDate: '2025-08-24',
          reason: 'Ute Hölscher'
        },
        {
          id: '8',
          startDate: '2025-09-08',
          endDate: '2025-09-15',
          reason: 'Urlaub'
        },
        {
          id: '9',
          startDate: '2025-10-03',
          endDate: '2025-10-06',
          reason: 'Saskia van de Post'
        },
        {
          id: '10',
          startDate: '2025-07-11',
          endDate: '2025-07-14',
          reason: 'Rosi Minas'
        },
      ],
      setPrices: (prices) => set({ prices }),
      setBlockedPeriods: (blockedPeriods) => set({ blockedPeriods })
    }),
    {
      name: 'settings-storage',
    }
  )
)
