import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate,NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Dashboard = () => {
  const navigate=useNavigate()
  const {companyData,setCompanyData,setCompanyToken}=useContext(AppContext)
  //function to logout for company
  const logout=()=>{
    setCompanyToken(null)
    localStorage.removeItem('companyToken')
    setCompanyData(null)
    navigate('/')

  }

  useEffect(()=>{
    if(companyData){
      navigate('/dashboard/manage-jobs')
    }
  },[companyData])
  return (
    <div className='min-h-screen'>
      {/* Recruiter Navbar*/}
      <div className='shadow py-4'>
        <div className='px-5 flex items-center justify-between'>
          <img onClick={e=>navigate('/')} className='max-sm:w-32 cursor-pointer' src={assets.logo} alt="" />
          {
          companyData &&(
          <div className='flex items-center gap-3'>
          <p className='max-sm:hidden'>Welcome, {companyData.name}</p>
          <div className='relative group'>
            <img className='w-8 rounded-full border ' src={companyData.image} alt="" />
            <div className='absolute hidden group-hover:block top-0 right-0 pt-12 z-10 text-black rounded '>
            <ul className='list-none p-2 m-0 rounded-md bg-white text-sm border'>
              <li onClick={logout} className='py-1 px-2 pr-10 cursor-pointer'>Logout</li>
            </ul>
            </div>
            
          </div>
        </div>)
        }
          
        </div>
      </div>
      <div className='flex items-start'>
        {/* sidebar*/ }
        <div className='inline-block min-h-screen border-r-2'>
          <ul className='flex flex-col items-start pt-5 text-gray-800'>
            <NavLink className={({isActive})=>`flex items-center p-3 max-sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/add-job'}>
            <img className='min-w-4' src={assets.add_icon} alt="" />
            <p className='max-sm:hidden'>Add Job</p>
            </NavLink>

            <NavLink className={({isActive})=>`flex items-center p-3 max-sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/manage-jobs'}>
            <img className='min-w-4' src={assets.home_icon} alt="" />
            <p className='max-sm:hidden'>Manage Jobs</p>
            </NavLink>

            <NavLink className={({isActive})=>`flex items-center p-3 max-sm:px-6 gap-2 w-full hover:bg-gray-100 ${isActive && 'bg-blue-100 border-r-4 border-blue-500'}`} to={'/dashboard/view-applications'}>
            <img className='min-w-4' src={assets.person_tick_icon} alt="" />
            <p className='max-sm:hidden'>View Applications</p>
            </NavLink>
            
          </ul>
        </div>
        <div className='flex-1 h-full p-2 sm:p-5'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
