import  express  from "express"
import router from "./routes/user-route.js";
import mongoose from "mongoose";

const app = express();

app.use(router);

mongoose.connect('mongodb+srv://admin:Shivam1234@blogkaro.j6psaza.mongodb.net/?retryWrites=true&w=majority')
.then(()=> app.listen(2000))
.then(()=> console.log('Database is connected to server !'))
.catch((err)=> console.log(err));

