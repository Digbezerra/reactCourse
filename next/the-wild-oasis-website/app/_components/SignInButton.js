import Image from "next/image";

const googleLogo = "https://authjs.dev/img/providers/google.svg";

function SignInButton() {
	return (
		<button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium relative">
			<Image src={googleLogo} alt="Google logo" fill />
			<span>Continue with Google</span>
		</button>
	);
}

export default SignInButton;
