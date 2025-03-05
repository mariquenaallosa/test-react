import HotelCard from "./HotelCard";

const HotelList = ({ hotels }) => {
  if (!hotels || hotels.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-600">No hotels found. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;