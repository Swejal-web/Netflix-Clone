import React,{useState, useContext, createContext} from 'react';
import {Container,Title,Item,Inner,Header,Body} from './styles/Accordian';

const ToggleContext = createContext();

const Accordian=({children,...restProps})=>{
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Accordian.Title = function AccordianTItle({children,...restProps}){
return <Title {...restProps}>{children}</Title>;
}

Accordian.Item = function AccordianItem({children,...restProps}){
    const [toggleShow,setToggleShow]  =  useState(false);
    return (
    <ToggleContext.Provider value={{toggleShow,setToggleShow}}>
        <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
    );
}

Accordian.Header = function AccordianHeader({children,...restProps}){
    const {toggleShow,setToggleShow} = useContext(ToggleContext);
    //takes the previous value of toggleShow adn reverses it
    return (
    <Header onClick={()=>setToggleShow((toggleShow)=>!toggleShow)} 
    {...restProps}>
        {children}
        {toggleShow ? (
            <img src="/images/icons/close-slim.png" alt="Close" />
        ):(
            <img src="/images/icons/add.png" alt="open" />
        )}
    </Header>
    );
}
Accordian.Body = function AccordianBody({children,...restProps}){
    const {toggleShow} = useContext(ToggleContext);
    return toggleShow ? <Body {...restProps}>{children}</Body>:null;
}

export default Accordian;