export default defineNuxtRouteMiddleware((to, from) => {
    const { onGetCookie } = useCookieManager();

    const authRoutesName = ['auth', 'auth-forgot-password'];
    const protectedRoutesName = ['adminer'];

    if (process.server) {
        if (!onGetCookie("authenticated")) {
            if (protectedRoutesName.includes(to.name as string)) {
                console.log("Redirecting to auth page");

                return navigateTo('/auth');
            }
        } else if (onGetCookie("authenticated") === true) {
            if (authRoutesName.includes(to.name as string)) {
                console.log("Redirecting to adminer page");

                return navigateTo('/adminer');
            }
        }
    }
})