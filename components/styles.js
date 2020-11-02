
import React from 'react'
import styled from "styled-components"
import tw from "twin.macro"

export const TextFont = styled.div`
  font-family : 'Poppins', sans-serif;
`

export const SectionOneWrapper = styled.main.attrs(props => ({
    className : `flex flex-col pt-12 ${props.paddingTop} justify-center xxl:pl-48 xxl:pr-32`
}))`
    & {
        h1{
            ${tw`font-normal text-4xl pr-0 md:pr-16 lg:pr-0`}
        } 
        p {
            ${tw`text-lg  font-normal mt-8 mr-8`}
        }
    }
`

export const ButtonStyle = styled.button` 
    ${tw`text-base font-light text-gray-600  mt-12 bg-gray-200 focus:outline-none p-4 transition duration-500 ease-in-out hover:bg-gray-300`}
`
export const SectionTwoWrapper = styled.main.attrs({
    className : `hidden justify-center  w-full xl:p-16 xxl:p-32 lg:flex`
})`
    & {
        div {
            ${tw`flex flex-col justify-center`}
        }
        img {
            ${tw`object-cover  w-full`}
        }
    }
`
export const WrapperStyle = styled.main.attrs( (props) =>  ({
    className : `grid grid-rows-1 lg:grid-cols-2 gap-8   w-screen mb-12 mt-12 sm:mt-16 ${props.marginTop} pl-8 md:pl-12 lg:pl-24`
}))`
`