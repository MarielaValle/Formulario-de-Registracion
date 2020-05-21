

const userController = require('../controllers/userController'); 
 

let userController ={
 user: function(req,res){
     let usuario = searchByEmail(req.params.email);
     res.render('user',{usuario})

    },

    

    get_registerMostrar: function(req,res){
     

    },

    post_registerCrear: function(req,res){
     

    },


    profileId: function(req,res){

    },
}
module.exports=userController;

searchByEmail: function(email){
    let archivoJson = readJSONfile();
    let user = null;
    archivoJson.forEach((elem, i) => {
      if (elem["email"] == email) {
         user = elem;
      }
    });
    return user; // si no lo encuentra devuelve null
 },
 Lee el archivo Json
 function readJSONfile() {
      return JSON.parse(fs.readFileSync(userController.archivo, 'utf-8'));
 }
 