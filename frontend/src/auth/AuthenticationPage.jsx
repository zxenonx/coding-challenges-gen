import "react"
import {SignIn, SignUp, SignedIn, SignedOut} from '@clerk/clerk-react';

function AuthenticationPage() {
    return (
        <div className="auth-container">
            <SignedIn>
                <div className="redirect-message">
                    <h1>Welcome Back!</h1>
                    <p>You are already signed in.</p>
                </div>
            </SignedIn>

            <SignedOut>
                <h1>Sign In or Sign Up</h1>
                <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
                <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
            </SignedOut>
        </div>
    );
}

export default AuthenticationPage;