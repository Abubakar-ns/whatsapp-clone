//importing
import express from "express";
import mongoose from "mongoose";
import Messages from './dbmessage.js';
import Pusher from "pusher";
//app config
const app=express();
const port=process.env.PORT || 9000;//is port par chalega

const pusher = new Pusher({
    appId: "1290268",
    key: "9fec16a8c13a6657df52",
    secret: "7479f7abe0aaa9ed011a",
    cluster: "ap2",
    useTLS: true
});

//middleware
app.use(express.json());  
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    next();
})
//database config
const connection_url='mongodb+srv://abubakar_whatsapp:69mxz44Zo2u45puE@cluster0.nb20t.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})
mongoose.connect(connection_url, {
    useUnifiedTopology: true , 
    useNewUrlParser: true ,
    useUnifiedTopology: true,
});
//   .then(()=> console.log("Now connected to MongoDB!"))
//   .catch(err=> console.error("Something went wrong", err));

 
const db=mongoose.connection;
db.once("open",()=>{
    console.log("DB Connected");

    const msgCollection=db.collection("messagecontents");
    //jaise hi collection change hogi
    const changeStream= msgCollection.watch();
    changeStream.on('change',(change)=>{
        console.log("A change occured",change);
        //important  
        if(change.operationType ==='insert'){
            const messageDetails=change.fullDocument;
            pusher.trigger('messages','inserted',
                {
                    name: messageDetails.name,
                    message: messageDetails.message,
                    timeStamp: messageDetails.timeStamp,
                    received: messageDetails.received,
                });
        }else{
            console.log("Error in trigerring pusher");
        }
    })
})
//??
//api routes
app.get('/',(req,res)=>res.status(200).send('hello world'));
app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){  
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})
app.post('/messages/new',(req,res)=>{
    const dbMessage=req.body;
    Messages.create(dbMessage,(err,data)=>{
        if(err){  
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})
//listener
app.listen(port,()=>console.log(`Listening on LocalHost:${port}`));


//69mxz44Zo2u45puE
//db aur api ke beech middleware
//pusher for realtime

 