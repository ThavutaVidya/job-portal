import express from 'express'

import { changeJobApplicantStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router=express.Router()

//Register a company
router.post('/register',upload.single('image'),registerCompany)

//Company login
router.post('/login',loginCompany)

//Get Company data
router.get('/company',protectCompany,getCompanyData)

//Post a job
router.post('/post-job',protectCompany,postJob)

//Get Applicants data Of Company
router.get('/applicants',protectCompany,getCompanyJobApplicants)

//Get Company Job List
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

//Change Applicant Status
router.post('/change-status',protectCompany,changeJobApplicantStatus)

//Change Applicants Visibility
router.post('/change-visibility',protectCompany,changeVisibility)

export default router