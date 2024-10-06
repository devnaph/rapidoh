import Link from "next/link";

const HomeVideo = () => {
    return (
      <div className="pointer-events-none relative h-[470px] select-none md:h-[calc(100vh_-_80px)] mt-[150px] xl:mt-[155px]">
        <div className="">
           {/* overlay*/} 
           <div className="absolute w-full h-full bg-black/[0.25] z-10 top-0"></div>
          {/*<div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.75]"></div> */}
          <video
            playsInline
            muted
            loop
            autoPlay
            preload="auto"
            className="absolute h-full w-full object-cover"
          >
            <source src="/assets/assets/home/barbervid.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* <Logo size="lg" className="absolute bottom-4 right-4 md:bottom-8 md:right-8" /> */}

        {/* text */}
        <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
                {/* text */}
                <div 
                    data-scroll
                    data-scroll-speed="0.4"
                    className="flex-1 flex flex-col text-center justify-center items-center xl:pb-10 pt-8 gap-10 h-full"
                >
                   {/*
                    <h1 className="h1 text-white">
                          <span className="text-accent">Glamour</span> 
                    </h1>
*/}
                    <h3 className="h3 text-white max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-2">
                    Timeless Beauty, Unmatched Style.
                    </h3>
                    <button className="btn animate-bounce" >
                      <Link href="https://booking.setmore.com/scheduleappointment/2a705174-d5b0-4479-beb1-2a7440d8bfe9">Book Appointment</Link>
                    </button>
                </div>
        </div>

      </div>
    );
  };
  
  export default HomeVideo;