import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "@/data/restaurants";

const FeaturedRestaurants = () => {
  const featuredRestaurants = restaurants.filter((r) => r.featured);

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8"
        >
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Featured Restaurants
            </h2>
            <p className="text-muted-foreground">
              Hand-picked selections from our culinary experts
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 group">
            View All
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredRestaurants.map((restaurant, index) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
