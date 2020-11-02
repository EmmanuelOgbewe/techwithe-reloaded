import React, {Component} from 'react';
import styled from "styled-components"
import tw from "twin.macro"
import {FAQ} from '../pages/faq'
import {templatesData} from "../lib/data"
import Link from 'next/link'

function CollectionItem({url, templateName,category }) {
    return (
        <CollectionItemStyle>
            <div>   
                <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>
                <TemplateDescription>
                    <div >
                        <section>
                            <h1 className="">{templateName}</h1>
                            <p className="">{category}</p>
                        </section> 
                        <Link  href={`/templates/${templateName}`}passHref><StyledLink>View</StyledLink></Link>
                    </div>
                </TemplateDescription>
            </div>
            
        </CollectionItemStyle>
        
    )
}

function createItems() {
    return (Object.keys(templatesData).map((template) => {
        return <CollectionItem key={template} templateName={template} category={templatesData[template].category}/>
    }));
}

function Templates () {
    return (
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
            ${tw`font-normal text-base`}
        }
        p {
            ${tw`text-gray-700 font-normal text-sm`}
        }
    }
`
const StyledLink = styled.a.attrs((props) => ({
    className : 'border border-gray-600 flex items-center justify-center  h-10 w-24'
}))`
    ${tw`  text-sm font-normal text-center  text-black hover:text-black focus:text-black`}
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
