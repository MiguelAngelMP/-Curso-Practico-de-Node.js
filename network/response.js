exports.success = function (req, res, message, status) {
    let statusCode = status || 200;

    let statusMensage = message || '';

    res.status(statusCode).send({
        error: false,
        status: status,
        body: message
    });
};
exports.error = function (rew, res, message, status) {
    let statusCode = status || 500;
    let statusMensage = message || 'Internal server error';

    res.status(statusCode).send({
        error: false,
        status: status,
        body: message
    });
};