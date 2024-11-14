import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">LatestNews</p>
           <Marquee pauseOnHover={true} speed={200} className="space-x-10">
            <Link  to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur tempora esse laudantium delectus quod vel aliquid eaque dicta dignissimos laborum. </Link>
            <Link className="space-x-2" to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur tempora esse laudantium delectus quod vel aliquid eaque dicta dignissimos laborum. </Link>

            <Link className="space-x-2" to='/news'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur tempora esse laudantium delectus quod vel aliquid eaque dicta dignissimos laborum.</Link>
           </Marquee>
        </div>
    );
};

export default LatestNews;