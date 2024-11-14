import { AiFillStar, AiOutlineEye } from 'react-icons/ai';
import { FiShare2 } from 'react-icons/fi';

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100 shadow-xl p-4 mb-7 space-y-3">
            <div className="flex items-center mb-4">
                <img src={news.author.img} alt="Author" className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <h2 className="font-semibold">{news.author.name}</h2>
                    <p className="text-sm text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
                </div>
                <div className="ml-auto">
                    <button className="btn btn-circle btn-outline border-none btn-sm">
                        <FiShare2 className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <img src={news.thumbnail_url} alt="Article" className="w-full rounded-lg mb-4 h-[300px]" />
            <h3 className="font-bold text-lg mb-2">{news.title}</h3>
            <p className="text-sm text-gray-600 mb-4">
                {news.details.slice(0, 100)}... <span className="text-blue-500 cursor-pointer">Read More</span>
            </p>
            <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                    <AiFillStar className="w-5 h-5 text-orange-500" /> {/* Rating icon */}
                    <span className="text-orange-500 font-semibold ml-1">{news.rating.number}</span>
                    <span className="ml-1">{news.rating.badge}</span>
                </div>
                <div className="flex items-center">
                    <AiOutlineEye className="w-5 h-5 mr-1" />
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;