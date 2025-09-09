const register = async () => {
    res.send('User registered');
}

const login = async () => {
    res.send('User logged in');
}

const getCurrentUser = async () => {
    res.send('Current user details');
}

module.exports = {
    register,
    login,
    getCurrentUser
};