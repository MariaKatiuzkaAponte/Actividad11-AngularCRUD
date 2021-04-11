const { countDocuments } = require('../models/Registro')
const Registro = require('../models/Registro')

/* Crear Usuario, registrarse*/

exports.create = (req, res) => {
 
    const nRegistro = new Registro({     

        nombre: req.body.nombre,  
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
        clave: req.body.clave

    })

    nRegistro.save().then(   

       data =>{
           res.send(data)   
       }
       ).catch(

        error =>{
            res.status(500).send({
                message: error.message || 'Error al registrarse'
            })
        }
       )

}

/* Para listar */

exports.findAll = (req, res) =>{  
    Registro.find({ })
   
    .then((data)=>{
        res.send(data)
    }) .catch((err)=>{
        res.status(500).send({
            message: "Hubo un error en el servidor"
        })
    })
   }
   
   
   /* Para buscar uno en especifico */
   
   exports.findOne = (req, res) =>{
       const id = req.params.id 
       Registro.findById(id)
       .then((data)=>{
           if(!data) {
               res.status(404).send({message: "No se encontro el usuario con el id" + id})
           } else {
               res.send(data)
           }
       })
       .catch((err)=>{
           res.status(500).send({message: "error en el servidor"})
       })
   }
   

   /* Para actualizar */

   exports.update = (req, res) => {
    const id = req.params.id
    if(!req.body){
        return res.status(400).send({message: "El cuerpo de la petición no puede ir vacio"})
    } 
    Registro.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede editar un usuario inexistente"})
        } else {
            res.send({message: "El usuario se ha actualizado"})
        }
    }) .catch ((err)=> {
        res.status(500). send({message: "Hubo un problema en el servisor"})

    })
}
   
/* Eliminar */

exports.delete = (req,res) =>{
    const id = req.params.id 

    Registro.findByIdAndRemove(id)
    .then ((data) =>{
        if(!data){
            res.status(404).send({message: "No se puede eliminar el usuario porque no se encontró"})
        } else {
            res.send({message: "Se eliminó el usuario exitosamente"})
        }
    }) 
    .catch((error) =>{
        res.status(500).send({message: "Hay un problema en el servidor"})
    })
}