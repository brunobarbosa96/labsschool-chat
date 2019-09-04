import * as Yup from "yup";

export const storeValidation = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required()
});

export default {
    store: storeValidation
};
