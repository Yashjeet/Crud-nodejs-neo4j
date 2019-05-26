const db = require('../../../database/repository');
const uuid = require('node-uuid');
const CreateUserQuery = require('../queries/create-user-query.js');
module.exports.post = function (req, res, next) {

    const id = uuid.v1();
    const { name, email, mobile } = req.body;
    const result = db.execute(new CreateUserQuery(id, {
        name, email, mobile
    }), (error, result) => {
        if (error) {
            console.log(error)
            res.send({
                status: false,
                entity: error,
                message: 'something went wrong'
            })
        }
        res.send({ status: true, entity: result, message: 'Successfully saved' })
    });
}