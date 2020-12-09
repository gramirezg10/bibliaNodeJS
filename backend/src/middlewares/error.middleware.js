module.exports = (err, res, req, next) => {
    const errorResponse = {
        status: err.httpStatus || 500,
        message: err.message || 'Internal server error'
    }
    return res.status(httpStatus).send(errorResponse)
};