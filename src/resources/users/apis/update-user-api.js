const db = require('../../../database/repository');
const UpdateUserQuery = require('../queries/update-user-query.js');
module.exports.update = async (req, res, next) => {

    const { userId } = req.params;
    const { name, email, mobile } = req.body;
    const result = await db.execute(new UpdateUserQuery(userId, {
        name, email, mobile
    })).then(response => {
        res.send({ status: true, entity: response, message: 'Successfully updated user!' })
    }).catch(error => {
        next(error)
    });
}