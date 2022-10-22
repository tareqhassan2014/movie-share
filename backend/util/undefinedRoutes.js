const AppError = require('./AppError');

const undefinedRoutes = (req, res, next) =>
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));

module.exports = undefinedRoutes;
