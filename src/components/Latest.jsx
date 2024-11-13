import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latest = () => {
    return (
        <div className="flex bg-slate-100 p-4">
            <p className="bg-[#D72050] py-2 px-5 text-white text-xl">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10" speed={100}>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, exercitationem?</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, exercitationem?</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, exercitationem?</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, exercitationem?</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, exercitationem?</Link>
            </Marquee>
        </div>
    );
};

export default Latest;