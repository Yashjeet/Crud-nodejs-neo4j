
const db = require('../../../database/repository');
const GetUserQuery = require('../queries/get-user-query.js');

module.exports.get = async (req, res, next) => {
    const { userId } = req.params;
    await db.execute(new GetUserQuery(userId)).then((response) => {
        res.send({
            status: true,
            message: 'Successfully get user!',
            entity: response
        });
    }).catch(error => {
        next(error);
    });
}