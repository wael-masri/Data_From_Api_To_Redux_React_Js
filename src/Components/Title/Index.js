import React,{Fragment} from 'react'
import './Style.css';
const Title = (props) => {
    return (
        <Fragment>
           <h2>{props.title}</h2> 
        </Fragment>
    )
}

export default Title
