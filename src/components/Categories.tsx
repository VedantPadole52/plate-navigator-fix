import { motion } from "framer-motion";
import { categories } from "@/data/restaurants";

const Categories = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Explore by Cuisine
          </h2>
          <p className="text-muted-foreground">
            Discover restaurants by your favorite cuisine type
          </p>
        </motion.div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center p-3 md:p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 group"
            >
              <span className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform">
                {category.icon}
              </span>
              <span className="text-xs md:text-sm font-medium text-foreground truncate w-full text-center">
                {category.name}
              </span>
              <span className="text-xs text-muted-foreground hidden md:block">
                {category.count} places
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
