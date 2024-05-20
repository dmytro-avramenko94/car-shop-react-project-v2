import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function Card({ car, addToFavorite }) {

    const [favoriteCarIdList, setFavoriteCarIdList] = useLocalStorage([], 'favorite');


    const handleAddToFavorite = () => {
        if (addToFavorite) {
            addToFavorite(car.id);
            setFavoriteCarIdList(favoriteCarIds => {
                const isAdded = favoriteCarIds.includes(car.id);
                return isAdded ? favoriteCarIds.filter(carId => carId !== car.id) : [...favoriteCarIds, car.id];
            });
        }
    };

    const addedToFavorite = () => {
        const isAdded = favoriteCarIdList.includes(car.id);
        return isAdded ? "./images/cars/favorite-filled.svg" : "./images/cars/favorite.svg";
    };

    return (
        <div className="card">
            <img src={car.image} alt="" className="card__image" />
            <div className="card__data-wrap">
                <div className="card__data">
                    <h3 className="card__title card-title-font">{car.year} {car.brand} {car.model}</h3>
                    <p className="card__type card-description-font">{car.type}</p>
                    <p className="card__mileage-transmission card-description-font">
                        {car.mileage} km • {car.transmission}
                    </p>
                    <p className="card__body card-description-font">
                        Type of body: {car.body}
                    </p>
                    <p className="card__fuel card-description-font">
                        Fuel type: {car.fuel}
                    </p>
                </div>
                <img
                    src={addedToFavorite()}
                    alt="Add to favorite"
                    className="card__add-to-favorite"
                    onClick={handleAddToFavorite}
                />
            </div>
            <h2 className="card__price">${car.price}</h2>
        </div>
    );
}
