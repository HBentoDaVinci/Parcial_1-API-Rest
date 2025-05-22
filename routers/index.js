import planesRouter from "./planesRoutes.js";

function routerApi (app) {
    app.use('/api/planes', planesRouter);
}

export default routerApi;