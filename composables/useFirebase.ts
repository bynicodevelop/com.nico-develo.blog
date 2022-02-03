import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, connectAuthEmulator, getAuth, onAuthStateChanged } from "firebase/auth";
import AuthentiticationRepository from "~~/repositories/AuthenticationRepository";

export const useFirebase = () => {
    const protectedRoutesName = ['adminer'];
    const authRoutesName = ['auth', 'auth-forgot-password'];

    const router = useRouter();
    const route = useRoute();

    const {
        API_KEY,
        AUTH_DOMAIN,
        PROJECT_ID,
        STORAGE_BUCKET,
        MESSAGING_SENDER_ID,
        APP_ID,
    } = useRuntimeConfig();

    const auth = ref(null);

    const init = async () => {
        if (window.location.hostname === 'localhost') {
            console.log("[Composable] Firebase initializing...");
        }

        const firebaseApp: FirebaseApp = initializeApp({
            apiKey: API_KEY,
            authDomain: AUTH_DOMAIN,
            projectId: PROJECT_ID,
            storageBucket: STORAGE_BUCKET,
            messagingSenderId: MESSAGING_SENDER_ID,
            appId: APP_ID,
        });

        auth.value = getAuth(firebaseApp);

        if (window.location.hostname === 'localhost') {
            console.log("[Composable] Firebase initialized");
        }

        if (window.location.hostname === 'localhost') {
            connectAuthEmulator(auth.value, "http://localhost:9099");
        }

        onAuthStateChanged(auth.value, (user) => {
            if (user) {
                if (authRoutesName.includes(route.name as string)) {
                    router.push({
                        name: 'adminer',
                    })
                }

                return;
            }

            if (protectedRoutesName.includes(route.name as string)) {
                router.push({
                    name: 'auth',
                })
            }
        })
    }

    return { auth, init }
}