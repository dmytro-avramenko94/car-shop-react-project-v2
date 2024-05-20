import { useLocalStorage } from '../hooks/useLocalStorage';
import { Cars } from '../data/cars';
import Card from '../components/Card/Card';

export default function FavoriteCars() {
    const [favoriteCarIdList, setFavoriteCarIdList] = useLocalStorage([], 'favorite');

    const addToFavorite = (id) => {
        setFavoriteCarIdList(favoriteCarIds => {
            const isFavorite = favoriteCarIds.includes(id);

            return (
                isFavorite ? favoriteCarIds.filter(carId => carId !== id) : [...favoriteCarIds, id]
            )
        });
    };

    return (
        <section className="favorite-cars">
            <div className="favorite-cars__container container">
                <h1 className="favorite-cars__title">Your Favorite Cars</h1>
                <p className="favorite-cars__sub-title">✔️ Choose your favorite car and we will make the best service for you ✔️ </p>
                <div className="favorite-cars__content">
                    {favoriteCarIdList.map(id => (
                        <Card key={id} car={Cars.find(car => car.id === id)} addToFavorite={addToFavorite} />
                    ))}
                </div>
            </div>

        </section>
    );
}