import React from "react";
import  { Nav, Logo, NavMenu, UserImg, Login, LoginContainer } from './styles/header-styles';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { selectUserName, selectUserPhoto, setUserLogin } from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";





function Header() {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

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

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
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
                <a>
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
            <UserImg src="/images/self.jpg" />
            </>
        }
           
        </Nav>
    )
}


export default Header;


