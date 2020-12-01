import React, {Component} from 'react';

import styled from "styled-components"
import tw from "twin.macro"
import {FAQ} from '../pages/faq'
import {templatesData} from "../lib/data"
import Link from 'next/link'
import Navbar from "./navbar";
import IntroSection from "./introSection";
import Footer from "./footer";
import Head from "next/head";

function CollectionItem({url, img, templateName,price,category }) {
    return (
        <CollectionItemStyle>
            <div>   
                <Link  href={`/templates/${templateName}`}passHref>
                    <img className="cursor-pointer" src={`../../static/${img}`} href={`image ${img}`}></img>
                </Link>
               
                <TemplateDescription>
                    <div >
                        <section>
                            <Link  href={`/templates/${templateName}`}passHref><h1 className="cursor-pointer">{templateName}</h1></Link>
                            <p className="">{category}</p>
                        </section> 
                        <h2>{`$${price} USD`}</h2>
                    </div>
                </TemplateDescription>
            </div>
            
        </CollectionItemStyle>
        
    )
}

function createItems() {
    return (Object.keys(templatesData).map((template) => {
        return <CollectionItem key={template} img={templatesData[template].images[0]} price={templatesData[template].s_price} templateName={template} category={templatesData[template].category}/>
    }));
}



function Templates () {
    return (

        <div className="flex flex-col bg-white h-screen w-screen">
            <Head>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
            <link rel="shortcut icon" href="/static/techwithe_browser_icon.png" />
            </Head>
            {/* <script type="module" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule="" src="https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js"></script> */}
            <Navbar/>
            <IntroSection/>
            <TemplatesWrapperStyle id="templates">
            <div>
                <NewTemplates>
                    <h1>New templates</h1>

                </NewTemplates>
                <Collections>
                    {createItems()}
                </Collections>
            </div>
            </TemplatesWrapperStyle>    
            <Footer/>
      
        </div>
    )
}

export default Templates 

const TemplateDescription = styled.div`
    & {
        div {
            ${tw`flex flex-row justify-between mt-4`}
        }

        h1, p {
            ${tw`m-0`}
        }

        h2 {
            ${tw``}
        }
    }
`

const CollectionItemStyle = styled.main.attrs({
    className : `w-full md:w-2/4 lg:w-1/3 mb-8 lg:mb-12 md:mb-16 md:pr-8 lg:pr-16`
})`
    & {
        img {
            ${tw`object-fill transition duration-500 ease-in-out shadow-none hover:shadow-xl`}
        }
        
        /* div {
            ${tw`bg-white flex flex-col`}
        } */


        h1{
            ${tw`font-medium text-base md:text-lg`}
        }
        h2 {
            ${tw`font-normal text-gray-700 text-base md:text-lg`}
        }
        p {
            ${tw`text-gray-700 font-normal text-base `}
        }
    }
`
const StyledLink = styled.a.attrs((props) => ({
    className : ' flex items-center justify-center  h-10 w-24'
}))`
    ${tw`  text-base font-normal text-center  text-black hover:text-black focus:text-black`}
`

const TemplatesWrapperStyle = styled.main.attrs({
    className : 'pt-16  pl-8 pr-8 xl:pt-8  md:pl-12 md:pr-12 lg:pl-24 lg:pr-16 xxl:pl-56 xxl:pr-56'
})`
       
`

const Collections = styled.main.attrs({
    className : ' flex flex-wrap justify-between pt-12  '
})`
`
const NewTemplates = styled.main.attrs({
    className : ''
})`
    h1 {
        ${tw`font-normal text-4xl`}
    }
`
