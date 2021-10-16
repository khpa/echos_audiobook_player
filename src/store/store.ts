import create from 'zustand';

type State = {
  tabBarHeight: number;
  hasActiveAlbum: boolean;
  miniPlayer: boolean;
};

export const useStore = create<State>(() => ({
  tabBarHeight: 0,
  hasActiveAlbum: false,
  miniPlayer: true,
}));
