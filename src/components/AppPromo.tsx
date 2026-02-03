import { motion } from "framer-motion";
import { Smartphone, Apple, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppPromo = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium mb-6">
              📱 Get the App
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Order food on the go with our mobile app
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Download the PlatePoint Navigator app for exclusive deals, faster ordering, and real-time order tracking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-3 h-14 px-6"
              >
                <Apple className="h-6 w-6" />
                <div className="text-left">
                  <p className="text-xs opacity-80">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-3 h-14 px-6"
              >
                <PlayCircle className="h-6 w-6" />
                <div className="text-left">
                  <p className="text-xs opacity-80">Get it on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-10">
              <div>
                <p className="font-display text-2xl font-bold text-primary-foreground">500K+</p>
                <p className="text-sm text-primary-foreground/70">Downloads</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-primary-foreground">4.8</p>
                <p className="text-sm text-primary-foreground/70">App Rating</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-primary-foreground">Free</p>
                <p className="text-sm text-primary-foreground/70">Delivery*</p>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 md:w-72 h-[500px] md:h-[560px] bg-foreground rounded-[40px] p-3 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[32px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=700&fit=crop"
                    alt="App preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Notch */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -right-8 top-20 bg-card p-3 rounded-xl shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl">🍕</span>
              </motion.div>
              <motion.div
                className="absolute -left-8 bottom-32 bg-card p-3 rounded-xl shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl">🍜</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
