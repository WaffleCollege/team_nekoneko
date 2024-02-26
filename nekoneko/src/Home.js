import React from "react";
import { signInWithPopup } from "firebase/auth";
import { useHistory } from "react-router-dom"; 
import {auth, provider} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";

function Home(){
    const [user] = useAuthState(auth);
    
    return (
    <div>
        {user ? (
            <>
                <UserInfo />
                <SignOutButton />
            </>
        ):(
            <SignInButton />
        )}
    </div>
    );
}

export default Home;

function SignInButton(){
    const history = useHistory();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then(() => {
        // ログイン成功時の処理
            history.push("/index.html");  // ログイン後に遷移するURLを指定
          })
          .catch((error) => {
            console.error("Firebase Authentication エラー:", error);
          });

    };

    return (
        <button onClick = {signInWithGoogle}>
            <p>Googleでサインイン</p>
        </button>
    );
}

function SignOutButton(){

    return (
        <button onClick = {() => auth.signOut()}>
            <p>Googleでサインアウト</p>
        </button>
    );
}

function UserInfo(){
    return(
        <div className = "userInfo">
        <img src = {auth.currentUser.photoURL}alt = "" />
        <p>{auth.currentUser.displayName}</p>
        </div>
    );
    
}
