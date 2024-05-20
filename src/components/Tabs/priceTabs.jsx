import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { Cars } from '../../data/cars'
import 'swiper/css';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function UniquePriceTabs() {

    const [favoriteCarIdList, setFavoriteCarIdList] = useLocalStorage([], 'favorite');


    const uniquePrices = [
        {
            name: 'under $20K',
            valueFrom: 0,
            valueTo: 20000
        },
        {
            name: '$20K-$40K',
            valueFrom: 20000,
            valueTo: 40000
        },
        {
            name: '$40K-$60K',
            valueFrom: 40000,
            valueTo: 60000
        },
        {
            name: 'over $60K',
            valueFrom: 60000,
            valueTo: 999999
        },
    ]

    const [activePriceTab, setActivePriceTab] = useState(uniquePrices[0]);

    const filteredByPriceCars = Cars.filter(car => car.price >= activePriceTab.valueFrom && car.price < activePriceTab.valueTo);
    const addToFavorite = (id) => {
        setFavoriteCarIdList(favoriteCarIds => {
            const isFavorite = favoriteCarIds.includes(id);

            return (
                isFavorite ? favoriteCarIds.filter(carId => carId !== id) : [...favoriteCarIds, id]
            )
        });
    };

    return (
        <>
            <ul className="by-price__tabs">
                {uniquePrices.map((car) => (
                    <li className={activePriceTab.name === car.name ? 'by-price__tab by-price__active-price-tab' : 'by-price__tab'}
                        key={car}
                        onClick={() => setActivePriceTab(car)}
                    >
                        {car.name}
                    </li>
                ))}
            </ul>
            <div className="by-price__tabs-content">
                <Swiper
                    slidesPerView={4.2}
                    spaceBetween={30}
                    navigation
                >
                    {filteredByPriceCars.map((car) => (
                        <SwiperSlide key={car.id}>
                            <Card car={car} addToFavorite={addToFavorite} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {uniquePrices.map((priceRange) => (
                activePriceTab.name === priceRange.name && (
                    <Link className="by-price__btn-show-all show-all-btn-font"
                        to={`/find-your-car?priceRange=${priceRange.valueFrom}-${priceRange.valueTo}`}
                    >View all {priceRange.name}</Link>
                )
            ))}
        </>
    )
}