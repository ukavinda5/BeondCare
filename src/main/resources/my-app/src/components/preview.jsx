import React, { Component, useState } from 'react'
import user from "../../src/images/user.png";
import axios from 'axios';
import Modal from './Models/Modal';
import Rating from './Models/Rating'
import Complain from './Models/Complain';
import Shortlist from './Models/Shortlist';

class Preview extends Component {
    
     state = {
         
         subject:null,
         complain:null,
         payid:false,
      rid:false,
      name:null,
      age:null,
      email: null,
      salary: null,
      workAs: null,
      availability: null,
      petFriendly: null,
      workHours: null,
      ex1: null,
      ex2: null,
      ex3: null,
      ex4: null,
      provider:{},
      rating:6,
      show:false,
      showRating:false,
      showShortlist:false,
      showComplain:false,
      unlockContact:false
     }
    
    closeModalHandler = () => {
        this.setState({
            ...this.state,
            show:false,
            showRating:false,
            showComplain:false,
            showShortlist:false
        })
    };

    setShow=()=>{
        this.setState({
            ...this.state,
            show:true
        })
        
    }
    setShowRating=()=>{ 
        this.setState({
        ...this.state,
        showRating:true
    })}

    setShowComplain=()=>{
        this.setState({
            ...this.state,
            showComplain:true
    })}
    setShowShortlist=()=>{
        this.setState({
            ...this.state,
            showShortlist:true
    })}
  
    componentDidMount(){


      

        
        let job=localStorage.getItem("job");
        let providerId=""
        this.setState({job:job})
        axios.get("/api/job/find/byId/"+localStorage.getItem("jobId"))
      .then((res) =>{
        this.setState(res.data)
        console.log(this.state)
        providerId=res.data.provider.email
        axios.get(`api/job/checkExist?receiver_id=${localStorage.getItem("email")}&provider_id=${res.data.provider.email}`)
        .then(res=>{
            
            this.setState(res.data)
            
            
        })
        .catch(
            err=> {console.log(err)}
        )
      })
      console.log(this.state)
    }


    
    
    
    
    
    render() { 
        
        
        
        
        return ( 
            
            <div className="preview">
            { this.state.show ||this.state.showComplain||this.state.showRating? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
            
            <div className="profilesec">
                        <div className="profil_pic">
                        <img className="picp" src={user} />
                        </div>

                        <div className="pro1">
                        <lable className="lablestyle1">Name : {this.state.provider.name||""}</lable>
                        <lable className="lablestyle1">Age : {this.state.provider.age||""}</lable>
                        <lable className="lablestyle1">Location : {this.state.provider.location||""}</lable>
                        <lable className="lablestyle1">Can Work as  : {this.state.workAs}</lable>
                        </div>

                    </div>
                <div className="uprsec">
                    <div className="lowsec">
                    
                    <button  onClick={this.setShow} className="nav-item unbtn">Unlock Contact Details</button>
            
                    <div onClick={this.state.payid&&this.updateShortlistDetails||this.setShow} className="nav-item ">Short List</div>
                    <div onClick={this.state.payid&&this.setShowComplain||this.setShow} className="nav-item ">
                    Complain
                    </div>
                    <div onClick={this.state.payid&&this.setShowRating||this.setShow} className="nav-item ">Rating</div>
                </div>
                    <div className="detailsec">
                    <div className="midcontainer">
                    <lable className="lablestyle">Can Work as  : {this.state.workAs}</lable>
                    <lable className="lablestyle">Expected Salary : {this.state.salary}</lable>
                    <lable className="lablestyle">Specialization : {this.state.provider.specialization||""}</lable>
                    <lable className="lablestyle">Experiences : {this.state.ex1+" | "+this.state.ex2+" | "+this.state.ex3+" | "+this.state.ex4}</lable>
                    <lable className="lablestyle">Details : {this.state.details}</lable>
                    </div>
                    {this.state.unlockContact&&<div className="botsec">
                    
                    <lable className="lablestyle">Email Address  : {this.state.provider.email} </lable>
                    <lable className="lablestyle">Mobile Number :{this.state.provider.mobile}</lable>
                    <lable className="lablestyle">Mobile Number :{this.state.provider.mobile}</lable>
                    <lable className="lablestyle">Address :{" "+this.state.provider.address1+", "+this.state.provider.address2+", "+this.state.provider.address3}</lable>

                </div>}

                </div>
                    </div>
                    
               
                
                
                <Modal clickHandler={this.updateContactDetails} show={this.state.show} close={this.closeModalHandler} />
                <Rating clickHandler={this.updateRatingDetails} show={this.state.showRating} close={this.closeModalHandler} />
                <Complain clickHandler={this.updateComplainDetails} show={this.state.showComplain} close={this.closeModalHandler} />
                <Shortlist clickHandler={this.updateShortlistDetails} show={this.state.showShortlist} close={this.closeModalHandler} />
            </div>
         );
    }


    updateShortlistDetails=(Shortlist)=>{
        let r=localStorage.getItem("email");
        let payload={

            job:{
                id:this.state.id
            },
            receiver:{
                email:r
            },
        }
    axios.post("/api/job/doShortlist",payload)
       .then(res=>{
           
        if(res.data){this.setShowShortlist({showShortlist:true});}
           }
).catch(
           err=> {console.log(err)}
       )
    }



    updateComplainDetails=(subject,complain)=>{
        let r=localStorage.getItem("email");
        let payload={

            subject:subject,
            complain:complain,
            payid:this.state.payid,
            provider:{
                email:this.state.email
            },
            receiver:{
                email:r
            },
           ratings:this.state.rating,
            status:true}

            axios.post("/api/job/doPayment",payload)
            .then(res=>{
                if(res.data){this.closeModalHandler({showRating:false,});}
             })
             .catch(
                err=> {console.log(err)}
            )

        }


    updateRatingDetails=(rating)=>{
        let r=localStorage.getItem("email");
        let payload={
            subject:this.state.subject,
            complain:this.state.complain,
            payid:this.state.payid,
            provider:{
                email:this.state.email
            },
            receiver:{
                email:r
            },
           ratings:rating,
            status:true}
            console.log(payload)
        axios.post("/api/job/doPayment",payload)
       .then(res=>{
           let provider=this.state.provider
            this.setState(res.data)
            this.setState({
                ...this.state,
                provider:provider
            })
           if(res.data){this.closeModalHandler({showRating:false,});}
        })
        .catch(
           err=> {console.log(err)}
       )


    }

    updateContactDetails=(details)=>{
        let r=localStorage.getItem("email");
        let payload={
            provider:{
                email:this.state.email
            },
            receiver:{
                email:r
            },
            job:{
                id:this.state.id
            },
            status:true,

            subject:this.state.subject,
         
            complain:this.state.complain
        }
       axios.post("/api/job/doPayment",payload)
       .then(res=>{
            let provider=this.state.provider
            this.setState(res.data)
            this.setState({
                ...this.state,
                provider:provider
            })


           if(res.data.payid){
            this.setState({payid:res.data.payid})
            this.setState({unlockContact:true})
            this.closeModalHandler({show:false});
           }
       }).catch(
           err=> {console.log(err)}
       )
       
    }
}
 
export default Preview;