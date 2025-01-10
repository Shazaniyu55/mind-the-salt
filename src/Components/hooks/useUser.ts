import { Login } from "@/Auth/AuthRoutes";
import { getCurrentTimestamp } from "@/Logics/DateFunc";
import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import swal from 'sweetalert';
import { isValidJSON } from "@/Logics/date";
export default function useUser() {
    const session: any = useSession();
    const [isLoading,setIsLoading]=useState<boolean>(session.status==='loading');
    const [userData, setUserData] = useState<any>({
        email: "",
        email_verified: false,
        name: "",
        nickname: "",
        picture: "/images/user.png",
        sid: "",
        sub: "",
        updated_at: getCurrentTimestamp(),
        given_name: "",
        family_name: "",
        locale: ""
    });

    const GoOut=async()=>{
        console.log("calling Go")
        // const signin_q=await swal({
        //     title: 'Sign in to Continue',
        //     text: 'This action will require you to sign in to Mind The Salt using your Google account. After this dialog, you will be taken to a page where you need to click "Continue with Google" for automated sign-in.',
        //     icon: 'info',
        //    buttons:["Cancel, Exit page","Yes, Sign in"]
        // })
        // if(signin_q){
        // Login();  // Call your custom login function
        // }
        // else{
            window.location.href="/Login";
        // /}
    }


    useEffect(() => {
        if (session?.data && session.status !== 'loading') {
            console.log(session)
            // if(!session?.data?.sid){
               
            //     session.data.sid=splited[1]
            // }

            setUserData({
                ...session.data.user,
                sid: session?.data?.sid as string ,
                picture: session?.data?.user?.image||""
            });
            window.localStorage.setItem('sessionUser',JSON.stringify(session.data.user));
        } else if (session.status !== 'loading' && !session.data) {
           if(window.localStorage.getItem('sessionUser')  && isValidJSON(window.localStorage.getItem('sessionUser') as string || "")){
            
            const user=JSON.parse(window.localStorage.getItem('sessionUser') as string||"");
            setUserData({
                ...user,
                sid: user.sid as string,
               
            })
           }
           else{
            console.log('user doesn\'t exist', session);
           if(!window?.location?.pathname.toLowerCase().includes('login')) GoOut()
           }
        }
        setIsLoading(session.status=='loading')
    }, [session]);

    useEffect(()=>{
console.log(isLoading);
    },[isLoading])
    return {
        error: "",
        isLoading: isLoading,
        user: userData
    };
}
