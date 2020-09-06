import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Shortlist extends Component {
    state = {  }


    render() { 
        return ( 
            <div className="shortlistcontainer">

        <div className="shortlistheader"><h1>SHORTLIST</h1></div>
        <div className="shortlistbody">

        <div className="jobadd">
                        <div className="jimg"></div>
                        <div className="jcontent">
                          {/* <label>Name : {i.provider&&i.provider.name||""}</label> */}
                          {/* <label>Age : {i.provider&&i.provider.age||""}</label> */}
                          {/* <label>Work as : {i.workAs}</label> */}
                        </div>
                        <div className="jbtn">
                        {/* <Link onClick={()=>{localStorage.setItem("jobId",i.id)}} to="/preview" state={i}> */}
                          <button >Show More</button>
                          <button>Remove</button>
                        {/* </Link> */}
                          {/*  */}
                        </div>
                      </div>

        </div>



            </div>
         );
    }
}
 
export default Shortlist;