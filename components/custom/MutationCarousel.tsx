import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MutationCarousel = ({ mutations }: {
    mutations: { mutation: string, imageUrl: string, "success rate": number }[];

}) => {
    return (
                <Carousel showThumbs={false} emulateTouch={true} showStatus={false}>
            {mutations.map((mutation) => (
                <div key={mutation.mutation} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center relative">
                    <img src={mutation.imageUrl} alt={`Mutation ${mutation.mutation}`} className="w-12 h-12 mb-4" />
                    <div className="text-center">
                        <p className="text-lg font-bold">Success</p>
                        <p className="text-sm text-gray-500">({mutation["success rate"] * 100} %)</p>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default MutationCarousel;
