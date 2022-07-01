import React from "react";
import ImgSlider from "../ImgSlider/ImgSlider";
import Viewers from "../Viewers/Viewers";
import { Container } from "./styles/home-styles";



function Home () {
    return (
        <Container>
           <ImgSlider />
           <Viewers />
        </Container>
    );
}

export default Home