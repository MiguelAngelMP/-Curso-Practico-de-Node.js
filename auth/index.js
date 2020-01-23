const jwt = require('jsonwebtoken');
const config = require('../config')
const secret = config.jwt.secret;

function sign(data) {
    return jwt.sign(data, secret)
}

function verify(params) {
    return jwt.verify(data, secret)
}

const chect = {
    own: function (req, owne) {
        const decoded = decodedHeader(req)
        console.log(decoded)
    },



}

function getToken(auth) {
    if (!auth) {
        throw new Error('No vine token')
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw new Error('Formato invalido ')
    }
    let token = auth.replace('Bearer', '');
    return token;

}

function decodedHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}
module.exports = {
    sign
};