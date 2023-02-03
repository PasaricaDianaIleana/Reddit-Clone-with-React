import { atom } from "recoil";


export interface AutoModalState {
    open: boolean;
    view: "login" | "signup" | "resetPassword";
}

//initial value of state for the atom
const defaultModalState: AutoModalState = {
    open: false,
    view: 'login'
}


export const authModalState = atom<AutoModalState>({
    key: 'authModalState',
    default: defaultModalState
});