import React from "react";
import { Collapse} from 'antd';
import { CaretRightOutlined} from '@ant-design/icons';

import styled from "styled-components";
import tw from "twin.macro"


import '../styles/Collapse.module.css'

const q1 = `Can I customize templates?`
const q1Ans = `
    Yes. Contact me for more information.' 
`;

const q2 = `Do I set up the website?`
const q2Ans = `No. We set up the website for you! When finding a template that you like
select the 'Starting at' or 'Get Started' button and fill out the form. You will receive an email from us with your estimated price and instructions on how to move forward. `

const q3 = `Do you offer hosting?`
const q3Ans = `We do not offer our own hosting service, we use a third party service to host your site.`
const { Panel } = Collapse;
export const FAQ  = () => {
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
        >
            <Panel header={q1} key="1" className="site-collapse-custom-panel">
            <p>{q1Ans}</p>
            </Panel>
            <Panel header={q2} key="2" className="site-collapse-custom-panel">
            <p>{q2Ans}</p>
            </Panel>
            <Panel header={q3} key="3" className="site-collapse-custom-panel">
            <p>{q3Ans}</p>
            </Panel>
        </Collapse>
    )
}


export default FAQ;

export const PageWrapper = styled.div`
    ${tw`flex flex-col w-full `}
`
export const FAQWrapper = styled.div.attrs(() => ({
    className : `p-8 pt-24  lg:pt-32 lg:pl-16 lg:pr-16 xl:pt-48   xl:pl-32 xl:pr-32 space-y-8`
}))`
    h1 {
        ${tw`text-4xl font-semibold text-center`}
    }
`