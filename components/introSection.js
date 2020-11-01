
import React from 'react'
import tw from "twin.macro"
import {scrollToDiv} from "../lib/scroll";

import {SectionOneWrapper, SectionTwoWrapper, WrapperStyle, ButtonStyle} from './styles'



const IntroSection = () => {
    return (
        <WrapperStyle marginTop= "lg:mt-32">
            <SectionOneWrapper section="one">
                <h1>Fully responsive websites for designers, personal and business use.</h1>
                <p>Choose a template that meets your needs and lets make it go live. </p>
                <div className=" flex flex-col md:flex-row pr-32 md:pr-0 md:space-x-8 ">
                    <ButtonStyle onClick={() => scrollToDiv("templates")}>
                        See templates
                    </ButtonStyle>
                </div>
               
       
            </SectionOneWrapper>
            <SectionTwoWrapper section="two">
                <div>
                    <img src="https://images.unsplash.com/photo-1493946947703-a0e68b050bee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" ></img>
                </div>
               {/* <div>
                    <img src="https://images.unsplash.com/photo-1493946947703-a0e68b050bee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" ></img>
               </div> */}
               {/* <div>
                   <img src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" ></img></div>
               <div>
                    <img src="https://images.unsplash.com/photo-1493946947703-a0e68b050bee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" ></img>
               </div> */}
            </SectionTwoWrapper>

        </WrapperStyle>
    )
}


export default IntroSection;


