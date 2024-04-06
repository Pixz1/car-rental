"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="hero">
            <div className="flex-1 pt-36 pt-96-desktop padding-x">
                <h1 className="hero__title">
                    Find the perfect car for your getaway
                </h1>
                <p className="hero__subtitle">
                    ...And let the good times roll.
                </p>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="hero"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    );
};

export default Hero;
