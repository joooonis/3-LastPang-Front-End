import { create } from 'zustand';

import { IFormValues } from '@/types/form';

type Profile = Partial<IFormValues>;

type ProfileState = {
  profiles: Profile[];
  currentProfile?: Profile;
  addProfile: (profile: Profile) => void;
  selectProfile: (profile: Profile) => void;
};

const initialState: ProfileState = {
  profiles: [],
  currentProfile: undefined,
  addProfile: () => {},
  selectProfile: () => {},
};

export const useProfileStore = create<ProfileState>((set) => ({
  ...initialState,
  addProfile: (profile) =>
    set((state) => ({ profiles: [...state.profiles, profile] })),
  selectProfile: (profile) => set(() => ({ currentProfile: profile })),
}));
