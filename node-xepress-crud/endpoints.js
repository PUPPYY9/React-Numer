module.exports = function (app) {
	
    app.get('/users/:id', (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'Endpoint para obter um usuário.'
        // #swagger.parameters['id'] = { description: 'ID do usuário.' }

        /* #swagger.parameters['filtro'] = {
	       in: 'query',
               description: 'Um filtro qualquer.',
               type: 'string'
        } */
        const filtro = req.query.filtro

        return res.status(404).send(false)

    })

}