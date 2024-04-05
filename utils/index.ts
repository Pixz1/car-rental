import { CarProps } from "@/types";

export async function fetchCars(): Promise<CarProps[]> {
    const headers = {
        "X-RapidAPI-Key": "b6800ba4b6mshd19cbe854cdbb79p1a6c8ajsna8c5cc28367a",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const response = await fetch(
        "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=911",
        { headers: headers }
    );

    const result: CarProps[] = await response.json();

    // adds new property and converts mpg to L/100km
    return result.map((car) => ({
        ...car,
        city_L100km: mpgToL100km(car.city_mpg),
        combination_L100km: mpgToL100km(car.combination_mpg),
    }));
}

export function mpgToL100km(mpg: number): number {
    const litersPer100km = 235.215 / mpg;
    return Math.round(litersPer100km * 10) / 10;
}

export const calculateCarRent = (combination_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = combination_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};
