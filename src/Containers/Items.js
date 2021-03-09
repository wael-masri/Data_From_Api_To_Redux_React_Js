import React from 'react'
import ShowItems from '../Components/ShowItems/Index'
import Title from '../Components/Title/Index';
const Items = (props) => {
 let id =props.match.params.id;



return (
    <div className='container'>
        <Title title="Items List" />
     <ShowItems id={id} />
    </div>
)
}
export default Items