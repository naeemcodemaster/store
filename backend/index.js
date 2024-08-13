const express = require('express');
const env = require('./config/envConfig');
const connect = require('./config/db');
const userRoutes = require('./routes/users/userRoutes');
const bcrypt = require('bcrypt');
const app = express();


// =========  DB Connection ================
connect();
// =========== End of DB Connection ============




// ============== Middleware for JSON Data get===========
app.use(express.json())
// ========== End of Middleware for JSON Data get==========



app.get("/",(req,res)=>{
    res.json({msg:"Welcome to Store"})
})


// =========== User Routes ============
app.use('/api',userRoutes);
// ========== End of User Router ==========




const port = env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Your Server is running at port number :  ${port}`);
})