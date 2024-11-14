import pic1 from '../../assets/swimming.png'
import pic2 from '../../assets/playground.png'
import pic3 from '../../assets/class.png'

const QZone = () => {
    return (
        <div className='w-full bg-slate-100'>
            <h2 className='font-semibold pt-4 pl-4'>Q-Zone</h2>
            <div className='py-5'>
                <img className='w-full' src={pic2} alt="" />
                <img className='w-full' src={pic1} alt="" />
                <img className='w-full' src={pic3} alt="" />
            </div>
        </div>
    );
};

export default QZone;