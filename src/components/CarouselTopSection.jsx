import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

const CarouselTopSection = ({ items, currentPath, onNavigate, renderItem }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      const index = items.findIndex(item => item.url === currentPath);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }, [currentPath, items]);
  
    const next = useCallback(() => {
      setCurrentIndex(current => (current + 1) % items.length);
    }, [items.length]);
  
    const previous = useCallback(() => {
      setCurrentIndex(current => current === 0 ? items.length - 1 : current - 1);
    }, [items.length]);
  
    const handleItemClick = (item) => {
      onNavigate(item.url);
    };
  
    return (
      <div className="w-full relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item) => (
              <div 
                key={item.id}
                className="w-full flex-shrink-0 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                {renderItem(item)}
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            previous();
          }}
          className="absolute top-[100px] left-4 h-8 w-8 flex items-center justify-center rounded-full bg-white text-black shadow-md"
          aria-label="Previous slide"
        >
          <ArrowLeft size="16" />
        </button>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute top-[100px] right-4 h-8 w-8 flex items-center justify-center rounded-full bg-white text-black shadow-md"
          aria-label="Next slide"
        >
          <ArrowRight size="16" />
        </button>
      </div>
    );
  };
  
  CarouselTopSection.propTypes = {
    items: PropTypes.array.isRequired,
    currentPath: PropTypes.string.isRequired,
    onNavigate: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
  }

  export default CarouselTopSection;
  