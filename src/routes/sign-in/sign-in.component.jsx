import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firabase.utils";

const SignIn = () => {

    const loginGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
    }

    return (
        <div className="container sign-in-container">
            <h1>This is the Sign In page</h1>
            <button onClick={loginGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export default SignIn;