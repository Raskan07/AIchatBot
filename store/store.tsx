import {create} from "zustand"

type countStore = {
    count:Number,
    increment: () => void,
    decrement: () => void
}


export const useCounterStore =  create<countStore>((set) => ({
    count:0,
    increment: () => {
        set((state:any) => ({count: state.count + 1}))
    },
    decrement: () => {
        set((state:any) => ({count:state.count - 1}))
    }
}))