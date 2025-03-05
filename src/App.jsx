import { useState, useEffect } from "react";
import { fetchHotels } from "./services/api";
import Spinner from "./components/Spinner";
import NavBar from "./components/NavBar";
import HotelList from "./components/HotelList";

function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHotels = async () => {
      try {
        setLoading(true);
        const data = await fetchHotels();
        setHotels(data.hotels || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to load hotels. Please try again later.");
        setLoading(false);
        console.error("Error fetching hotels:", err);
      }
    };

    getHotels();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Discover Amazing Hotels</h1>

        {loading ? (
          <Spinner />
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
            {error}
          </div>
        ) : (
          <HotelList hotels={hotels} />
        )}
      </main>
    </div>
  );
}

export default App;