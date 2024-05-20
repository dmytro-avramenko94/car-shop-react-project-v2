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
        <>
            <h1>Favorite Cars</h1>
            <div className="favorite-cars-container">
                {favoriteCarIdList.map(id => (
                    <Card key={id} car={Cars.find(car => car.id === id)} addToFavorite={addToFavorite} />
                ))}
            </div>
        </>
    );
}