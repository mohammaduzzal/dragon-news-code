import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

const NewsCard = ( props = {} ) => {
    const {news} = props || {} 
    return (
        <div className="card bg-white shadow-md rounded-md overflow-hidden border border-gray-300 p-4">
            {/* Author Info */}
            <div className="flex items-center gap-3 mb-3">
                <img
                    src={news.author.img}
                    alt="author"
                    className="w-10 h-10 rounded-full border border-gray-300"
                />
                <div>
                    <h4 className="text-gray-800 font-semibold">{news.author.name}</h4>
                    <p className="text-gray-500 text-sm">{news.author.published_date}</p>
                </div>
                <AiOutlineHeart className="ml-auto text-xl text-gray-500 cursor-pointer hover:text-red-500" />
            </div>

            {/* News Title */}
            <h2 className="text-lg font-bold text-gray-800 mb-2">
                {news.title}
            </h2>

            {/* Thumbnail Image */}
            <img
                src={news.image_url}
                alt="thumbnail"
                className="w-full  object-cover mb-3 rounded-md"
            />

            {/* News Details */}
            <p className="text-gray-600 text-sm mb-3">
                {news.details.slice(0, 100)}... <span className="text-blue-500 cursor-pointer">Read More</span>
            </p>

            {/* Rating and Views */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                        <FaStar key={i} className={`text-yellow-500 ${i < news.rating.number ? 'text-yellow-500' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-1 text-gray-600">{news.rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                    <AiOutlineEye className="text-lg" />
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
