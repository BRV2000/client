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
        password: Yup.string().required("Campo obligatorio"),
        repeatPassword: Yup.string().required("Campo Obligatorio").oneOf([Yup.ref("password")],"Las contraseñas deben ser iguales"),
        coditionAccepted: Yup.bool().isTrue(true),
    });
}