import React, { useState } from "react";
import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';
import isURL from 'validator/lib/isURL';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselShopping({ filter, headingTitle }) {
    let settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    console.log(filter);
    console.log(headingTitle);
    // let categoryBasedProducts = (filter) ? filter.products : [];
    let categoryBasedProducts = filter.products;
    // let dummyProductImage = '/img/samsung_mob.jpg';
    // console.log(isURL(product.image));
    // console.log(isURL(categoryBasedProducts[10].image));
    return (

        <>
            <div className="container-fluid vesitable py-5">
                <div className="container py-5">
                    {(headingTitle != "" && headingTitle.length > 0) &&
                        <h1 className="mb-3">{headingTitle}</h1>
                    }

                    <Slider {...settings}>
                        {categoryBasedProducts.map((product) => (
                            // console.log(isURL(product.image));

                            <div className="border border-primary rounded position-relative vesitable-item">
                                <Link href={'/shop/product/' + product.id}>
                                    <div className="vesitable-img">

                                        <Image
                                            // src={!product.image || !isURL(product.image) ? dummyProductImage : product.image}
                                            src={product.image}
                                            alt={product.title}
                                            width={500}
                                            height={500}
                                            className="img-fluid w-100 rounded-top"
                                        />

                                    </div>
                                </Link>
                                <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                                <div className="p-4 rounded-bottom">
                                    <Link href={'shop/product/' + product.id}><h4>{product.title.substring(0, 30) + "..."}</h4></Link>
                                    <p>{product.description.substring(0, 110) + "..."}</p>
                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                        <p className="text-dark fs-5 fw-bold mb-0">${product.price}</p>
                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </Slider >
                </div >
            </div >
        </>
    )
}