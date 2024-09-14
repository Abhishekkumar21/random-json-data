export const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).json({
        err : "Something went wrong!"
    })
}

