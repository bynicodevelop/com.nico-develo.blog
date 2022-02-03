import { Auth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default class AuthenticationRepository {
    auth: Auth;

    constructor(auth: Auth) {
        this.auth = auth;
    }

    async login(email, password) {
        const user = await signInWithEmailAndPassword(this.auth, email, password);
    }

    async resetPassword(email: string, continueUrl: string) {
        var actionCodeSettings = {
            url: 'http://localhost:3000/auth',
            handleCodeInApp: true,
        };

        try {
            await sendPasswordResetEmail(this.auth, email, actionCodeSettings);
        } catch (error) { }
    }

    async logout() {
        await signOut(this.auth);
    }

    async getCurrentUser() {
        return new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(this.auth, (user) => {
                resolve(user);

                unsubscribe();
            }, reject);
        });
    }
}