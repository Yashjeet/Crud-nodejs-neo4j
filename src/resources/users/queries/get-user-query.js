module.exports = class GetUserQuery {
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
        return user{.*}'
    }

    transform(record) {
        return record.get('user')
    }
}