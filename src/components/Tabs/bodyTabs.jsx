import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Card/Card";
import { Cars } from '../../data/cars'
import 'swiper/css';
import { Link } from "react-router-dom";
import { useLocalStorage } from '../../hooks/useLocalStorage';


export default function UniqueBodyTabs() {
    const [favorite, setFavorite] = useLocalStorage([], 'favorite');
    const uniqueBody = [...new Set(Cars.map(car => car.body))];

    const [activeTab, setActiveTab] = useState(uniqueBody.length > 0 ? uniqueBody[0] : '');

    function isCarBodyActive(car) {
        return car.body === activeTab
    }

    const filteredCars = Cars.filter((car) => isCarBodyActive(car))

    const addToFavorite = (id) => {
        const newCar = Cars.find(car => car.id === id);
        if (newCar && !favorite.some(car => car.id === id)) {
            setFavorite([...favorite, newCar]);
        }
    };

    return (
        <>
            <ul className="by-size__tabs">
                {uniqueBody.map((bodyType) => (
                    <li className={activeTab === bodyType ? 'by-size__tab by-size__active-body-tab' : 'by-size__tab'}
                        key={bodyType}
                        onClick={() => setActiveTab(bodyType)}
                    >
                        {bodyType}
                    </li>
                ))}
            </ul>

            <div className="by-size__tabs-content">
                <Swiper
                    slidesPerView={4.2}
                    spaceBetween={30}
                    navigation
                >
                    {filteredCars.map((car) => (
                        <SwiperSlide key={car.id}>
                            <Card car={car} addToFavorite={addToFavorite} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {uniqueBody.map((bodyType) => (
                activeTab === bodyType && (
                    <Link className="by-size__btn-show-all show-all-btn-font"
                        to={`/find-your-car?bodyType=${bodyType}`}
                    >View all {bodyType === 'Hatch' ? `${bodyType}es` : `${bodyType}s`}</Link>
                )
            ))}
        </>
    );
}