import { create } from "zustand";

type useUserStoreTypes  = {
    userId:String,
    userName:String,
    email:String,
    photoUrl:String,
    isLogin:Boolean,
    setUser : any,
    logout: () => void
}

export const useUserStore = create<useUserStoreTypes>((set) => ({
    userId:"",
    userName:"",
    email:"",
    photoUrl:"",
    isLogin:false,

    setUser: (user:any) => set((state) => ({ ...state, ...user })),
    logout : () => set({userId:"",userName:"",email:"",photoUrl:"",isLogin:false})
}))