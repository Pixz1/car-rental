"use client";

import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { combination_L100km, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(combination_L100km, year);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="car-card group">
            {/* car title */}
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            {/* car rental prices */}
            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-end text-[32px] text-semibold">$</span>
                {carRent}
                <span className="self-end text-[14px] text-medium">/day</span>
            </p>

            {/* car img */}
            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    src={generateCarImageUrl(car, "28")}
                    alt="Car Model"
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            {/* car details */}
            <div className="relative flex w-full mt-2">
                {/* transmission, drivetrain, & fuel economy details */}
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/steering-wheel.svg"
                            width={20}
                            height={20}
                            alt="Steering Wheel"
                        />
                        <p className="text-[14px]">
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/tire.svg"
                            width={20}
                            height={20}
                            alt="Tire"
                        />
                        <p className="text-[14px]">{drive.toUpperCase()}</p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/gas.svg"
                            width={20}
                            height={20}
                            alt="Fuel Economy"
                        />
                        <p className="text-[14px]">
                            {combination_L100km} L/100km
                        </p>
                    </div>
                </div>

                {/* button to show modal about more details */}
                <div className="car-card__btn-container">
                    <CustomButton
                        title="View More"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                car={car}
            />
        </div>
    );
};

export default CarCard;
