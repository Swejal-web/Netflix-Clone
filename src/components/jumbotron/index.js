import React from 'react';
import {Inner,Item,Container,Title,SubTitle,Pane,Image} from './styles/Jumbotron'

//restProps help to pass down any objects.
const  Jumbotron=({children,direction,...restProps})=>{
    return (
        <Item {...restProps}>
            <Inner direction={direction}> {children}</Inner>
        </Item>
    );
};

Jumbotron.Container=  function JumbotronContainer({children,...restProps}) {
    return <Container {...restProps}>{children}</Container>;

}

Jumbotron.Title = function JumbotronTitle({children,...restProps}) {
    return <Title {...restProps}>{children}</Title>
}


Jumbotron.SubTitle = function JumbotronSubTitle({children,...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Pane = function JumbotronPane({children,...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}


Jumbotron.Image = function JumbotronImage({children,...restProps}) {
    return <Image {...restProps}>{children}</Image>
}


export default Jumbotron;