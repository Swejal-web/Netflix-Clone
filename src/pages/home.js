import React from 'react';
import FooterContainer from '../containers/FooterContainer';
import JumbotronContainer from '../containers/JumbotronContainer';
import FaqsContainer from '../containers/FaqsContainer';
import HeaderContainer from '../containers/Header';
import OptForm from '../components/opt-form';
import Feature from '../components/features/index';

const   Home =()=>{
    return(
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>
                    Unlimited films,Tv programmes adn more.
                </Feature.Title>
                <Feature.SubTitle>
                    Watch anywhere.Cancel at any time.
                </Feature.SubTitle>
                <OptForm>
               <OptForm.Input placeholder="Email adress" />
               <OptForm.Button>Try it Now!</OptForm.Button>
               <OptForm.Text>
                   Ready to watch? Enter your email to create or restart your membership
               </OptForm.Text>
           </OptForm>
            </Feature>
       
        </HeaderContainer>
        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
        
        </>
    )
}
export default Home;
