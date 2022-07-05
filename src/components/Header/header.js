import React, { useEffect } from "react";
import  { Nav, Logo, NavMenu, UserImg, Login, LoginContainer } from './styles/header-styles';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";






function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) =>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate('/')
            }
        })

    }, [])

    const SignIn = () => {

        const provider = new GoogleAuthProvider();
        const auth = getAuth();
            signInWithPopup(auth, provider)
                .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
            // The signed-in user info.
        const user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
                navigate('/')
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

             });
         }

    const SignOut = () => {
        
        const auth = getAuth();
        signOut(auth)
.then(() => {
    dispatch(setSignOut());
    navigate('/login');
  // Sign-out successful.
 
}).catch((error) => {
    console.log("error")
  // An error happened.
})
    }

    const BackToHome = () => {
        navigate('/')

    }



    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            { !userName ? 
                (
                <LoginContainer>
                <Login onClick={SignIn}>Login</Login> 
                </LoginContainer>
                ) :
            <>
           
            <NavMenu>
                <a onClick={BackToHome}>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIEs</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>

            </NavMenu>
            <UserImg 
                onClick={SignOut}
                src="/images/self.jpg" />
            </>
        }
           
        </Nav>
    )
}


export default Header;


