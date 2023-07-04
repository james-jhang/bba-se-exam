const UserRepository = require("../../usecase/user.repository");

module.exports = class InMemoryUserRepository extends UserRepository {
    constructor() {
        super()
        this.users = []
    }

    findAll() {
        return this.users;
    }
    findByID(id) {
        return this.users.find(user => user.id === id);
    }
    save(users) {
        this.users = users;
    }
    delete(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
}