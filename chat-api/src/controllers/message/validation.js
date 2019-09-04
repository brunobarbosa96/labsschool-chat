import * as Yup from "yup";

export const storeValidation = Yup.object().shape({
    sessionId: Yup.string()
        .trim()
        .required(),
    content: Yup.string()
        .trim()
        .required()
});

export default {
    store: storeValidation
};
