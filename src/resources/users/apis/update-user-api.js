const db = require('../../../database/repository');
const UpdateUserQuery = require('../queries/update-user-query.js');
module.exports.update = function (req, res, next) {

    const { userId } = req.params;
    const { name, email, mobile } = req.body;
    const result = db.execute(new UpdateUserQuery(userId, {
        name, email, mobile
    }), (error, result) => {
        if (error) {
            res.send({
                status: false,
                entity: error,
                message: 'something went wrong'
            })
        }
        res.send({ status: true, entity: result, message: 'Successfully updated user!' })
    });
}