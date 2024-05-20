import { useLocalStorage } from '../hooks/useLocalStorage';
import { Cars } from '../data/cars';
import Card from '../components/Card/Card';

export default function FavoriteCars() {
    const [favorite, setFavorite] = useLocalStorage([], 'favorite');

    const addToFavorite = (id) => {
        const newCar = Cars.find(car => car.id === id);
        if (newCar && !favorite.some(car => car.id === id)) {
            setFavorite([...favorite, newCar]);
        }
    };

    return (
        <>
            <h1>Favorite Cars</h1>
            <div className="favorite-cars-container">
                {favorite.map(car => (
                    <Card key={car.id} car={car} />
                ))}
            </div>
        </>
    );
}