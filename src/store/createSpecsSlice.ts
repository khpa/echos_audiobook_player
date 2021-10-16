import {GetState, SetState} from 'zustand';
import {StoreState} from './useStore';

export interface SpecsSlice {
  tabBarHeight: number | undefined;
}

const createSpecsSlice = (
  set: SetState<StoreState>,
  get: GetState<StoreState>,
) => ({
  tabBarHeight: undefined,
});

export default createSpecsSlice;
