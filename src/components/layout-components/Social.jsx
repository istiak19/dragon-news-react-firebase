import { FaGithub, FaGoogle } from "react-icons/fa";

const Social = () => {
    return (
        <div className="space-y-3">
            <h2 className="font-semibold">Login With</h2>
            <div className="space-y-2 *:w-full">
                <button className="btn"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn"><FaGithub></FaGithub> Login with GitHub</button>
            </div>
        </div>
    );
};

export default Social;