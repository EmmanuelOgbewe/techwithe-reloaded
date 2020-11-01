import React, {Component, useEffect} from 'react'
import styled from "styled-components"
import tw from "twin.macro"


export default function Carousel() {


    useEffect(() =>{
        // var el = document.querySelector('.firstElement');
        // var offsetX = el.offsetLeft;
        // el.style.left = '1100px';
        // el.innerHTML = "Paragraph changed!";
    })

    return (
        <CarouselWrapper >
            <CarouselItem className="firstElement"/>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
        </CarouselWrapper>
    )
}


/**
 * Styled components
 */

 const CarouselWrapper = styled.div`
    ${tw`mt-16 w-screen overflow-scroll  flex flex-no-wrap space-x-8 lg:space-x-16`}

    @media (max-width: 768px) {
        height : 17rem;
    }

    @media (min-width: 768px) {
        height : 30rem;
    }

    @media (min-width: 1024px) {
        height : 37rem;
    }

    @media (min-width: 1600px) {
        height : 42rem;
    }
 `

 const CarouselItem = styled.div` 
    ${tw`flex-none bg-black w-full md:w-11/12 lg:w-5/6 xl:w-4/6 `}
 `