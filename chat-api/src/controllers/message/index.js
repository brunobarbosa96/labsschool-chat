import Message from "../../schemas/Message";
import { storeValidation } from "./validation";
import Session from "../../schemas/Session";
import mongoose from "mongoose";

class MessageController {
    async index(_, res) {
        let messages = await Message.find()
            .sort({ createdAt: "desc" })
            .limit(30);

        messages = await messages.map(async message => {
            const { name: userName } = await Session.findOne({
                _id: message.sessionId
            });

            return {
                ...message,
                userName
            };
        });
        console.log(messages);
        return res.json(messages);
    }

    async store(req, res) {
        if (!(await storeValidation.isValid(req.body)))
            return res
                .status(400)
                .json({ error: "Required fields was not informed." });

        const { sessionId, content } = req.body;
        if (!mongoose.Types.ObjectId.isValid(sessionId))
            return res.status(400).json({ error: "SessionId is not valid." });

        const sessionExists = await Session.findOne({
            _id: sessionId
        });

        if (!sessionExists)
            return res.status(404).json({
                error: "Session does't exist."
            });

        const message = await Message.create({
            sessionId: sessionId,
            content: content
        });

        return res.json(message);
    }
}

export default new MessageController();
