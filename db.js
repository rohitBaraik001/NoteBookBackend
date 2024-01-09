const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://rohitdaan20:yKuLk80Xrh8KiTBTFinish@inotebook-db.cqmaqek.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected to mongodb successfully...");
}).catch(()=>{
    console.log("connection with mongodb failed...")
})
