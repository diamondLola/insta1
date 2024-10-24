import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useClient = create(
  persist(
    (set, get) => ({
      client: {},
      setClient: () => (newClient) => set((state)=> ({client: newClient})),
    }),
    {
      name: 'client-data', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)