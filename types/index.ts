import { MouseEventHandler } from "react";

export interface AllCarsProps {
    searchParams: FilterProps;
}

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchMakeProps {
    make: string;
    setMake: (make: string) => void;
}

export interface CarProps {
    city_mpg: number;
    city_L100km: number;
    class: string;
    combination_mpg: number;
    combination_L100km: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    make: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}
