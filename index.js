const express = require("express")
const cors = require("cors")
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// const CategoryRouter = require('./routes/Categoryroutes')
// const SubcateRouter = require('./Routes/Subcateroutes')
// const db = require("./Connection/Database")



const app = new express();
const catemodel = require('./model/Categorydetails')
const subcatemodel = require('./model/Subcategorydetails')
const itemmodel = require("./model/Itemdetails");
const data2model = require("./model/Loginmodel");
const data3model = require("./model/UserLogin");
const ordermodel= require("./model/Orderdetails");
const signupmodel=require("./model/Loginsignupdetails")

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.listen(3005, (request, response) => {
    console.log("port is running in 4005")

})

// app.use("/c", CategoryRouter)

// app.use("/s", SubcateRouter)


app.get('/', (request, response) => {
    response.send("hai")

})
app.post('/new', (request, response) => {
    console.log(request.body)
    new catemodel(request.body).save();
    response.send("Record Successfully Saved")

})

app.post('/unew', (request, response) => {
    console.log(request.body)
    new ordermodel(request.body).save();
    response.send("Record Successfully Saved")

})

app.post('/lnew', (request, response) => {
    console.log(request.bosy)
    new signupmodel(request.body).save();
    response.send("Record Successfully Saved")
})



app.post('/cnew', (request, response) => {
    console.log(request.body)
    new subcatemodel(request.body).save();
    response.send("Record Successfully Saved")

})
// app.post('/inew',(request,response)=>{
//     console.log(request.body)
//     new itemmodel(request.body).save();
//     response.send("Record Successfully Saved")
// })
app.get("/categoryview", async (request, response) => {
    var data = await catemodel.find();
    response.send(data);
});
app.get("/subview", async (request, response) => {
    var data = await subcatemodel.find();
    response.send(data);
})
app.get('/view', async (request, response) => {
    var data = await catemodel.find();
    response.send(data)
});
app.get('/views', async (request, response) => {
    var data = await subcatemodel.find();
    response.send(data)
});
app.get('/Orview', async(request,response)=>{
    var data = await ordermodel.find();
    console.log(data)
    response.send(data)
    
})

app.get('/iview', async (request, response) => {
    var data = await itemmodel.find();
    response.send(data)
})
app.put('/edit/:id', async (request, response) => {
    let id = request.params.id
    await catemodel.findByIdAndUpdate(id, request.body)
    response.send("Data uploaded")
});
app.put('/edits/:id', async (request, response) => {
    let id = request.params.id
    await subcatemodel.findByIdAndUpdate(id, request.body)
    response.send("Data uploaded")
})
// app.put('/editi/:id',async(request,response)=>{
//     let id=request.params.id
//     await itemmodel.findByIdAndUpdate(id,request.body)
//     response.send("Data uploaded")
// })
app.put('/editi/:id', async (request, response) => {
    let id = request.params.id
    await itemmodel.findByIdAndUpdate(id, request.body)
    response.send("Data uploaded")
})
app.post('/inew', upload.single('image1'), async (request, response) => {
    try {
        const { Category, Subcategory, Description, Price } = request.body
        const newdata = new itemmodel({
            Category, Subcategory, Description, Price,
            image1: {
                data: request.file.buffer,
                contentType: request.file.mimetype,
            }
        })
        console.log(newdata);
        await newdata.save();
        response.status(200).json({ message: 'Record saved' });

    }
    catch (error) {
        response.status(500).json({ error: 'Internal Server Error' });

    }


})

app.post('/Loginsearch', async (request, response) => {
    const { username, password } = request.body;
    console.log(username, password)
    try {
        const user = await data2model.findOne({ username, password });
        if (user) { response.json({ success: true, message: 'Login Successfully' }); }
        else { response.json({ success: false, message: 'Invalid Username and email' }); }
    }
    catch (error) {
        response.status(500).json({ success: false, message: 'Error' })
    }
})
app.listen(4005, (request, response) => {
    console.log("Port ok")
})

app.post('/ULoginsearch', async (request, response) => {
    const { username, password } = request.body;
    console.log(username, password)
    try {
        const user = await data3model.findOne({ username, password });
        if (user) { response.json({ success: true, message: 'Login Successfully' }); }
        else { response.json({ success: false, message: 'Invalid Username and email' }); }
    }
    catch (error) {
        response.status(500).json({ success: false, message: 'Error' })
    }
})

app.get('/getoneitem/:id', (req, res) => {

    const { id } = req.params

    itemmodel.findById(id).then(data => {
        res.status(200).json({ success: true, message: "Item Found", data })
    })


})

app.listen(4006, (request, response) => {
    console.log("Port ok 4006")
})


app.post('/Login', async (request, response) => {
    const { name, password } = request.body;
    try {
        const user = await data3model.findOne({ name, password });
        if (user) { response.json({ success: true, message: 'Login Successfully' }); }
        else { response.json({ success: false, message: 'Invalid Username and email' }); }
    }
    catch (error) {
        response.status(500).json({ sucess: false, message: 'Error' })
    }
})
