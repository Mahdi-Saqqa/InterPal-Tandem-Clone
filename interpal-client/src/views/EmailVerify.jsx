import axiosInstance from '../Config/axiosInstance ';
import React from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailVerify = () => {
    const [code,setCode] = useState('');
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({code:code,token:localStorage.getItem('token'),id:localStorage.getItem('id')});
        axiosInstance.post('/users/activate', {code:code,token:localStorage.getItem('token'),id:localStorage.getItem('id')})
        .then((response)=>{
            console.log(response);
            if(response.status === 200){
                window.location.href = '/app';
              }
        }).catch((err)=>{
            console.log(err);
        })
    }
    const handleResend = (e)=>{
      e.preventDefault();
      axiosInstance.post('/users/resend', {token:localStorage.getItem('token'),id:localStorage.getItem('id')})
      .then((res)=>{
        console.log(res.data);
        let user = res.data;
        console.log("sending email");
        return emailjs.send('service_4oj1jfh', 'template_fdccufu', {
            user_code: user.activationToken,
            user_name: user.firstName + " " + user.lastName,
            toEmail: user.email,
        }, 'pHlf1MseO9mIByVr6');
    })
    .then((result) => {
        console.log('email sent');
        console.log(result.text);
    
      }).catch((err)=>{
          console.log(err);
      })
    }


  return (
        <div className="card  text-center ">
        <h1>Verify your Email Adress</h1>
        <p>Check your email for a link to verify your email address. If it doesn’t appear within a few minutes, check your spam folder.</p>
        <p>Didn’t receive a link? <button className=" btn-link" onClick={handleResend}>Resend</button>
        </p>
        <form onSubmit={handleSubmit}>
        <label className="col-3">Activation Code:</label>

        <div className="form-group">
            <input
            value={code}
            onChange={(e)=>setCode(e.target.value)}

              className="col-9 m-auto"
              type="text"
              name="Activation Code"
              placeholder="Enter your Code"
              pattern="[1-9]{1}[0-9]{5}"
              required
            />
          </div>
        </form>
        </div>

  )
}

export default EmailVerify;