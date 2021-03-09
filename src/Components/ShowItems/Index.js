import {connect} from 'react-redux'
import React , {useEffect,Fragment} from 'react';
import {fetchUsers} from '../../Reducers/ReducerItems/FetchData';
import Img1 from '../../Images/g8.jpg';
import Img2 from '../../Images/g2.jpg';
import Img3 from '../../Images/g3.jpg';
const ShowItem = (props) => {
  

   //functin after running app
    useEffect(() => {
        props.fetchUsers()
     }, [])

   // single items
   const single = (title,id,body,img) => {
   return(<Fragment>
    <div className="card col-md-3" >
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">title Product</h5>
            <p className="card-text" style={{height:'73px'}}>{title}</p>
            <a href="#" className="btn btn-primary" data-toggle="modal" data-target={"#exampleModalCenter" + id}>Details</a>
        </div>
   </div>
    {/* modal */}
    <div className="modal fade" id={"exampleModalCenter" + id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">title Product</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <div className="modal-body">
                {body}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            
            </div>
            </div>
        </div>
    </div> 
    </Fragment>)


   }





    const Items = () => {
        if(props.items.loading){
            return <h2>Loading..</h2>
        }
        else if(props.items.error){
            return <h2>{props.items.error}</h2>
        }
        else if(props.items && props.items.data){
            return (
                <Fragment>
                   {props.items.data.map(user =>{
                       if(props.id === '1'){
                           if(user.userId == props.id){
                          
                                return(
                                        <Fragment key={user.id}>
                                            {single(user.title,user.id,user.body,Img1)} 
                                        </Fragment> )
                           }

                       }
                       else if(props.id === '2'){
                            if(user.userId == props.id){
                                return(  <Fragment key={user.id}>
                                             {single(user.title,user.id,user.body,Img2)} 
                                         </Fragment>)

                            }
                        }
                        else if(props.id === '3'){
                            if(user.userId == props.id){
                                return( <Fragment key={user.id}> 
                                              {single(user.title,user.id,user.body,Img3)} 
                                        </Fragment>)
                            }
                       
                       }
                   })} 
                </Fragment>
            )
        }
    }
  
  
  //running
    return (
        <div className='row'>
          {Items()}  
        </div>
    )
}

export default connect((state) => {
 return{   items : state.item }
},{fetchUsers})(ShowItem)
