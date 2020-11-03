import React, {Component, useState, useEffect} from 'react' 

import styled from "styled-components"
import tw from "twin.macro"
import {getAllKeys, getTemplateData} from "../../lib/data"

import {WrapperStyle, SectionOneWrapper,ButtonStyle} from '../../components/styles'
import templates from '../../lib/data'
import Footer from '../../components/footer'
import Carousel from '../../components/carousel'
import Navbar from '../../components/navbar'
// import 'antd/dist/antd.css';
import {  Modal, Input, Spin } from 'antd';
import {  LoadingOutlined } from '@ant-design/icons';
import FAQ from '../../components/faq';
// import { scrollToDiv } from '../utils/Scroll';
import Head from 'next/head';
import { useRouter } from 'next/router'



const submissionInfo = 'Fill out the form below and you will be contacted within 3 - 5 business days with a quote for your site.';
const submissionCompleted = `You will be contacted within 1 - 5 business days with a quote for your site and \n
more information on moving forward. Thank you!`;

const QuoteForm = ({setCompleted, templateData}) => {
    const [fname , setFirstName] = useState("");
    const [lname , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [phoneNumber , setPhoneNumber] = useState("");
    const [comments, setComments] = useState("");
    const [showLoader, setLoader] = useState(false);
    const [showError , setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const {TextArea} = Input;
    const antIcon = <LoadingOutlined style={{ fontSize: 24, color:"white" }} spin />;

    const onChange = (e) => {
        switch (e.target.name) {
            case "fname" : setFirstName(e.target.value);
            break;
            case "lname" : setLastName(e.target.value);
            break;
            case "email" : setEmail(e.target.value);
            break;
            case "phoneNumber" : setPhoneNumber(e.target.value);
            break;
            case "comments" : setComments(e.target.value);
            break;
            default: return;
        }
    }

    const handleSubmit = () =>{
        //post request to local api 
       
        if(!email.includes("@")){
            console.log("Invalid email");
            setErrorMessage("Invalid email.")
            setError(true);
            return;
        }

        if(fname.length !== 0 && lname.length !== 0 && email.length !== 0 ){
            setError(false);
            setLoader(true);
            const data = {templateName:templateData.name, templateID: templateData.id, email : email, fname: fname, lname: lname, phoneNumber: phoneNumber, comments:comments};
       

            fetch('/api/subscribeTemplate', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if(response.status === 200){
                  
                    console.log(response.body);
                    setLoader(false);
                    setCompleted(true);
                } else {
                    // error 
                    setLoader(false);
                    setErrorMessage(response.errorMessage);
                    setError(true);
                }
            })

        } else {
            // show alert 
            setErrorMessage("Fill in the required fields (*).")
            setError(true);
            
            console.log("Invalid form")
        }
    }

    return (
        <div>
            {showError ? <ErrorMessage >{errorMessage}</ErrorMessage> : null }
           
            <ModalSectionTwo>
                <ModalFormInputOne>
                    <Input onChange={onChange} name="fname" placeholder="First name*"/>
                    <Input onChange={onChange} name="lname" placeholder="Last name*"/>
                    <Input onChange={onChange} name="email" placeholder="Email*"/>
                    <Input onChange={onChange} name="phoneNumber" placeholder="Phone number"/>
                 </ModalFormInputOne>
                 <ModalFormComment>
                     <TextArea onChange={onChange} name="comments" placeholder="Please list any wanted customizations and/or additional questions you might have?" rows={6}/>
                </ModalFormComment>
                    
             </ModalSectionTwo>
            <GetQuoteButton disabled={showLoader} onClick={handleSubmit}>{showLoader ? <Spin indicator={antIcon}></Spin> :  "Get Quote"}</GetQuoteButton>
        </div>
    )
}

export default function Details({templateData}) {

    // let {templateName} = useParams();
    const [templateDetails, setDetails] = useState({});
    const [features, setFeatures] = useState([]);
    const [images, setImages] = useState([]);
    const [visible, setVisible] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const router = useRouter()
    const query = router.query;

    useEffect(() => {
       

        let currentTemplate = templates[query.name];
        console.log(router.query);
        console.log(currentTemplate);
        if(currentTemplate === undefined){
            return null;
        }
        setDetails(currentTemplate);
        setFeatures(currentTemplate.features);
        setImages(currentTemplate.images);
       
    });


    const showModal = () => {
        setVisible(true);
    };


    const handleCancel = () => {
        setVisible(false);
        setSubmitted(false);
    }

    const featuresList = () => {
        return features.map((feature) => <FeatureItem key={feature.id}>{feature}</FeatureItem>);
    }
   
    const QuoteSubmitted = () => {
       
        return (
            <div>
                <ModalCompletionForm>
                    <h1>Your request has been sent!</h1>
                    <p>{submissionCompleted} </p>
                    <DoneButton onClick={handleCancel}>Done</DoneButton>
                </ModalCompletionForm>
            </div>
        )
    }


    const QuoteModal = () => {
        return (
            <Modal
                title=""
                visible={visible}
               
                onCancel={handleCancel}
                centered = {true}
                footer=""
                width={"80%"}
             >  
                <ModalWrapper>
                    {submitted ? <QuoteSubmitted/> : 
                        <ModalSectionOne>
                        <ModalTemplateDetails>
                            <h1>{templateDetails.feat_name}</h1>
                            <p>{templateDetails.description} </p>
                            <p className="text-blueBanner underline">{`Starting at $${templateDetails.s_price}`}</p>
                                
                            <p>{submissionInfo}</p>
                        
                            
                        </ModalTemplateDetails>
                        
                        <div className="  justify-center items-center hidden lg:flex lg:h-56  xxl:h-64 xxl:pt-0 xxl:pl-16">
                            <img className=" "  src="https://images.unsplash.com/photo-1493946947703-a0e68b050bee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" ></img>
                        </div>
                    </ModalSectionOne>
                    }
                    {submitted ? null :  <QuoteForm templateData={templateDetails}  setCompleted={(val) => setSubmitted(val)}/>}
                </ModalWrapper>

            </Modal>
        )
    }

    

    return (
        <div id="details-page" className="flex flex-col bg-white ">
        <Head>
             <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        </Head>
        <Navbar/>
        <WrapperStyle  marginTop="lg:mt-32 ">
            <SectionOneWrapper  paddingTop={"xl:pt-0"}>
                <h1>{templateDetails.feat_name}</h1>
                <p>{templateDetails.description} </p>
                <div className=" flex flex-col pr-32 md:pr-0 md:flex-row mt-12 md:space-x-8  ">
                    <Price>
                        <button className="focus:outline-none font-light" onClick={() => showModal()}>{`Starting at $${templateDetails.s_price}`}</button>
                    </Price> 
                    <Preview>
                        <a  href="https://emmanuelogbewe.github.io/techwithe/#/">Preview in browser</a>   
                    </Preview>
                </div>

            </SectionOneWrapper>
            <MainTemplateImage>
                <div >
                    <img src="https://images.unsplash.com/photo-1493946947703-a0e68b050bee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" ></img>
                </div>
               
            </MainTemplateImage>
        </WrapperStyle>
        <Carousel/>
        <TemplateDetails>
            <FeaturesList>
                <FeatureSectionTitle>Features </FeatureSectionTitle>
                {featuresList()}
            </FeaturesList>
            <FAQWrapper>
                <FaqSectionTitle>FAQ</FaqSectionTitle>
                <FAQ/>
            </FAQWrapper>

        </TemplateDetails>
        <CustomizeBanner>
            <Title>Want to make Customizations?</Title>
            <SubTitle>All templates offered can be customized. Contact me below to get started.</SubTitle>
            <GetStarted onClick={()=> showModal()}>Get Started </GetStarted>
        </CustomizeBanner>
        <QuoteModal></QuoteModal>
        <Footer/>
        </div>
    )
    
}

// export async function getStaticPaths() {
//    const paths = getAllKeys();
//     console.log("Getting keys");
//    return {
//        paths,
//        fallback : false
//    }
// }

// export async function getStaticProps({ params }) {
//     const templateData = getTemplateData(params.name);

//     return {
//         props : {
//             templateData
//         }
//     }
// }

/**
 * Pop up form styles
 */

 const ModalWrapper = styled.div.attrs(() => ({
     className : 'bg-white lg:p-8 lg:pb-4  xl:p-16 xl:pb-4 flex flex-col space-y-10'
 }))`
 `

 const ModalSectionOne = styled.div.attrs(() => ({
     className : 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 '
 }))`
    div {
        ${tw``}
    }

    img {
        ${tw`object-cover xl:w-4/5 h-full `}
    }
 `
const ModalSectionTwo = styled(ModalSectionOne)`
    & {
        div {
            ${tw``}
        }
    }

`
 const ModalTemplateDetails = styled.div.attrs(() => ({
     className : 'flex flex-col space-y-4 justify-center'
 }))`
    & {
        h1 {
            ${tw`text-xl lg:text-3xl font-normal `}
        }

        p {
            ${tw`text-sm lg:text-base font-light`}
        }
    }
 `

const ModalCompletionForm = styled(ModalTemplateDetails)`
    ${tw`items-center text-center space-y-8`}
`

const DoneButton = styled.button`
    ${tw`border border-gray-400 hover:border-opacity-75 hover:text-opacity-75 focus:outline-none h-10 w-48 items-center text-base`}
`

const ModalFormInputOne = styled.div`
    ${tw`flex flex-col xl:pr-16 space-y-8 font-light `}
`
const ErrorMessage = styled.p`
    ${tw`text-red-500 mb-4 text-sm lg:text-sm font-light`}
`
const ModalFormComment = styled.div`
    ${tw`xl:pr-8 xl:pl-8 font-light`}
`
const GetQuoteButton = styled.button.attrs(({disabled}) => ({
className : `${disabled ? 'bg-opacity-75 ' : 'hover:text-opacity-75'} bg-blueBanner mt-10 justify-center items-center h-10 w-full  focus:outline-none text-white text-sm lg:text-base  font-light`
}))`

`




/**
 * Main Style Components
 */

const Price = styled.main`
    background: #4421D1;
    color: white;

    ${tw`mt-4 md:mt-0 p-4 text-center hover:bg-opacity-75 text-base font-light`}
`
const Preview = styled(ButtonStyle)`
     ${tw`mt-4 md:mt-0 border border-gray-400 bg-white text-black  `} 
     a {
        ${tw`text-black`}
     }
`

const GetStarted = styled(ButtonStyle)`
    ${tw`mt-4 pl-8 pr-8 focus:outline-none `}
`

const TemplateDetails = styled.div.attrs(() => ({
    className : `space-y-16 pl-8 pr-8 pt-8 md:pl-12 md:pr-12 lg:p-12 lg:pl-24 lg:pr-24   xxl:p-24 xxl:pl-48 `
}))`
`
const FeaturesList = styled.main.attrs(() => ({
    className : `space-y-4`
})) `
    & {

        ul {
            ${tw`flex flex-col list-disc  justify-center `}
        }   

    }

`
const FAQWrapper = styled.section`  
    ${tw`space-y-8`}
`

const FeatureSectionTitle = styled.h1`
    ${tw`font-normal text-4xl`}
`
const FaqSectionTitle = styled(FeatureSectionTitle)``


const FeatureItem = styled.li`
    ${tw`text-lg `}
`

const CustomizeBanner = styled.div.attrs(() => ({
    className : `space-y-8 bg-blueBanner  flex flex-col items-center justify-center p-8 md:p-16`
}))`
    &  {
        
    }
`
const Title = styled.h1`
    ${tw`text-white text-lg text-center md:text-2xl lg:text-3xl font-light`}
`
const SubTitle = styled.h1`
    ${tw`text-white text-sm text-center md:text-xl lg:text-xl font-light`}
`
 

// `
const MainTemplateImage = styled.main.attrs({
    className : 'flex flex-col items-center p-16 hidden lg:flex'
})`

    & {
        img {

        }

    }
`

