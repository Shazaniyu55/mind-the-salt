import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import "./style.css";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconButton } from '@mui/material';
import Bold from '@/utils/Bold';
import ResponsiveImage from '@/utils/ResposiveImage';
import { signIn } from 'next-auth/react'; // Add this for NextAuth
import { app } from '@/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Login } from '@/Auth/AuthRoutes';
import { transformFirebaseUser } from '@/Logics/date';
import useUser from '../hooks/useUser';
const Main: React.FC = () => {

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const [isCreatingPassword, setIsCreatingPassword] = useState<boolean>(false);
const [data, setData] = useState({
    email: "",
    password: "",
});

const [isLoading, setIsLoading] = useState<boolean>(false);
const [showPassword, setShowPassword] = useState<boolean>(false);
const [user, setUser] = useState<any>({});
const logInUserMethods=useUser()
const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};

useEffect(()=>{
if(logInUserMethods.user.sid){
window.location.href='/dashboard'
}
},[logInUserMethods.user])


const submit = async () => {
    if (isLoading) return;
    setIsLoading(true);

    if (data.email.length < 3) {
        toast.error("Email must be at least 3 characters long.");
        setIsLoading(false);
        return;
    }

    try {
        let userCredential;
        if (isCreatingPassword) {
            // Sign up user
            userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            toast.success("Account created successfully");
        } else {
            // Sign in user
            userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            toast.success("Sign in successful");
        }

        setUser(userCredential.user);
        
        // Redirect to dashboard
        window.location.href = '/dashboard';
    } catch (err: any) {
        toast.error(err?.message || "Something went wrong");
    }

    setIsLoading(false);
};

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        setUser(result.user);
        toast.success("Sign in with Google successful");

        // Redirect to dashboard
       // window.location.href = '/dashboard';
    } catch (err: any) {
        toast.error(err?.message || "Something went wrong");
    }
}

useEffect(()=>{
const user_=transformFirebaseUser(user)
console.log(user_)
if(user_.email)window.localStorage.setItem('sessionUser',JSON.stringify(user_));
},[user])

return (
    <>
        <Toaster />
        <div className='loginContainer '>
            <div className='Wrapper d-flex align-items-center justify-content-center'>
                <div className='form'>
                    <br />
                    
                    
                    <div className='d-flex ' style={{gap:10}}>
<MDBBtn color={!isCreatingPassword? "primary":'secondary'} onClick={()=>setIsCreatingPassword(!isCreatingPassword)}>SignIn</MDBBtn>
<MDBBtn color={isCreatingPassword ? "primary":'secondary'}  onClick={()=>setIsCreatingPassword(!isCreatingPassword)}>SignUp</MDBBtn>
                    </div>
                    <br />

                    <div className="d-flex align-items-center justify-content-center">
                        <ResponsiveImage src='/images/logo.png' containerSize={100} />
                    </div>

                    <div className='d-flex justify-content-center'>
                        <Bold>{isCreatingPassword ? "Sign Up" : "Sign In"} Mind The Salt</Bold>
                    </div>

                    <br />

                    <>
                        <MDBInput
                            value={data?.email || ""}
                            size='lg'
                            label='Email'
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />
                        <br />
                        <div className="password-input d-flex" style={{ position: "relative" }}>
                            <MDBInput
                                value={data?.password || ""}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                                size="lg"
                                label='Enter password'
                                type={showPassword ? 'text' : 'password'}
                            />
                            <IconButton style={{ borderRadius: 5, position: "absolute", right: 0, top: 2 }} className="password-toggle" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </IconButton>
                        </div>
                    </>

                    <br />
                    <div className="d-flex align-items-center justify-content-center">
                        <MDBBtn rounded style={{ width: "100%" }} onClick={submit} size="lg">
                            {isLoading ? <ClipLoader size={18} color="white" /> : (isCreatingPassword ? "Sign Up" : "Sign In")}
                        </MDBBtn>
                    </div>

                    <div className="d-flex align-items-center justify-content-center" style={{ marginTop: 5 }}>
                        <MDBBtn color='dark' rounded style={{ width: "100%" }} onClick={()=>Login()} size="lg">
                            Continue with Google
                        </MDBBtn>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}

export default Main;