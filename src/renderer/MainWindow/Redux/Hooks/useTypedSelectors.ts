import { createTypedSelector, createTypedShallowSelector } from '#RUtils/Redux';

import { StoreState } from '../types';

export const useMainSelector = createTypedSelector<StoreState>();
export const useMainShallowSelector = createTypedShallowSelector<StoreState>();
