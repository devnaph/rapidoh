"use client";
import Marquee from "react-fast-marquee";


    const data = [
        "20% Off First-Time Haircuts!",
        "Book a Facial & Get 50% Off a Manicure!",
        "Happy Hour Special: 30% Off All Services (Weekdays 12 PM - 3 PM)",
        "Refer a Friend & Both Get $10 Off Your Next Appointment!",
        "Seasonal Offer: 25% Off All Spa Packages!",
        "Get a Free Hair Mask Treatment with Every Blowout!",
        "Loyalty Rewards: 10% Off After Every 5 Visits!",
        
    ];


const Discounts = () => {
  return (
    <div className="bg-[#2e2e38]  px-[4px] py-[20px] font-medium text-white md:px-[8px] md:py-[6px] md:text-[18px]">
      <Marquee autoFill={true}>
        <div className="ml-[32px] flex items-center justify-center gap-[32px]">
          
            {data.map((item, index) => {
              return (
                <p key={index}>{item}</p>
              );
            })}
          
          <div className="aspect-square w-[8px] rounded-full bg-white" />
        </div>
      </Marquee>
    </div>
  );
};

export default Discounts;