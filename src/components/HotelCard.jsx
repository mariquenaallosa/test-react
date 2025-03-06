import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Stars from "./RenderStars";
import DynamicIcon from "./DynamicIcon";

const HotelCard = ({ hotel }) => {
  const { id, name, address, stars, image, totalPrice, boardbases, amenities } = hotel;

  // Format totalPrice to display with 2 decimal places
  const formattedtotalPrice = Number.parseFloat(totalPrice).toFixed(0);

  // Split amenities into visible and remaining ones
  const visibleAmenities = amenities?.slice(0, 5);
  const remainingAmenities = amenities?.slice(5);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[var(--background)] shadow-sm rounded-xl p-6 max-w-screen-lg w-full sm:px-4 hover:shadow-md transition-shadow border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-[var(--secondary)]">{name}</h3>
          <Stars stars={stars} className="text-[var(--accent)] text-2xl" /> {/* Destacar estrellas */}
        </div>
        <p className="text-[var(--text)] flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={faLocationDot} className="text-[var(--primary)]" />
          <a
            href={`https://www.google.com/maps?q=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text)] hover:text-[var(--primary)] hover:underline"
          >
            {address}
          </a>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div className="relative w-full h-96 md:w-[400px] rounded-lg overflow-hidden">
            <img src={image} alt={name} className="h-full w-full object-cover" />
            <div className="absolute top-0 right-0 bg-[var(--accent)] px-3 py-1 m-2 rounded-full text-sm font-semibold text-white">
              ${formattedtotalPrice}
            </div>
          </div>
          <div className="w-full">
            {/* Boardbases Section */}
            {boardbases && boardbases.length > 0 && (
              <div className="mb-6">
                <ul className="flex flex-col gap-3">
                  {boardbases.map((boardbase, index) => (
                    <li key={`${id}-boardbase-${index}`} className="flex items-center gap-2 text-[var(--text)]">
                      <DynamicIcon word={boardbase} className="text-[var(--primary)]" />
                      {boardbase}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Separador entre boardbases y amenities */}
            {(boardbases && boardbases.length > 0) && (
              <hr className="border-t border-gray-200 my-6" />
            )}

            {/* Amenities Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="flex flex-col gap-3">
                {visibleAmenities?.map((amenity, index) => (
                  <li key={`${id}-amenity-${index}`} className="flex items-center gap-2 text-[var(--text)]">
                    <DynamicIcon word={amenity.code} className="text-[var(--primary)]" />
                    {amenity.name}
                  </li>
                ))}
              </ul>

              {remainingAmenities?.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {remainingAmenities.map((amenity, index) => (
                    <li key={`${id}-remaining-amenity-${index}`} className="flex items-center gap-2 text-[var(--text)]">
                      <DynamicIcon word={amenity.code} className="text-[var(--primary)]" />
                      {amenity.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button className="w-full bg-[var(--primary)] hover:bg-[var(--secondary)] text-white py-3 rounded-lg transition-colors mt-6 font-medium">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;