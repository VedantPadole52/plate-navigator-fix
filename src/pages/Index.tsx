import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import PopularRestaurants from "@/components/PopularRestaurants";
import AppPromo from "@/components/AppPromo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedRestaurants />
        <PopularRestaurants />
        <AppPromo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
