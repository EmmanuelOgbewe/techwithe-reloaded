
import React from 'react';

import styled from "styled-components"
import tw from "twin.macro"
import Navbar from "./navbar";
import { WrapperStyle, ButtonStyle} from './styles'
import {scrollToDiv} from "../lib/scroll";
import Footer from "./footer";
import Head from "next/head";



const SectionTemplate = ({id, subTitle, mainTitle, description, buttonTitle, src, onSelect}) => {

    return (
        <SectionTemplateStyle img={src} >
          <section id={id} className="bg-darkTheme bg-opacity-50 flex flex-row  flex-wrap  items-center  p-8  md:p-12 lg:pl-24 lg:pr-24 xxl:pl-56 xxl:pr-56 ">
            <section className={`flex flex-col space-y-8 ${buttonTitle != null ? 'lg:w-3/5 xxl:w-3/4' : 'xl:pr-24' } w-full `}>
              <section>
                <h2 className="font-light text-white text-lg lg:text-xl xxl:text-2xl">{subTitle}</h2>
                <div className="w-12 h-1 bg-blueBanner "></div>
              </section>
              <h1 className="text-4xl text-white font-normal md:text-5xl lg:text-6xl xl:text-7xl">{mainTitle}</h1>
              <p className="font-light text-white text-lg text-opacity-75 ">{description}</p>
            </section>
            {buttonTitle != null ?
            <section className="w-3/4 lg:w-2/5 xxl:w-1/4 flex flex-row items-center justify-start  lg:justify-end">
              <SectionButton onClick={()=> onSelect()}>{buttonTitle}</SectionButton> 
            </section> : null }
          </section>

        </SectionTemplateStyle>
    )

}


function HomePage() {
  return (
    <div className="flex flex-col bg-darkTheme h-full w-screen">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
          <link rel="shortcut icon" href="/static/techwithe_browser_icon.png" />
        </Head>
        {/* <script type="module" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js"></script>
        <script noModule="" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js"></script> */}
        <Navbar darkMode={true}/>
        <HomeWrapper marginTop= "lg:mt-32">
          
          <SectionOneWrapper>
            <section >
              <h1 className="text-white "><Discover>Discover</Discover> the power</h1>
              <h1 className="text-white">of tech</h1>
            </section>
            <p>A platform to learn about technology.</p>
            <LearnMore>Learn More</LearnMore>
          </SectionOneWrapper>
        </HomeWrapper>
        <SectionTemplate id="learn" subTitle="Learn" mainTitle="Videos and Courses" description = "Do you enjoy tech videos? Or Interested in learning how to code?  Join the newsletter to get notified when they launch." onSelect={() => scrollToDiv('footer','/')} buttonTitle="I'm Interested" src="/static/learn_back_image.png"/>
        <SectionTemplate  subTitle="Resources" mainTitle="Web Templates" description = "Looking to build a website for your business or a client? Check out my templates." buttonTitle="View Templates" onSelect={()=> scrollToDiv('templates', '/templates')} />
        <SectionTemplate id="about"  subTitle="Creator of TechWithE"  description = "Emmanuel is a freelance developer who discovered their passion for programming 5 years ago. He created this platform to teach others programming and share his knowledge on the technology we use every day." />
        <Footer/>
      
    </div>
  );
}

export default HomePage;


const HomeWrapper = styled(WrapperStyle)`
  ${tw`grid grid-cols-1` }
`

const SectionOneWrapper = styled.main.attrs(props => ({
  className : `flex  flex-col mb-16 pt-12  md:pt-24 text-white ${props.paddingTop} justify-center xxl:pl-48 xxl:pr-32`
}))`
  & {
      h1{
          ${tw`font-normal  text-5xl md:text-7xl lg:text-7xl xl:text-8xl pr-0 mb-0 md:pr-16 lg:pr-0`}
          
      } 
      p {
          ${tw`text-lg text-opacity-50  font-normal mt-12 mr-8`}
      }
  }
`

const LearnMore = styled(ButtonStyle)`
  ${tw`bg-blueBanner text-white w-6/12 justify-center  hover:bg-blueBanner hover:bg-opacity-75 items-center md:w-2/12`}
`

const SectionButton = styled(ButtonStyle)`
  ${tw`bg-transparent text-white text-opacity-75 w-4/5 lg:w-6/12  border  hover:bg-black   hover:bg-opacity-25 `}
` 
const SectionTemplateStyle = styled.div.attrs((props) => ({
    className : `w-full bg-center bg-darkTheme bg-opacity-50 bg-fixed bg-cover bg-no-repeat mb-12 xl:mb-18   `,
   
}))`
   background-image: url(${props => props.img})
`
const Discover = styled.span`
  ${tw`text-blueBanner`}
`
