import pOne from '../assets/class.png'
import pTwo from '../assets/playground.png'
import pThree from '../assets/swimming.png'
 
const Qzone = () => {
    return (
        <div className='border-2 *:bg-gray-100 rounded-lg'>
            <h2 className="font-bold text-xl mb-3">Q-zone</h2>
            <div className="flex flex-col justify-center items-center">
             
                    <img src={pThree} alt="" />
                    <img src={pOne} alt="" />
                    <img src={pTwo} alt="" />
            
            </div>
        </div>
    );
};

export default Qzone;