
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card/Card';
import { Cars } from '../../data/cars';
import 'swiper/css';

export default function NewCars() {

    const lastFourCars = Cars.slice(-6);

    return (
        <>
            <h2 className="new-cars__title new-cars-title-font">New cars every day</h2>
            <div className="new-cars__content">
                <Swiper slidesPerView={4.2} spaceBetween={30}>
                    {lastFourCars.map(car => (
                        <SwiperSlide key={car.brand + car.model}>
                            <Card car={car} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <button className="new-cars__btn-show-all show-all-btn-font">View all ({Cars.length}) cars</button>
        </>
    )
}