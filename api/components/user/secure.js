const auth = require('../../../auth')

module.exports = function checkeAuth(action) {
    function middleware(req, res, next) {
        switch (action) {
            case 'update':
                const owner = req.boby.id;
                auth.check.Own(req, owner);
                break;

            default:
                next();
                break;
        }
    }
    return middleware;
}