import { DirectoryPath, NewDirectoryPath } from "../AppConfig";
import * as path from "path";
import * as fs from "fs";

const multer = require("multer");

var storage = multer.diskStorage({
  destination: async function (req, file, cb)
  {
      let dir = DirectoryPath;
          
      if (!fs.existsSync(dir)) 
      {
          fs.mkdirSync(dir, { recursive: true })
      }
      
      try
      {
          cb(null, dir);
      }
      catch (error)
      {
          cb(null, dir);
      }
  
  },
  filename: function (req, file, cb)
  {
      cb(null, file.originalname);
  },
});

export var upload = multer({ storage: storage });

export class FileController {
  //async method to create directory
  private async CreateDirectory(directoryPath: string) {

    try{
      if(!fs.existsSync(directoryPath)){
        fs.mkdirSync(directoryPath, {recursive: true});
      }
      return true;

    }
    catch(ex){
      console.error("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
      return false;
    }


  }

  //async method to create file
  async CreateFile(req, res){

    try {

      let fileName: string = req.body.FileName;
      let fileContent: string =req.body.Data;
      let directoryPath: string = DirectoryPath;
      let fileFullName: string = path.join(directoryPath, fileName);

      let directoryExists: boolean = await this.CreateDirectory(DirectoryPath);

      if(directoryExists){

        fs.writeFileSync(fileFullName, fileContent);
        res.status(200).send("File write Successfully!!");

      }else{
        res.status(500).send("Directory not created!!");
      }
    }
    catch(ex) {
      console.error("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
      res.status(500).send("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
    }
  }
// async method to rename file
  async RenameFile(req, res){
    try {

      let oldFileName: string = req.body.OldFileName;
      let newFileName: string =req.body.NewFileName;
      let directoryPath: string = DirectoryPath;
      let oldFileFullName: string = path.join(directoryPath, oldFileName);
      let newFileFullName: string = path.join(directoryPath, newFileName);


      if(fs.existsSync(oldFileFullName)){

        fs.renameSync(oldFileFullName, newFileFullName);

        res.status(200).send("File rename Successfully!!");

      }else{
        res.status(404).send("File not Found!!");
      }
    }
    catch(ex) {
      console.error("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
      res.status(500).send("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
    }
  
  }

  // async method to append file
  async AppendFile(req, res){
    try {

      let fileName: string = req.body.FileName;
      let data: string =req.body.Data;
      let directoryPath: string = DirectoryPath;
      let fileFullName: string = path.join(directoryPath, fileName);
      


      if(fs.existsSync(fileFullName)){

        fs.appendFileSync(fileFullName, data);

        res.status(200).send("File append successful!");

      }else{
        res.status(404).send("File not Found!!");
      }
    }
    catch(ex) {
      console.error("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
      res.status(500).send("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
    }
  
  }


  // async method to read file
  async ReadFile(req, res){
    try {

      let fileName: string = req.query.FileName;
      let directoryPath: string = DirectoryPath;
      let fileFullName: string = path.join(directoryPath, fileName);
      


      if(fs.existsSync(fileFullName)){

        let fileData = fs.readFileSync(fileFullName);

        res.status(200).send(fileData);

      }else{
        res.status(404).send("File not Found!!");
      }
    }
    catch(ex) {
      console.error("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
      res.status(500).send("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
    }
  
  }
 // async method to delete file
 async DeleteFile(req, res){
  try {

  
    let directoryPath: string =  DirectoryPath;
    
    


    if(fs.existsSync(directoryPath)){

     
        fs.rmdirSync(directoryPath, {recursive: true});

        res.status(200).send("file Deleted successfully");
     


    }else{
      res.status(404).send("File not Found!!");
    }
  }
  catch(ex) {
    console.error("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
    res.status(500).send("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
  }

}
   // async method to move file
   async MoveFile(req, res){
    try {

      let fileName: string = req.query.FileName;
      let oldDirectoryPath: string = DirectoryPath;
      let newDirectoryPath: string = NewDirectoryPath;
      let oldFileFullName: string = path.join(oldDirectoryPath, fileName);
      let newFileFullName: string = path.join(newDirectoryPath, fileName);
      


      if(fs.existsSync(oldFileFullName)){

        let directoryExists: boolean = await this.CreateDirectory(newDirectoryPath);

        if(directoryExists){
          fs.renameSync(oldFileFullName,newFileFullName);

          res.status(200).send("file Moved successfully");
        }else{
          res.status(500).send("Directory not created!!");
        }
        

      }else{
        res.status(404).send("File not Found!!");
      }
    }
    catch(ex) {
      console.error("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
      res.status(500).send("Message:" + ex.message + ":: stacktrack : " + ex.stacktrace);
    }
  
  }

  async UploadFile(req, res) {

    let fileName: string = req.file.originalname;
    let directoryPath: string = DirectoryPath;
    let fileFullName: string = path.join(directoryPath, fileName);

    if (fs.existsSync(fileFullName)) {
        res.status(200).send("File upload successful!");
    }
    else {
        res.status(500).send("File not uploaded!");
    }        
}

 
}
