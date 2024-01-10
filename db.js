const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://rohitdaan20:fvWDCryEGFkqPRrp@rohit.rbcfbt2.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected to mongodb successfully...");
}).catch(()=>{
    console.log("connection with mongodb failed...")
})

