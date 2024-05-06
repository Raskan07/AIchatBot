import { useUserStore } from "@/store/useUserStore";
import {GoogleSignin,GoogleSigninButton,statusCodes}  from "@react-native-google-signin/google-signin"
import { useEffect, useState } from "react";

const useSoicalAuth  = () => {
    const {setUser} = useUserStore()

    const [isUserSignIn,setUserSignIn] = useState<any>(false);
    const ConfigureGoogleSignIn = () =>{
        GoogleSignin.configure({
          webClientId:"1018502525549-o07g984q7u98je1d3tsaeav16ag80ngj.apps.googleusercontent.com",
          // @ts-ignore
          androidClientId:"1018502525549-5dlmo88ibdtoolt4ujikblh5bh462tqo.apps.googleusercontent.com",
          iosClientId:"1018502525549-defdf6lni8jn71ern1vuj0e1bv8cnbqq.apps.googleusercontent.com",
        })
      }

      useEffect(()=>{
        ConfigureGoogleSignIn();
      })

      const SignIn = async () => {
        console.log("signIn")
    
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn()
          console.log(JSON.stringify(userInfo.user.id,null,2))
          if(userInfo.user){
            setUserSignIn(true);
            setUser({
                userId:userInfo.user.id,
                userName:userInfo.user.name,
                email:userInfo.user.email,
                photoUrl:userInfo.user.photo,
                isLogin:true,
            })
          }
          
          
        } catch (error) {
          console.log(error)
        }
      }

      return {isUserSignIn,SignIn}

}

export default useSoicalAuth ;