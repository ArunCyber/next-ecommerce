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

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.in/api/products/`);
  const products = await res.json();

  return {
    props: { products },
  };
}

export default function Home({ products }) {

  return (
    <Layout>
      <Banner />
      <FeaturesPayment />
      {/* <TabCarousel /> */}
      {/* <FeaturesProducts /> */}
      <CarouselShopping filter={products} headingTitle='Fresh Organic Vegetables' />
      <InnerBanner />
      {/* <BestsellerThreeCol /> */}
      {/* <FactStar /> */}
      <Testimonials />
    </Layout>
  )
}