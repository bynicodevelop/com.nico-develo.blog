import { Auth } from "firebase/auth";
import { Ref } from "nuxt3/dist/app/compat/capi";
import AuthenticationRepository from "~~/repositories/AuthenticationRepository";

import * as yup from "yup";
import { useCookieManager } from "./useCookieManager";

const schema = yup.object().shape({
    email: yup.string().email("invalid_email_field").required("email_field"),
    password: yup.string().min(6, "password_field").required("password_field"),
});

export const useAuthForm = () => {
    const { SITE_URL } = useRuntimeConfig();

    const { onSetCookie, onRemoveCookie } = useCookieManager();

    const { onError, onSuccess } = useNotification();

    const auth = useState('auth');

    const email = ref("");
    const emailError = ref(false);

    const password = ref("");
    const passwordError = ref(false);

    const isLoading = ref(false);

    const onLogin = async () => {
        try {
            schema.validateSync(
                {
                    email: email.value,
                    password: password.value,
                },
                { abortEarly: false }
            );
        } catch (error) {
            error.errors.forEach((error) => {
                if (error === "email_field" || error === "invalid_email_field") {
                    emailError.value = true;
                }

                if (error === "password_field") {
                    passwordError.value = true;
                }
            });

            return;
        }

        try {
            const authenticationRepository = new AuthenticationRepository(auth.value as Auth);

            await authenticationRepository.login(email.value, password.value);

            onSetCookie("authenticated", true);
        } catch (error) {
            console.log("error", error);

            onError("Impossible de se connecter", "Vos identifiants ne sont pas valides.");
        }
    }

    const onResetPassword = async () => {
        const authenticationRepository = new AuthenticationRepository(auth.value as Auth);

        await authenticationRepository.resetPassword(email.value, `${SITE_URL}/auth`);

        onSuccess("Information", "Vous allez recevoir un email pour modifier votre mot de passe.");

        onRemoveCookie("authenticated");
    }

    const onLogout = async () => {
        const authenticationRepository = new AuthenticationRepository(auth.value as Auth);

        await authenticationRepository.logout();

        onRemoveCookie("authenticated");

        onSuccess("Information", "Vous avez été déconnecté.");
    }

    return {
        email,
        emailError,
        password,
        passwordError,
        isLoading,
        onLogin,
        onResetPassword,
        onLogout,
    }
}