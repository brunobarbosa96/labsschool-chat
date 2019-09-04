import { Router } from "express";

import SessionController from "./controllers/session/index";
import MessageController from "./controllers/message/index";

const routes = new Router();

routes.get("/sessions", SessionController.index);
routes.post("/sessions", SessionController.store);

routes.get("/messages", MessageController.index);
routes.post("/messages", MessageController.store);

// routes.put("/users", UserController.update);

// routes.get("/providers", ProviderController.index);
// routes.get("/providers/:providerId/available", AvailableController.index);

// routes.get("/appointments", AppointmentController.index);
// routes.post("/appointments", AppointmentController.store);
// routes.delete("/appointments/:id", AppointmentController.delete);

// routes.get("/schedule", ScheduleController.index);

// routes.get("/notifications", NotificationController.index);
// routes.put("/notifications/:id", NotificationController.update);

// routes.post("/files", upload.single("file"), FileController.store);

export default routes;
