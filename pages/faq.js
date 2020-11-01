import React, {Component, useEffect} from "react";

import Footer from '../components/footer'
import styled from "styled-components";
import tw from "twin.macro"
import {scrollToDiv} from '../lib/scroll'
import Navbar from '../components/navbar'
import Head from 'next/head'
import FAQ,{FAQWrapper, PageWrapper} from '../components/faq'

const FAQPage = () => {

    useEffect(() => {
        scrollToDiv("FAQ");
    })
    return (
        
        <PageWrapper>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
            </Head>
            <Navbar/>
            <FAQWrapper id="FAQ">
                <h1>FAQ</h1>
                <FAQ/>
            </FAQWrapper>
            <Footer/>
        </PageWrapper>
    )
}

export default FAQPage;

