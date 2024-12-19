import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SettingsStore {
  ratings: Rating[];
  overallRating: OverallRating;
  prices: Prices;
  blockedPeriods: BlockedPeriod[];
  setRatings: (ratings: Rating[]) => void;
  setOverallRating: (rating: OverallRating) => void;
  setPrices: (prices: Prices) => void;
  setBlockedPeriods: (periods: BlockedPeriod[]) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      ratings: [
        {
          name: "Silke",
          text: "Eine saubere und gepflegte Ferienwohnung mit netten Vermietern.",
          score: 10.0,
          visible: true
        },
        {
          name: "Patricia",
          text: "atmosphärisches Appartement, liebevoll eingerichtet.",
          score: 8.0,
          visible: true
        },
        {
          name: "Martina",
          text: "Sehr gut ausgestattete Wohnung. Mit viel Liebe zu Detail wurde an alles gedacht.",
          score: 9.0,
          visible: true
        }
      ],
      overallRating: {
        score: 9.4,
        summary: "Hervorragend"
      },
      prices: {
        winterPrice: 45,
        summerPrice: 70,
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
      setRatings: (ratings) => set({ ratings }),
      setOverallRating: (overallRating) => set({ overallRating }),
      setPrices: (prices) => set({ prices }),
      setBlockedPeriods: (blockedPeriods) => set({ blockedPeriods })
    }),
    {
      name: 'settings-storage',
    }
  )
)