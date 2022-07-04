import React, { useEffect, useState } from "react";
import { Container, Background, ImageTitle, Controls, PlayButton, TrailerButton, AddButton, GroupWatchButton, SubTitle, Description } from "./styles/Detail-styles";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import {
    collection,
    query,
    onSnapshot,
    orderBy,
    getDoc,
    getDocs,
    doc,
    addDoc
  } from "firebase/firestore";


function Detail() {

        const { id } = useParams();
        const [ movie, setMovie ] = useState();

        console.log(id)

        useEffect(() => {
            // grab the movie info from the database
            getDoc(doc(db, "movies", id)).then(doc=> {
                if (doc.exists()) {
                  setMovie(doc.data());
                } else {
                  console.log("No such document!");
                }
              })
           
            
            
           



        }, [])


    return(
        <Container>
            {movie && (
              <>
                <Background >
                    <img src={movie.backgroundImg} />
                </Background>
                <ImageTitle>
                    <img src={movie.titleImg} />
                </ImageTitle>
                <Controls>
                    <PlayButton>
                            <img src="/images/play-icon-black.png" />
                            <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                            <img src="/images/play-icon-white.png" />
                            <span>Trailer</span>
                    </TrailerButton>
                    <AddButton>
                            <span>+</span>
                    </AddButton>
                    <GroupWatchButton>
                            <img src="/images/group-icon.png" />
                    </GroupWatchButton>
                </Controls>
                <SubTitle>
                    {movie.subTitle}
                </SubTitle>
                <Description>
                    {movie.description}
                </Description>
              </>
            )}
        </Container>

    )
}

export default Detail;


/*
.then((doc) => {
                if (doc.exixts) {
                    console.log(movieRef)
                    
                    
                    console.log("its working")
                    console.log(doc)
                    console.log(id)
                } else {
                    console.log("sihgg")
                    console.log(doc)
                    console.log(id)

                }
            })


 if (docSnap.exists) {
                console.log("Document id:", docSnap.id);
              } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
              }



*/
