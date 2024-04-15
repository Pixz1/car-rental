"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { fetchCars, generateCarImageUrl } from "@/utils";
import { CustomButton } from "@/components";
import { CarProps } from "@/types";

const Details = async () => {
    const pathname = usePathname();
    let carDetailsPath = pathname.replace("cars/details/", "");
    const [make, model, year, transmission, combination_mpg] =
        carDetailsPath.split("-");

    const updatedMake = make.replace("/", "");
    const decodedModel = decodeURIComponent(model);

    const fetchedCar = await fetchCars({
        make: updatedMake,
        model: decodedModel,
        year: parseInt(year),
        fuel: "",
        limit: 1,
    });

    const carDetails: CarProps[] = fetchedCar.map((car) => ({ ...car }));

    const convertTransmissionString = (transmission: string) =>
        transmission === "a"
            ? "Automatic"
            : transmission === "m"
            ? "Manual"
            : transmission;

    return (
        <div className="overflow-hidden h-screen">
            <div className="mt-48 padding-x padding-y max-width">
                {/* top links */}
                <div className="flex gap-10">
                    {/* back to search link */}
                    <Link
                        href="/cars"
                        className="flex justify-start items-center"
                    >
                        <Image
                            src="/arrow-left.svg"
                            alt="Left Arrow"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <div className="group inline-block relative">
                            <span className="pl-1 text-blue-600 group-hover:text-blue-600">
                                Back to search
                            </span>
                            <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                        </div>
                    </Link>

                    {/* save car link */}
                    <div className="group relative">
                        <Link
                            href="/"
                            className="flex justify-start items-center"
                        >
                            <Image
                                src="/heart-outline.svg"
                                alt="Heart Icon"
                                width={20}
                                height={20}
                                className="object-contain absolute group-hover:invisible"
                            />
                            <Image
                                src="/heart-filled.svg"
                                alt="Heart Icon Filled"
                                width={20}
                                height={20}
                                className="object-contain absolute invisible group-hover:visible"
                            />
                            <span className="pl-7 text-blue-600">Save</span>
                        </Link>
                    </div>
                </div>

                {/* main details container */}
                <div className="mt-7 px-3">
                    {/* heading */}
                    <div className="font-extrabold text-3xl">
                        {carDetails[0].year}, {carDetails[0].make}-
                        {carDetails[0].model}, {""}
                        {convertTransmissionString(carDetails[0].transmission)}
                    </div>

                    {/* highlighted details */}
                    <div className="relative flex mt-7">
                        {/* transmission, drivetrain, engine, fuel economy details */}
                        <div className="flex w-full text-gray gap-16 flex-wrap">
                            <div className="flex justify-center items-center gap-2">
                                <Image
                                    src="/steering-wheel.svg"
                                    width={40}
                                    height={40}
                                    alt="Steering Wheel"
                                />
                                <div className="flex flex-col text-[14px] capitalize">
                                    <p className="text-grey">Transmission</p>
                                    <p className="text-black-100 font-semibold pl-5">
                                        {convertTransmissionString(
                                            carDetails[0].transmission
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <Image
                                    src="/tire.svg"
                                    width={40}
                                    height={40}
                                    alt="Tire"
                                />
                                <div className="flex flex-col text-[14px] capitalize">
                                    <p className="text-grey">Drive</p>
                                    <p className="text-black-100 font-semibold pl-5">
                                        {carDetails[0].drive}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <Image
                                    src="/engine.svg"
                                    width={40}
                                    height={40}
                                    alt="Engine"
                                />
                                <div className="flex flex-col text-[14px] capitalize">
                                    <p className="text-grey">Engine</p>
                                    <p className="text-black-100 font-semibold pl-5">
                                        {carDetails[0].cylinders}cyl, {""}
                                        {carDetails[0].displacement}L, {""}
                                        {carDetails[0].fuel_type}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <Image
                                    src="/gas.svg"
                                    width={40}
                                    height={40}
                                    alt="Fuel Economy"
                                />
                                <div className="flex flex-col text-[14px] capitalize">
                                    <p className="text-grey">Fuel Economy</p>
                                    <p className="text-black-100 font-semibold pl-5">
                                        {carDetails[0].combination_L100km}{" "}
                                        L/100km
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* images and details */}
                    <div className="mt-7 w-full flex gap-10">
                        {/* images */}
                        <div className="flex flex-col gap-3 w-3/5">
                            {/* top image */}
                            <div className="relative h-[32rem] bg-primary-blue-100 bg-cover bg-center rounded-lg">
                                <Image
                                    src={generateCarImageUrl(
                                        carDetails[0],
                                        "28"
                                    )}
                                    alt="Car Model"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>

                            {/* bottom 3 image */}
                            <div className=" flex gap-3">
                                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                    <Image
                                        src={generateCarImageUrl(
                                            carDetails[0],
                                            "29"
                                        )}
                                        alt="Car Model"
                                        fill
                                        priority
                                        className="object-contain"
                                    />
                                </div>
                                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                    <Image
                                        src={generateCarImageUrl(
                                            carDetails[0],
                                            "22"
                                        )}
                                        alt="Car Model"
                                        fill
                                        priority
                                        className="object-contain"
                                    />
                                </div>
                                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                    <Image
                                        src={generateCarImageUrl(
                                            carDetails[0],
                                            "13"
                                        )}
                                        alt="Car Model"
                                        fill
                                        priority
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* bottom 3 details */}
                            <div></div>
                        </div>

                        {/* details */}
                        <div className="bg-primary-blue-100 w-2/5 px-10 pt-10 rounded-lg">
                            <h3 className="font-bold text-end">Details</h3>
                            <hr className="mt-2 mb-10" />
                            {Object.entries(carDetails[0]).map(
                                ([key, value]) => (
                                    <div
                                        className="flex justify-between gap-5 w-full text-right"
                                        key={key}
                                    >
                                        <h4 className="text-grey capitalize">
                                            {key.split("_").join(" ")}
                                        </h4>
                                        <p className="text-black-100 font-semibold capitalize">
                                            {key === "transmission"
                                                ? value === "a"
                                                    ? "Automatic"
                                                    : "Manual"
                                                : value}
                                        </p>
                                    </div>
                                )
                            )}
                            <hr className="mt-10" />
                            <Link
                                href="/"
                                className="mt-12 flex justify-center"
                            >
                                <CustomButton
                                    title="Book"
                                    containerStyles="w-1/2 py-[16px] rounded-full bg-primary-blue"
                                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                                    rightIcon="/add.svg"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
