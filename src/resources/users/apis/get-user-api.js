const db = require('../../../database/repository');
const GetUserQuery = require('../queries/get-user-query.js');
module.exports.get = function (req, res, next) {

    const { userId } = req.params;
    const result = db.execute(new GetUserQuery(userId), (error, result) => {
        if (error) {
            res.send({
                status: false,
                entity: error,
                message: 'something went wrong'
            })
        }
        res.send({ status: true, entity: result, message: 'Successfully get user!' })
    });
}