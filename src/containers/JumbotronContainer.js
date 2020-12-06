import React from 'react';
import Jumbotron from '../components/jumbotron/index';
import JumboData from '../fixtures/jumbo';

const JumbotronContainer =()=>{


 const RenderedOutput= JumboData.map((item)=>{
    //console.log(item.title);
return(
   
    
<Jumbotron key={item.id} direction={item.direction}> 
    <Jumbotron.Pane>  
        <Jumbotron.Title>{item.title}</Jumbotron.Title>
        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
    </Jumbotron.Pane>  
    <Jumbotron.Pane>
        <Jumbotron.Image src={item.image} alt={item.alt} />
    </Jumbotron.Pane>
</Jumbotron>
 
) ;
 
});
    return (
        <Jumbotron.Container>
            {RenderedOutput}
        </Jumbotron.Container>
    );
     
    
};
export default JumbotronContainer;