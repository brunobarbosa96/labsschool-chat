import { Router } from "express";

import SessionController from "./controllers/session/index";
import MessageController from "./controllers/message/index";

const routes = new Router();

routes.get("/sessions", SessionController.index);
routes.post("/sessions", SessionController.store);

routes.get("/messages", MessageController.index);
routes.post("/messages", MessageController.store);

export default routes;
