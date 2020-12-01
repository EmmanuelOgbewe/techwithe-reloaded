import React,{Component} from 'react'
import styled from "styled-components"
import tw from "twin.macro"
import {scrollToDiv} from '../lib/scroll';
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useRouter} from 'next/router';

export default class Footer extends Component {

    constructor(props){
        super(props)
        this.state = {
            didSubmit : false,
            email : '',
            errorMessage : null,
            buttonDisabled : false,
        }
        this.submitEmail = this.submitEmail.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        
    }
    componentDidMount() {
       
    }


    submitEmail(e){
        e.preventDefault();
        
        if(this.state.email.includes('@')){
            //submit if user email if valid 
            fetch("/api/newsletter", {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email : this.state.email}),

            }).then((response)  => {
                if(response.status === 200){

                    this.setState({
                        didSubmit : true,
                        errorMessage : null,
                        buttonDisabled : false
                        
                    })
                } else {
                   response.json().then((data) => {
                        console.log(data);
                    
                        this.setState({
                            didSubmit : false,
                            errorMessage : data.errorMessage,
                            buttonDisabled : false
                            
                        })
                   });
                }
            });

        } else {
    
            this.setState({
                errorMessage : 'Please enter a valid email.',
                buttonDisabled : false,
            })
        }

        console.log(this.state)
     
    }

    changeEmail(e){

        this.setState({
            email : e.target.value
        })
    }
    
    render () {
       

        return (
            <FooterWrapper id="footer">
                <Head>
               
                </Head>
                <div className="  flex flex-col items-start md:items-center p-8 md:p-16 md:pb-8 lg:p-24 lg:pb-4  xxl:p-56 xxl:pt-24 xxl:pb-8">
                    <div className={`flex flex-col ${this.state.errorMessage === null && this.state.didSubmit ? 'hidden' : ''} w-full items-start md:items-center`}>
                        <StayUpToDate>
                            <label className="text-white">Stay up to date by joining the email list. </label>
                        </StayUpToDate>
                        <EmailInput>
                            <input type="text" placeholder="Enter your email" onChange={this.changeEmail}/>
                        </EmailInput>
                        <label className={`text-red-500 w-11/12 md:w-8/12 lg:w-3/5 xl:w-1/3  mt-4 ${this.state.errorMessage == null ? 'hidden': ''} `}>{this.state.errorMessage}</label>
                        <div className=" w-full mt-16 flex flex-col items-center ">
                            <SendButton onClick={this.submitEmail}>Send</SendButton>
                        </div>
                    </div>
                    <label className={`text-white text-4xl text-center ${this.state.didSubmit && this.state.errorMessage == null ? '' : 'hidden'} `}>Thank you! <br></br>  You have been added to the list.</label>
                    <TechWithE>TECHW/E</TechWithE>
                    <SectionsWrapper>
                        <Sections>
                            <div>
                                <h1>Explore</h1>
                                {/* <a href="">Pricing</a> */}
                                <Link href="/" passHref> 
                                    <StyledLink>Home</StyledLink> 
                                </Link>
                                <button className="flex text-start" onClick={() => scrollToDiv("learn", "/")} href="">Learn</button>
                                <button onClick={() => scrollToDiv("templates", "/templates")} href="">Web Templates</button>
                            
                            </div>
                        </Sections>
                        <Sections>
                            <div>
                                <h1>Resources</h1>
                                {/* <a href={window.location.origin + "/#FAQ"}>FAQ</a> */}
                                <Link href="/" passHref> 
                                    <StyledLink>Terms of use</StyledLink> 
                                </Link>
                                <Link href="/privacy" passHref> 
                                    <StyledLink>Privacy</StyledLink> 
                                </Link>
                                <Link href="/faq" passHref> 
                                    <StyledLink>FAQ</StyledLink> 
                                </Link>
                            </div>
                        </Sections>
                        <Sections>
                            <div>
                                <h1>Get Help</h1>
                                <Link href="mailto:techwithe@gmail.com" target="_blank" passHref> 
                                    <StyledLink>Contact</StyledLink> 
                                </Link>
                            </div>
                        </Sections>
                       
                         <Sections>
                            <div >
                                <h1>Social</h1>
                                <Link href="https://www.instagram.com/techwithe/" passHref>
                                    <StyledLink>Instagram</StyledLink> 
                                </Link>
                            </div>
                        </Sections>
                
                    </SectionsWrapper>
                    <CopyRightInfo>
                       
                            <label className="text-left">© 2020 TechWithE. All Rights Reserved</label>
                            <label className="text-left md:text-center" >Made with ♥ <a className="" href="https://instagram.com/emmanuelogbewe/" >Emmanuel Ogbewe</a> </label>
                        
                    </CopyRightInfo>
                    
                </div>
            </FooterWrapper>
            
        )
    }
}

/**
 * Styles 
 */

const StayUpToDate = styled.label`
    label {
        ${tw`text-lg md:text-2xl lg:text-3xl text-center font-normal`}
    }
`
const EmailInput = styled.main.attrs({
     className : 'flex flex-col font-light justify-center bg-white  w-11/12 md:w-8/12 lg:w-3/5 xl:w-1/3 mt-8 md:mt-16 justify-center'
})`
    input {
        ${tw`placeholder-gray-800 placeholder-opacity-75 bg-transparent text-black outline-none bg-opacity-75 pt-4 pb-4 pl-4 pr-4 w-full`}
    }
`
const SendButton = styled.button`
    ${tw`text-white border-solid border p-2 pl-4 pr-4`}
`
const FooterWrapper = styled.main.attrs({
    className : 'bg-darkTheme mt-8 xl:mt-0 xxl:mt-12 '
})` 
`
const SectionsWrapper = styled.div`
    ${tw`w-full mt-12 md:space-x-8 lg:space-x-24 space-y-10 md:space-y-0 flex flex-col md:flex-row items-start md:justify-between`}
`
const Sections = styled.div`
    & {
        div {
            ${tw`flex flex-col space-y-8 `}
        }
        h1 {
            ${tw`font-medium text-white m-0  text-sm md:text-base`}
        } 
        /* a {
            ${tw`font-medium text-gray-300 text-opacity-50 text-sm md:text-base`}
        } */

        button {
            ${tw`focus:outline-none text-gray-300 text-opacity-50 text-sm md:text-base`}
        }

        /* ion-icon {
            ${tw`text-xl`}
        } */
    }
`

const StyledLink = styled.a`
    ${tw`font-normal text-gray-300 text-opacity-50 hover:text-gray-300 text-sm md:text-base`}
`
const TechWithE = styled.label`
    ${tw`text-white font-semibold italic  w-full mt-24 `}
`
const CopyRightInfo = styled.main.attrs({
    className : `w-full grid grid-rows-2 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full mt-16 md:mt-32 text-white text-opacity-25 font-normal`
})`

    & {
        label, a {
            ${tw`w-full text-sm md:text-base text-white text-opacity-25`}
        }

        a {
            ${tw`hover:text-opacity-50`}
        }
        
    }
`