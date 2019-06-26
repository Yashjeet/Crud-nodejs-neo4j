const db = require('../../../database/repository');
const DeleteUserQuery = require('../queries/delete-user-query.js');
module.exports.delete = async (req, res, next) => {

    const { userId } = req.params;
    const result = await db.execute(new DeleteUserQuery(userId))
        .then(response => {
            res.send({ status: true, entity: response, message: 'Successfully deleted user!' })
        })
        .catch(error => {
            next(error)
        });
}