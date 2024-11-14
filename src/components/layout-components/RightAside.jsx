import Bg from "./Bg";
import FindUs from "./FindUs";
import QZone from "./QZone";
import Social from "./Social";

const RightAside = () => {
    return (
        <div className="space-y-6">
            <Social></Social>
            <FindUs></FindUs>
            <QZone></QZone>
            <Bg></Bg>
        </div>
    );
};

export default RightAside;