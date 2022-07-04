import React from "react";
import { Container, Content, Wrap  } from './styles/Movies-styles';
import { selectMovies } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";


function Movies() {

    const movies = useSelector(selectMovies);

   

    return(
        <Container >
            <h4>Recommended for you</h4>
            <Content>
                { movies && movies.map((movies) => (
                    <Wrap key={movies.id}>
                    <img src={movies.cardImg} />
                    </Wrap>

                ))}
               

            </Content>
        </Container>

    )
}

export default Movies;
