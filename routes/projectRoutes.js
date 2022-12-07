var express = require("express")
var router = express.Router();
let controller = require("../controller/projectController")
//  let projectCollection;
// setTimeout(()=>{
//     projectCollection = client.mongoClient.db().collection("Projects");
// },2000)
// const insertprojects = (project, callback) =>{
//     projectCollection.insert(project,callback);
// }
// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }

router.post('/',(req,res)=>{
    controller.projectController.createProject(req,res)
    // console.log("Your Data", req.body)
    // var newproject = req.body;
    // insertprojects(newproject,(err,result)=>{
    //     if(err){
    //         res.json({statusCode : 400, message: err})
    //     }
    //     else
    //     {
    //         res.json({statusCode : 200, message: "Success" , data: result})
    //     }
    // })
})
router.get('/',(req,res) => {
    controller.projectController.RetrieveProject(req,res)

    // getProjects((err, result)=>{
    //     if(err)
    //     {
    //         res.json({statusCode : 400, message: err})
    //     }
    //     else
    //     {
    //         res.json({statusCode : 200, message: "Success" , data: result})
    //     }
    // })
})
module.exports = router;