import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Cars } from "../data/cars";
import Card from "../components/Card/Card";
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function FindYourCar() {
    const [favoriteCarIdList, setFavoriteCarIdList] = useLocalStorage([], 'favorite');

    const [searchParams, setSearchParams] = useSearchParams()

    const uniqueBrand = [...new Set(Cars.map(car => car.brand))];
    const uniqueYear = [...new Set(Cars.map(car => car.year))];
    const uniqueFuel = [...new Set(Cars.map(car => car.fuel))];
    const uniqueBody = [...new Set(Cars.map(car => car.body))];

    const [selectedBrand, setSelectedBrand] = useState('view-all');
    const [fromPriceValue, setFromPriceValue] = useState(0);
    const [toPriceValue, setToPriceValue] = useState(999999);
    const [selectedYear, setSelectedYear] = useState('view-all');
    const [fromMileageValue, setFromMileageValue] = useState(0);
    const [toMileageValue, setToMileageValue] = useState(999999);
    const [selectedFuel, setSelectedFuel] = useState([]);
    const [selectedBody, setSelectedBody] = useState("view-all");
    const [selectedSorting, setSelectedSorting] = useState('sort-off')

    const [filteredCarsArray, setFilteredCarsArray] = useState(Cars)
    const [sortedCarsArray, setSortedCarsArray] = useState(filteredCarsArray);

    useEffect(() => {
        const bodyFromParams = searchParams.get("bodyType") ?? "view-all";
        setSelectedBody(bodyFromParams);


        const PriceRangeFromParams = searchParams.get("priceRange") ?? "0-999999"
        const [fromPriceFromParams, toPriceFromParams] = PriceRangeFromParams.split('-')
        setFromPriceValue(parseInt(fromPriceFromParams));
        setToPriceValue(parseInt(toPriceFromParams))


        const filtered = Cars
            .filter(car => (bodyFromParams === 'view-all' || car.body == bodyFromParams))
            .filter(car => (car.price >= fromPriceFromParams && car.price < toPriceFromParams))


        setFilteredCarsArray(filtered);
    }, []);


    useEffect(() => {
        applySortingMethod(filteredCarsArray);
    }, [selectedSorting, filteredCarsArray]);

    const addToFavorite = (id) => {
        setFavoriteCarIdList(favoriteCarIds => {
            const isFavorite = favoriteCarIds.includes(id);

            return (
                isFavorite ? favoriteCarIds.filter(carId => carId !== id) : [...favoriteCarIds, id]
            )
        });
    };


    function applyFilters() {
        const filtered = Cars.filter(car =>
            (selectedBrand === 'view-all' || car.brand === selectedBrand) &&
            (car.price >= fromPriceValue && car.price < toPriceValue) &&
            (selectedYear === 'view-all' || car.year == selectedYear) &&
            (car.mileage >= fromMileageValue && car.mileage < toMileageValue) &&
            (selectedFuel.length === 0 || selectedFuel.includes(car.fuel)) &&
            (selectedBody === 'view-all' || car.body == selectedBody)
        );

        setFilteredCarsArray(filtered);
    };

    const applySortingMethod = (cars) => {
        let sortedCars = [...cars];
        if (selectedSorting === 'price-less-high') {
            sortedCars.sort((a, b) => a.price - b.price);
        } else if (selectedSorting === 'price-high-less') {
            sortedCars.sort((a, b) => b.price - a.price);
        } else if (selectedSorting === 'mileage-less-high') {
            sortedCars.sort((a, b) => a.mileage - b.mileage);
        } else if (selectedSorting === 'mileage-high-less') {
            sortedCars.sort((a, b) => b.mileage - a.mileage);
        }
        setSortedCarsArray(sortedCars);
    };

    const catchSortingMethod = (click) => {
        setSelectedSorting(click.target.value)

    }

    const catchBrandChange = (click) => {
        setSelectedBrand(click.target.value)
    }

    const catchFromPriceValue = (event) => {
        setFromPriceValue(event.target.value)
    }

    const catchToPriceValue = (event) => {
        setToPriceValue(event.target.value)
    }

    const catchYearChange = (click) => {
        setSelectedYear(click.target.value)
    }

    const catchFromMileageValue = (event) => {
        setFromMileageValue(event.target.value)
    }

    const catchToMileageValue = (event) => {
        setToMileageValue(event.target.value)
    }

    const catchFuelChange = (click) => {
        const selected = click.target.value
        setSelectedFuel(prevState => {
            if (prevState.includes(selected)) {
                return prevState.filter(fuel => fuel !== selected)
            } else {
                return [...prevState, selected]
            }
        })
    }

    const catchBodyChange = (click) => {

        setSelectedBody(click.target.value)
    }

    return (
        <>
            <div className="find-your-car__container container">
                <section className="filters">
                    <div className="filters__container">
                        <h2 className="filters__title">Filters</h2>
                        <div className="filters__filter">
                            <div className="filters__filter-header">
                                <img src="./images/find-your-car/filter-icon-brand.svg" alt="" className="filters__filter-icon" />
                                <h3 className="filters__filter-title">Car brand</h3>
                            </div>
                            <div className="filters__content">
                                <select name="" id="" className="filters__brand-select" onChange={catchBrandChange}>
                                    <option value="view-all" className="filters__brand-option">View all</option>
                                    {uniqueBrand.map((brand) => (
                                        <option className="filters__brand-option"
                                            key={brand} value={brand}>
                                            {brand}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="filters__filter">
                            <div className="filters__filter-header">
                                <img src="./images/find-your-car/filter-icon-price.svg" alt="" className="filters__filter-icon" />
                                <h3 className="filters__filter-title">Price</h3>
                            </div>
                            <div className="filters__content">
                                <input type="number" className="filters__price-from-input" value={fromPriceValue} placeholder="From..." onChange={catchFromPriceValue} />
                                <input type="number" className="filters__price-to-input" value={toPriceValue} placeholder="To..." onChange={catchToPriceValue} />
                            </div>
                        </div>
                        <div className="filters__filter">
                            <div className="filters__filter-header">
                                <img src="./images/find-your-car/filter-icon-year.svg" alt="" className="filters__filter-icon" />
                                <h3 className="filters__filter-title">Year</h3>
                            </div>
                            <div className="filters__content">
                                <select name="" id="" className="filters__year-select" onChange={catchYearChange}>
                                    <option value="view-all" className="filters__year-option">View all</option>
                                    {uniqueYear.sort((a, b) => a - b).map((year) => (
                                        <option className="filters__year-option"
                                            key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="filters__filter">
                            <div className="filters__filter-header">
                                <img src="./images/find-your-car/filter-icon-kilometres.svg" alt="" className="filters__filter-icon" />
                                <h3 className="filters__filter-title">Kilometres</h3>
                            </div>
                            <div className="filters__content">
                                <input type="number" className="filters__kilometres-from-input" placeholder="From..." onChange={catchFromMileageValue} />
                                <input type="number" className="filters__kilometres-to-input" placeholder="To..." onChange={catchToMileageValue} />
                            </div>
                        </div>
                        <div className="filters__filter">
                            <div className="filters__filter-header">
                                <img src="./images/find-your-car/filter-icon-fuel.svg" alt="" className="filters__filter-icon" />
                                <h3 className="filters__filter-title">Fuel</h3>
                            </div>
                            <div className="filters__content">
                                {uniqueFuel.map((fuel, index) => (
                                    <div className="filters__fuel-checkbox-wrap" key={index}>
                                        <input type="checkbox" className="filters__fuel-type-input" value={fuel} id={`fuel-${index}`} onChange={catchFuelChange} />
                                        <label htmlFor={`fuel-${index}`}>{fuel}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="filters__filter">
                            <div className="filters__filter-header">
                                <img src="./images/find-your-car/filter-icon-body.svg" alt="" className="filters__filter-icon" />
                                <h3 className="filters__filter-title">Body</h3>
                            </div>
                            <div className="filters__content">
                                <select name="" id="" className="filters__body-select" onChange={catchBodyChange} value={selectedBody}>
                                    <option value="view-all" className="filters__body-option">View all</option>
                                    {uniqueBody.map((body) => (
                                        <option className="filters__body-option"
                                            key={body} value={body}  >
                                            {body}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button className="filters__show-button" onClick={applyFilters}>Apply filters</button>
                    </div>
                </section>

                <section className="our-cars">
                    <div className="our-cars__container">
                        <div className="our-cars__header">
                            <h2 className="our-cars__title">Our cars ({Cars.length} results)</h2>
                            <div className="our-cars__sort-wrap">
                                <p className="our-cars__sort-text">Sort by: </p>
                                <select className="our-cars__sort-select" onChange={catchSortingMethod}>
                                    <option value="sort-off" className="our-cars__sort-option">Сhoose sorting method</option>
                                    <option value="price-less-high" className="our-cars__sort-option">Price (from less to high)</option>
                                    <option value="price-high-less" className="our-cars__sort-option">Price (from high to less)</option>
                                    <option value="mileage-less-high" className="our-cars__sort-option">Mileage (from less to high)</option>
                                    <option value="mileage-high-less" className="our-cars__sort-option">Mileage (from high to less)</option>
                                </select>
                            </div>

                        </div>
                        <div className="our-cars__description">We have a huge selection of quality used cars to choose from, with new stock arriving every day. Each car has been meticulously checked by an expert, so
                            you know it’s up to scratch!</div>
                        <div className="our-cars__content">
                            {sortedCarsArray.map((car, index) => (
                                <Card key={index} car={car} addToFavorite={addToFavorite} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}