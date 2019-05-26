module.exports = class CreateUserQuery {
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
        return 'merge(user:User{mobile:$userDetails.mobile})\
        on create set user.id = $id\
        set user.name = $userDetails.name,\
        user.email = $userDetails.email\
        return user{.*}'
    }

    transform(record) {
        return record.get('user')
    }
}