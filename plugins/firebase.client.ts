import AuthenticationRepository from "~~/repositories/AuthenticationRepository";

export default defineNuxtPlugin(async (nuxtApp) => {
    if (window.location.hostname === 'localhost') {
        console.log("[Plugin] Initializing Firebase");
    }

    const route = useRoute();
    const router = useRouter();

    const { auth, init } = useFirebase();

    await init();

    useState('auth', () => auth.value);

    // const authenticationRepository = new AuthenticationRepository(auth.value);

    // const user = await authenticationRepository.getCurrentUser();

    // if (user) {
    //     if (['auth', 'auth-forgot-password'].includes(route.name as string)) {
    //         router.push({
    //             name: 'adminer',
    //         });
    //     }
    // } else {
    //     if (['adminer'].includes(route.name as string)) {
    //         router.push({
    //             name: 'auth',
    //         });
    //     }
    // }
});