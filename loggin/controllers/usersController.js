let usersController ={
    
 users: function(req,res){
    let usuario={
        nombre:req.body.nombre,
        avatar:req.body.avatar,
        email:req.body.email,
        contraseña:req.body.contraseña,     
    }
 
    res.render('users',{usuario})

    },


}
 module.exports = usersController;

