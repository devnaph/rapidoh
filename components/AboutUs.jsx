"use client";
import ImageCarousel from "@/components/ImageCarousel";

const AboutUs = () => {

    return (
        <div className="my-5">
            <h2 className="text-center py-4  text-4xl text-red-900">Rapidoh Empire Saloon</h2>
            <p className=" text-center text-xl">Where artistry meets expertise in contemporary hair design</p>
            <section className="py-4">
            <ImageCarousel/>
            </section>
            <section className="py-4 gap-4 flex justify-center relative text-neutral-950">
            <h2 className="text-9xl hidden lg:block absolute top-52 -left-48 text-red-900 rotate-90">About Us</h2>
            <div className="flex flex-col gap-4 px-4">
            <p className="text-4xl">Who We are</p>
            <p className="italic">Langata , Nairobi | Since 2016</p>
            <p className="max-w-lg mx-auto text-xl">
            Your go-to destination for top-notch grooming and hairstyling services in the heart of Nairobi. Established with a passion for the art of barbering and a commitment to our community, we are dedicated to providing you with an exceptional grooming experience that leaves you looking and feeling your best.
            </p>
            <p className="max-w-lg mx-auto text-xl">Founded in 2023, Billy's Barber was born out of a lifelong dream and dedication to the craft of barbering. Billy, our founder and master barber, envisioned a place where everyone could experience the timeless art of grooming in a comfortable and welcoming environment.</p>
            <p className="max-w-lg mx-auto text-xl">Our team of experienced and skilled barbers is the backbone of our success. We take pride in our talented and diverse staff, each of whom is committed to delivering the highest level of service. Our barbers are not just professionals; they are artists who continually refine their skills and stay at the forefront of industry trends.</p>
            </div>
            <img className="w-1/4 grayscale object-cover hidden md:block" src='https://images.pexels.com/photos/1895701/pexels-photo-1895701.jpeg'></img>
            </section>
        </div>
    );
};

export default AboutUs;