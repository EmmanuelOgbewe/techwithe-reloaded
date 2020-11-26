import React, {Component, useState, useEffect} from 'react';
import styled from "styled-components";
import tw from "twin.macro";

function create(){
    return (
        <CarouselWrapper>
            {createList()}
        </CarouselWrapper>
    )
}
function Carousel ({images}) {

    const [data, setData] = useState([]);

    useEffect(() =>{
        // var el = document.querySelector('.firstElement');
        // var offsetX = el.offsetLeft;
        // el.style.left = '1100px';
        // el.innerHTML = "Paragraph changed!";
        // for (const el in images){
        //     data.push(images[el]);
        //     console.log(data);
        //     setData(data);
        // }

    })

    function createList (){
        var listItems = [];

        for(var url in images){
            listItems.push(images[url]);
        }
       return listItems.map((img) => <CarouselItem src={`../../static/${img}`} href={img}></CarouselItem>)
    }

    
    return (
        <CarouselWrapper>
            {createList()}
        </CarouselWrapper>
    )
}

export default Carousel;


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

 const CarouselItem = styled.img` 
    ${tw`flex-none object-contain w-full md:w-11/12 lg:w-5/6 xl:w-4/6 `}
 `