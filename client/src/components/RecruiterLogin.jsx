import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const RecruiterLogin = () => {
  const [state,setState]=useState('Login')
  const [name,setName]=useState('')
  const [passward,setPassward]=useState('')
  const [email,setEmail]=useState('')
  const [image,setImage]=useState(false)
  const [isTextDataSubmitted,setIsTextDataSubmitted]=useState(false)
  const{setShowRecruiterLogin}=useContext(AppContext)
  const onSubmitHandler=async(e)=>{
    e.preventDefault()
    if(state==='Sign Up' && !isTextDataSubmitted){
      setIsTextDataSubmitted(true)
    }
  }
  useEffect(()=>{
    document.body.style.overflow='hidden'
    return ()=>{
      document.body.style.overflow='unset'
    }
  },[])
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex  justify-center items-center'>
      <form onSubmit={onSubmitHandler} className='bg-white relative p-10 rounded-xl text-slate-500'>
        <h2 className='text-center text-2xl font-medium text-neutral-700'>Recruiter {state}</h2>
        <p className='text-sm'>Welcome back!Please sign in to continue</p>
        {state==='Sign Up' && isTextDataSubmitted?
        <>
        <div className='flex items-center gap-4 my-10'>
          <label htmlFor="image">
            <img className='rounded-full w-16' src={image ? URL.createObjectURL(image)
            :assets.upload_area} alt="" />
            <input onChange={e=>setImage(e.target.files[0])} type="file" id='image' hidden />
          </label>
          <p>Upload Company <br/> logo</p>
        </div>
        </>:
        <>
        {state!=='Login'&&(
          <div className='border  px-4 py-2 rounded-full flex items-center gap-2 mt-5'>
          <img src={assets.person_icon} alt="" />
          <input className='outline-none text-sm' onChange={e=>setName(e.target.value)} value={name} type="text" placeholder='Company Name' required />
        </div>
        )}
        
        <div className='border  px-4 py-2 rounded-full flex items-center gap-2 mt-5'>
          <img src={assets.email_icon} alt="" />
          <input className='outline-none text-sm' onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder='EmailId' required />
        </div>
        <div className='border  px-4 py-2 rounded-full flex items-center gap-2 mt-5'>
          <img src={assets.lock_icon} alt="" />
          <input className='outline-none text-sm' onChange={e=>setPassward(e.target.value)} value={passward} type="password" placeholder='Passward' requires />
        </div>
        
        </>
        }
        {state==='Login' && <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot passward?</p>}
        
        <button type='submit' className='bg-blue-600 text-white py-2 rounded-full w-full mt-4'>
          {state==='Login'?'login':isTextDataSubmitted ?'create account':'Next'}
        </button>
        {
          state==='Login'?
          <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>:
          <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>
        }
        <img src={assets.cross_icon} onClick={e=>setShowRecruiterLogin(false)} className='absolute top-5 right-5 cursor-pointer' alt="" />
        
      </form>
    </div>
  )
}

export default RecruiterLogin
