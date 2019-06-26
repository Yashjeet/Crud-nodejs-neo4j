const db = require('../../../database/repository');
const uuid = require('node-uuid');
const CreateUserQuery = require('../queries/create-user-query.js');

module.exports.post = async (req, res, next) => {

    const id = uuid.v1();
    const { name, email, mobile } = req.body;
    const result = await db.execute(new CreateUserQuery(id, {
        name, email, mobile
    })).then(response => {
        res.send({ status: true, entity: response, message: 'Successfully saved' });
    }).catch(error => {
        next(error);
    })
}