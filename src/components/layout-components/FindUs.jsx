import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold">Find Us On</h2>
            <div className="join flex *:bg-white *:justify-start join-vertical">
                <button className="btn join-item"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item"><FaInstagram></FaInstagram> Instagram</button>
                <button className="btn join-item"><FaTwitter></FaTwitter> Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;