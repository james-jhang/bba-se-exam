const InMemoryUserRepository = require("./adapter/repository/in-memory-user.repository")

var userRepository = null;
if (process.env.NODE_ENV === 'development') {
    userRepository = new InMemoryUserRepository();
} else if (process.env.NODE_ENV === 'production') {
    // userRepository = new MySQLUserRepository();
}

exports.getUserRepository = function getUserRepository() {
    return userRepository;
}