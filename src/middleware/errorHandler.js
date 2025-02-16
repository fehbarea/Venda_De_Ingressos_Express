import CustomError from "../customErrors/CustomError.js";

const errorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    if (err instanceof CustomError) {
        return res.status(err.status)
    }

    console.error(err);
    res.status(500)
};

export default errorHandler;
