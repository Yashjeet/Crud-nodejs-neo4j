module.exports = class DeleteUserQuery {
    constructor(userId, userDetails) {
        this.details = {
            id: userId,
            userDetails
        }
    }

    parameter() {
        return this.details;
    }

    get() {
        return 'match(user:User{id:$id})\
        set user.name = $userDetails.name,\
        user.email = $userDetails.email,\
        user.mobile = $userDetails.mobile\
        return user{.*}'
    }

    transform(record) {
        return record.get('user')
    }
}