const express = require('express');
const env = require('./config/envConfig');
const connect = require('./config/db');
const cors = require('cors')



const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes')



const app = express();


// =========  DB Connection ================
connect();
// =========== End of DB Connection ============


// ================ cors add to avoid cors error in frontend ============
app.use(cors());
// ================ end of cors =========================================

// ============== Middleware for JSON Data get===========
app.use(express.json())
// ========== End of Middleware for JSON Data get==========



app.get("/",(req,res)=>{
    res.json({msg:"Welcome to Store"})
})


// =========== All Routes ============
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
// ========== End of All Router ==========




const port = env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Your Server is running at port number :  ${port}`);
})