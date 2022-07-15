import React from "react";
import { createGlobalState } from 'react-hooks-global-state';

export const { useGlobalState } = createGlobalState({
    screenValue: '',
    okAction: '',
    itemID: '',
});
