import React from "react";
import ImgSlider from "../ImgSlider/ImgSlider";
import Movies from "../Movies/Movies";
import Viewers from "../Viewers/Viewers";
import { Container } from "./styles/home-styles";



function Home () {
    return (
        <Container>
           <ImgSlider />
           <Viewers />
           <Movies />
        </Container>
    );
}

export default Home