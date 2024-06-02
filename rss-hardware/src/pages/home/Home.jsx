import React from "react";
import Layout from "../../components/layout/layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/tracks/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  // console.log(cartItem);

  return (
    <Layout>
      <HeroSection></HeroSection>
      <Filter></Filter>
      <ProductCard></ProductCard>
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={"/allproducts"}>
          <button className="bg-gray-300 px-5 py-2 rounded-xl">See More</button>
        </Link>
      </div>
      <Track></Track>
      {/* <Testimonial></Testimonial> */}
    </Layout>
  );
}

export default Home;
