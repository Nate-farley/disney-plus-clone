import React, {useEffect} from "react";
import ImgSlider from "../ImgSlider/ImgSlider";
import Movies from "../Movies/Movies";
import Viewers from "../Viewers/Viewers";
import { Container } from "./styles/home-styles";
import db from '../../firebase';
import {
    collection,
    query,
    onSnapshot,
    orderBy,
    getDocs,
    addDoc
  } from "firebase/firestore";
import { DisneyPlusMoviesData } from "../../disneyPlusMoviesData";
import { useDispatch } from "react-redux";
import { setMovies } from '../../features/movies/movieSlice';



function Home () {
    
    const dispatch = useDispatch();

    
    useEffect(() => { 
        

        const colRef = collection( db, "movies");
        
        getDocs(colRef).then((snapshot) =>{
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
             
                
            })
            dispatch(setMovies(tempMovies));
            
            console.log(tempMovies)
            
           
        })
        

    }, [])


    return (
        <Container>
           <ImgSlider />
           <Viewers />
           <Movies />
        </Container>
    );
}

export default Home