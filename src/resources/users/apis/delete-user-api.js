const db = require('../../../database/repository');
const DeleteUserQuery = require('../queries/delete-user-query.js');
module.exports.delete = function (req, res, next) {

    const { userId } = req.params;
    const result = db.execute(new DeleteUserQuery(userId), (error, result) => {
        if (error) {
            res.send({
                status: false,
                entity: error,
                message: 'something went wrong'
            })
        }
        res.send({ status: true, entity: result, message: 'Successfully deleted user!' })
    });
}