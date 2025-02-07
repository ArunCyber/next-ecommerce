import Layout from '../app/layout'

import Banner from "@/components/Banner";
import FeaturesPayment from "@/components/FeaturesPayment";
import TabCarousel from "@/components/TabCarousel";

export default function Home() {

  return (
    <Layout>
      <Banner />
      <FeaturesPayment />
      <TabCarousel />
      <h1>Welcome to Next.js Home Page</h1>
    </Layout>
  )
}