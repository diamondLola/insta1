import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useClient = create(
  persist(
    (set) => ({
      client: {},
      setClient: (newClient) => set({ client: newClient }), // Corrected the function definition
    }),
    {
      name: 'client-data', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
