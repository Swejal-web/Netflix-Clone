import React from 'react';
import Accordian from '../components/accordian/index';
import faqData from '../fixtures/faqs';
import OptForm from '../components/opt-form';

const FaqsContainer = ()=>{

    const RenderedOutput = faqData.map((item)=>{
        return (
            <Accordian.Item key={item.id}>
                <Accordian.Header>{item.header}</Accordian.Header>
                <Accordian.Body>{item.body}</Accordian.Body>
            </Accordian.Item>
        );

    });

    return(
        <Accordian>
            <Accordian.Title>Frequently Asked Questions</Accordian.Title>
           {RenderedOutput}

           <OptForm>
               <OptForm.Input placeholder="Email adress" />
               <OptForm.Button>Try it Now!</OptForm.Button>
               <OptForm.Text>
                   Ready to watch? Enter your email to create or restart your membership
               </OptForm.Text>
           </OptForm>
        </Accordian>
    );
}
export default FaqsContainer;