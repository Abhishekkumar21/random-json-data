export const loggerMiddleware = (req, res, next) =>{
    console.log(`${req.method} ${req.uri} - ${new Date().toLocaleDateString()}`);
    next();
}