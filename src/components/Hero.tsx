import { motion } from "framer-motion";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-16 md:py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              🍽️ Discover Your Next Favorite Meal
            </motion.span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Navigate to the
              <span className="block text-primary">Perfect Plate</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Explore curated restaurants, read authentic reviews, and find your perfect dining experience with PlatePoint Navigator.
            </p>

            {/* Search Form */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="What are you craving?"
                  className="pl-12 h-14 text-base bg-card border-border shadow-sm"
                />
              </div>
              <div className="relative flex-1 sm:max-w-[180px]">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Location"
                  className="pl-12 h-14 text-base bg-card border-border shadow-sm"
                />
              </div>
              <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 shadow-lg">
                <span className="mr-2">Search</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div>
                <p className="font-display text-3xl font-bold text-foreground">2,500+</p>
                <p className="text-sm text-muted-foreground">Restaurants</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Reviews</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Cuisines</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop"
                alt="Delicious food spread"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Top Rated</p>
                    <p className="text-sm text-muted-foreground">4.8+ average</p>
                  </div>
                </div>
              </motion.div>

              {/* Another Floating Card */}
              <motion.div
                className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-xl border border-border"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Fast Delivery</p>
                    <p className="text-sm text-muted-foreground">Under 30 min</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
