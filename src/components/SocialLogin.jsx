import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login with</h2>
            <div className="*:w-full space-y-3">
                <button className="btn"><FcGoogle></FcGoogle> Login with google</button>
                <button className="btn"><FaGithub></FaGithub> Login with github</button>
            </div>
        </div>
    );
};

export default SocialLogin;