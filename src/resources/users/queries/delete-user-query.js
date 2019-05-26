module.exports = class DeleteUserQuery {
    constructor(userId) {
        this.details = {
            id: userId
        }
    }

    parameter() {
        return this.details;
    }

    get() {
        return 'match(user:User{id:$id})\
        detach delete user\
        return user{.*}'
    }

    transform(record) {
        return record.get('user')
    }
}