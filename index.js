import  express  from "express"
import router from "./routes/user-route.js";

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello From Home!");
});

app.listen(2000,()=>{console.log("Server is Running !")});