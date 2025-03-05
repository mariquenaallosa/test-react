import { Search } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="bg-[var(--background)] shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-[var(--primary)]">TravelStay</div>

        {/* Enlaces */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors font-medium"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors font-medium"
          >
            Hoteles
          </a>
          <a
            href="#"
            className="text-[var(--secondary)] hover:text-[var(--accent)] transition-colors font-medium"
          >
            Destinos
          </a>
        </div>

        {/* Botón de búsqueda (opcional) */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Search className="text-[var(--secondary)]" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;