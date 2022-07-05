import styled from "styled-components";


export const Container = styled.div`
        margin-top: 30px;
        display: grid;
        padding: 30px 0px 26px;
        grid-gap: 25px;
        grid-template-columns: repeat(5, minmax(0, 1fr));

`;

export const Wrap = styled.div`
        border-radius: 10px;
        cursor: pointer;
        border: 3px solid rgba(249,249,249,0.1);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;

        img {
            inset:0px;
            display: block;
            height: 100%;
            object-fit: cover;
            opacity: 1;
            position: absolute;
            transition: opacity 500ms ease-in-out 0s ;
            z-index: 1;
            top: 0;
            width: 100%;
        }

        

        video {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            opacity: 0;
            z-index: 0;
        }

        &:hover {
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            transform: scale(1.05); 
            border-color: rgba(249, 249, 249, 0.8);
           
            video {
                opacity: 1;
            }

        }


`;
