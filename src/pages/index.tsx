import Layout from '../app/layout'

import Banner from "@/components/Banner";
import FeaturesPayment from "@/components/FeaturesPayment";
import FeaturesProducts from "@/components/FeaturesProducts";
import TabCarousel from "@/components/TabCarousel";
import Testimonials from "@/components/Testimonials";
import FactStar from "@/components/FactStar";
import CarouselShopping from "@/components/CarouselShopping";
import InnerBanner from '@/components/InnerBanner';
import BestsellerThreeCol from '@/components/BestsellerThreeCol';

export default function Home() {

  return (
    <Layout>
      <Banner />
      <FeaturesPayment />
      <TabCarousel />
      <FeaturesProducts />
      <CarouselShopping />
      <InnerBanner />
      <BestsellerThreeCol />
      <FactStar />
      <Testimonials />
    </Layout>
  )
}