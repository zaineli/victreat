import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CancerCarousel = ({ data, onCancerSelect }) => {
    return (
        <Carousel onChange={onCancerSelect} showThumbs={false} emulateTouch={false} showStatus={false}>
            {data.map((item) => (
                <div key={item.id} className="p-4 bg-white rounded-lg shadow-md">
                    <div className="flex items-center">
                        <img src={item.imageUrl} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <h2 className="text-lg font-bold">{item.name}</h2>
                            <p className="text-sm text-gray-500">{item.id} y.o</p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">
                            {item["success rate"] * 100}%
                        </span>
                        <p className="text-2xl font-bold">
                            +{(item["success rate"] * 100).toFixed(2)}
                        </p>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CancerCarousel;
