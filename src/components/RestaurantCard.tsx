import { motion } from "framer-motion";
import { Star, Clock, MapPin, Heart } from "lucide-react";
import { Restaurant } from "@/types/restaurant";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RestaurantCardProps {
  restaurant: Restaurant;
  index: number;
}

const RestaurantCard = ({ restaurant, index }: RestaurantCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 card-shadow hover:card-hover-shadow transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {restaurant.featured && (
            <Badge className="bg-secondary text-secondary-foreground">
              Featured
            </Badge>
          )}
          {restaurant.isOpen ? (
            <Badge className="bg-accent text-accent-foreground">Open</Badge>
          ) : (
            <Badge variant="secondary">Closed</Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 h-9 w-9 rounded-full bg-card/90 hover:bg-card shadow-md"
        >
          <Heart className="h-4 w-4 text-muted-foreground hover:text-primary" />
        </Button>

        {/* Price Range */}
        <div className="absolute bottom-3 left-3">
          <span className="px-2 py-1 bg-card/90 rounded-md text-sm font-medium text-foreground">
            {restaurant.priceRange}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {restaurant.name}
            </h3>
            <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
          </div>
          <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 fill-rating text-rating" />
            <span className="text-sm font-semibold text-foreground">{restaurant.rating}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {restaurant.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            <span>{restaurant.distance}</span>
          </div>
          {restaurant.deliveryTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{restaurant.deliveryTime}</span>
            </div>
          )}
          <span className="text-xs">({restaurant.reviewCount} reviews)</span>
        </div>
      </div>
    </motion.article>
  );
};

export default RestaurantCard;
