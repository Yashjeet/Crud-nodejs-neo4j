const express = require('express');
const router = express.Router();

const CreateUserApi = require('./apis/create-user-api');
const UpdateUserApi = require('./apis/update-user-api');
const GetUserApi = require('./apis/get-user-api');
const DeleteUserApi = require('./apis/delete-user-api');

router.post('', CreateUserApi.post);
router.put('/:userId', UpdateUserApi.update);
router.get('/:userId', GetUserApi.get);
router.delete('/:userId', DeleteUserApi.delete);
module.exports = router;
