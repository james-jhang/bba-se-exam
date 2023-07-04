const UseCase = require("../usecase");

module.exports = class ListAllUsers extends UseCase {
    constructor(userRepository) {
        super();
        this.userRepository = userRepository;
    }

    execute(input) {
        return this.userRepository.findAll();
    }
}