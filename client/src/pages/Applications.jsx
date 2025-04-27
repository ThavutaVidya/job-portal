import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'
import Footer from '../components/Footer' 

const Applications = () => {
  const [isEdit,setIsEdit]=useState(false)
  const [resume,setResume]=useState(null)
  return (
    <>
    <Navbar/>
    <div className='container px-4 2xl:px-20 my-10 mx-auto min-h-[65vh]'>
      <h2 className='text-xl font-semibold'>Your Resume</h2>
      <div className='flex gap-2 mb-6 mt-3'>
        {
          isEdit?
          <>
          <label htmlFor="resumeUpload" className='flex items-center'>
            <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2'>Select Resume</p>
            <input id="resumeUpload" onChange={e=>setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
            <img src={assets.profile_upload_icon} alt="" />
          </label>
          <button className='bg-green-100 border border-green-400 px-4 py-2 rounded-lg ' onClick={()=>setIsEdit(false)}>Save</button> 
          </>:
          <div className='flex gap-2'>
            <a className='text-blue-600 bg-blue-100 px-4 py-2 rounded-lg' href="">Resume</a>
            <button onClick={()=>setIsEdit(true)} className='text-gray-500 border border-gray-300 px-4 py-2 rounded-lg'>Edit</button>
          </div>
        }
      </div>
      <h2 className='text-xl font-semibold mb-4'>Jobs Applied</h2>
      <table className='min-w-full bg-white border rounded-lg'>
        <thead>
          <tr>
            <th className='px-4 py-3 border-b text-left '>Company</th>
            <th className='px-4 py-3 border-b text-left '>Job Title</th>
            <th className='px-4 py-3 border-b text-left max-sm:hidden'>Location</th>
            <th className='px-4 py-3 border-b text-left max-sm:hidden'>Date</th>
            <th className='px-4 py-3 border-b text-left '>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobsApplied.map((job,index)=>true?(
            <tr>
              <td className='flex items-center px-4 py-3 gap-2 border-b'>
                <img className='w-8 h-8' src={job.logo} alt="" />
                {job.company}
              </td>
              <td className='px-4 py-2 border-b'>{job.title}</td>
              <td className='px-4 py-2 border-b max-sm:hidden'>{job.location}</td>
              <td className='px-4 py-2 border-b max-sm:hidden'>{moment(job.date).format('ll')}</td>
              <td className='px-4 py-2 border-b'>
                <span className={`${job.status==='Accepted'?'bg-green-100':job.status==='Rejected'?'bg-red-100':'bg-blue-100'} px-4 py-1.5 rounded`}>
                  {job.status}
                </span></td>
            </tr>
          ):(null))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  )
}

export default Applications
