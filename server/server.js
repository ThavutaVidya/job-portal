import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import  connectDB  from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebHooks } from './controllers/webhooks.js'

const app=express()
//connect db
await connectDB()

//middleware

app.use(cors())
app.use(express.json())



//route
app.get('/',(req,res)=>{
  res.send('api is working')
})

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhooks',clerkWebHooks)

const PORT=process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);

app.listen(PORT,()=>{
  console.log(`server is running ON ${PORT}`)
})

//mongodb+srv://Vidya:<db_password>@cluster0.mkblmjw.mongodb.net/?