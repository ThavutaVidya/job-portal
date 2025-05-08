import jwt from 'jsonwebtoken'
import Company from '../models/Company.js'

export const protectCompany = async(req,resizeBy,next)=>{
  const token=req.headers
  if(!token){
    return res.json({success:false,message:"not authorized,login again"})
  }
  try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    req.company=await Company.findById(decoded.id).select('-passward')
    next()
  } catch (error) {
    res.json({
      success:false,message:error.message
    })
  }
}