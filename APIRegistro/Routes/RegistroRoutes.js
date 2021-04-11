module.exports = (app) =>{

    const registro = require('../controller/RegistroControler')

    app.post('/registro/create', registro.create)
    app.get('/registro/get', registro.findAll)  
    app.get('/registro/get/:id', registro.findOne)
    app.put('/registro/update/:id', registro.update)
    app.delete('/registro/delete/:id', registro.delete)

}
