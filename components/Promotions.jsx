// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";



// data 
const data = [
        "20% Off Haircuts!",
        "Get 50% Off a Manicure!",
        "Happy Hour Special: 30%",
        "Refer a Friend ",
        "Seasonal Offer: 25% Off All Spa Packages!",
        "Get a Free Hair Mask Treatment ",
        "Loyalty Rewards: 10% Off ",
];

const Promotions = () => {
    return (
    
        <div className="container mx-auto h-full flex items-center justify-center text-white">
            <Swiper navigation={true} modules={[Navigation]} className="h-auto py-3 xl:py-5">
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="flex text-white items-center justify-center w-full">
                            <p className="font-semibold py-3 text-center" key={index}>{item}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <style>
                {`
                    .swiper-button-next, .swiper-button-prev {
                        color: white;
                        display: block;
                    }
                `}
            </style>
        </div>
    
    );
};

export default Promotions;
