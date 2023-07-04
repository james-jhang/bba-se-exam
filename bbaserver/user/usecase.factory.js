const ListAllUsers = require("./usecase/query/list-all-users.usecase")

const { getUserRepository } = require('./repository.factory')

exports.ListAllUsersUseCase = function ListAllUsersUseCase() {
    return new ListAllUsers(getUserRepository())
}

