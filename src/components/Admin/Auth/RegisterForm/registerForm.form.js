import * as Yup from "yup";

export function initialValues() {
    return{
        email: "",
        password: "",
        repeatPassword: "",
        coditionAccepted: false,
    };
}

export function validationSchem () {
    return Yup.object ({
        email: Yup.string().email("El email no es valido").required("Campo obligatorio"),
    })
}