import express from 'express'
// import { PORT } from './config/config.js'
import AllRoutes from './routes/AllRoutes.js'
import cors from 'cors'
import Upload from 'express-fileupload'
import Path from 'path'
const app = express();

// project live process
let root = Path.join(Path.resolve()+"/dist")
// project live process



// for view assets folder files in "Front End"


app.use(express.static(Path.resolve()+"/assets"));

// localhost:3000/product_images/1.jpg

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// project live process
app.use(express.static(root))
// project live process


app.use(cors());
app.use(Upload());

app.use(AllRoutes);


// project live process
app.get('/{*splat}',(req,res)=>{
    res.sendFile("index.html",{root});

})



let PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", ()=>{
    console.log(process.env.SERVER_MSG, PORT);
})