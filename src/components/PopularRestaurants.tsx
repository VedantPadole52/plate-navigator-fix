import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "@/data/restaurants";

const filters = ["All", "Open Now", "Top Rated", "Fast Delivery", "Budget Friendly"];

const PopularRestaurants = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Open Now") return restaurant.isOpen;
    if (activeFilter === "Top Rated") return restaurant.rating >= 4.5;
    if (activeFilter === "Fast Delivery") return restaurant.deliveryTime?.includes("15") || restaurant.deliveryTime?.includes("25");
    if (activeFilter === "Budget Friendly") return restaurant.priceRange === "$" || restaurant.priceRange === "$$";
    return true;
  });

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-6"
        >
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Popular Near You
            </h2>
            <p className="text-muted-foreground">
              Trending restaurants in your area
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 group">
            See All Restaurants
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "bg-primary" : ""}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        {/* Restaurant Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRestaurants.map((restaurant, index) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No restaurants match your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularRestaurants;
