import React from 'react';
import {Spinner, LockBody, ReleaseBody,Picture} from './styles/Loading';

const Loading = ({...restProps})=>{
    return(
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={'/images/users/2.png'} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody(){
    return <ReleaseBody/>
}

export default Loading;