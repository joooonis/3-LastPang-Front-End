import { create } from 'zustand';

import { IFormValues } from '@/types/form';

type Profile = Partial<IFormValues>;

type ProfileState = {
  profiles: Profile[];
  addProfile: (profile: Profile) => void;
};

const initialState: ProfileState = {
  profiles: [],
  addProfile: () => {},
};

export const useProfileStore = create<ProfileState>((set) => ({
  ...initialState,
  addProfile: (profile) =>
    set((state) => ({ profiles: [...state.profiles, profile] })),
}));
