const jwt = require('jsonwebtoken');

function sign(data) {
    return jwt.sign(data, 'secrero')
}
module.exports = {
    sign
};