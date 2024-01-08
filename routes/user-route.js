import express  from "express";

const router = express();

router.get('/',(req,res,next)=>{
    res.send("Hello From Home Route !");
});

export default router;