import { Search } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold text-primary">TravelStay</div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-accent transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-accent transition-colors">Hotels</a>
          <a href="#" className="text-gray-700 hover:text-accent transition-colors">Destinations</a>
        </div>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search hotels..." 
            className="py-2 px-4 pr-10 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;