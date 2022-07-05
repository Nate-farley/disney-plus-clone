import React, {useEffect} from "react";
import ImgSlider from "../ImgSlider/ImgSlider";
import Movies from "../Movies/Movies";
import Viewers from "../Viewers/Viewers";
import { Container } from "./styles/home-styles";
import db from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setMovies } from '../../features/movies/movieSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase";
import { setUserLogin } from "../../features/user/userSlice";



function Home () {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => { 
        
        const colRef = collection( db, "movies");
        
       
        auth.onAuthStateChanged(async (user) =>{
            if(user){
                getDocs(colRef).then((snapshot) =>{
                    let tempMovies = snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                     
                        
                    })
                    dispatch(setMovies(tempMovies)); 
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }));

                
                    dispatch(setMovies(tempMovies)); 
                   
                });
                
                navigate('/home');
            } else {
                navigate('/login')
            }
        });

        

        

    }, [dispatch, navigate])


    return (
        <Container>
           <ImgSlider />
           <Viewers />
           <Movies />
        </Container>
    );
}

export default Home