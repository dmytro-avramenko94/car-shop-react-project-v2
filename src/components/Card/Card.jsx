export default function Card({ car, addToFavorite }) {
    const handleAddToFavorite = () => {
        if (addToFavorite) {
            addToFavorite(car.id);
        }
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
                    src="./images/cars/favorite.svg"
                    alt="Add to favorite"
                    className="card__add-to-favorite"
                    onClick={handleAddToFavorite}
                />
            </div>
            <h2 className="card__price">${car.price}</h2>
        </div>
    );
}