let projectModel =require('../model/project')
// let client = require("../dbConnect")
// let projectCollection;

// setTimeout(()=>{
//     projectCollection = client.mongoClient.db().collection("Projects");
// },2000)
// const insertprojects = (project, callback) =>{
//     projectCollection.insert(project,callback);
// }
// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }
// Create Project
const createProject = (req,res)=>{
    console.log("New Project", req.body)
    var newproject = req.body;
    projectModel.insertprojects(newproject,(err,result)=>{
        if(err){
            res.json({statusCode : 400, message: err})
        }
        else
        {
            res.json({statusCode : 200, message: "Success" , data: result})
        }
    })
}
// Retrieve Project
const RetrieveProject = (req,res) =>{
    projectModel.getProjects((err, result)=>{
        if(err)
        {
            res.json({statusCode : 400, message: err})
        }
        else
        {
            res.json({statusCode : 200, message: "Success" , data: result})
        }
    })
}
module.exports = {RetrieveProject, createProject}