const express=require("express");
const bodyParse=require("body-parser");
const app=express();
const path=require("path");
const webpush=require("web-push");

app.use(bodyParse.json());
app.use(express.static(path.join(__dirname,"client")));
const publicKey="BCCRzXvR-g-Z4y6iPke5LQhUPbTq4PFpdBffkhTlFIY_jDR0aw08UVAipdR1-_YVTn_VWi7tRIvTu6m3DXEgrMo";
const privateKey="Stqd-92-8TI74ZCtel4a7iC5UXjdESYD6env7uWY7PY";
webpush.setVapidDetails(
    'mainto:jitulteron9@gmail.com',
    publicKey,privateKey
    );
    app.post("/subscribe",(req,res)=>{
        const subscription=req.body;
        res.status(200).json({});
        const payload=JSON.stringify({title:'By JT Blogs 😊!'});
        webpush.sendNotification(subscription,payload
            ).catch(err=>console.log(err)) 
    })
    const PORT=process.env.PORT||4000;
    app.listen(PORT,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("running on port",PORT);
        }
    })