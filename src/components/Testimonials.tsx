
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Testimonials() {
    let settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="container-fluid testimonial py-5">
                <div className="container py-5">
                    <div className="testimonial-header text-center">
                        <h4 className="text-primary">Our Testimonial</h4>
                        <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
                    </div>
                    <Slider {...settings}>
                        <div className="testimonial-item img-border-radius bg-light rounded p-4">
                            <div className="position-relative">
                                <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{width: "30px", height: "0"}}></i>
                                <div className="mb-4 pb-4 border-bottom border-secondary">
                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                </div>
                                <div className="d-flex align-items-center flex-nowrap">
                                    <div className="bg-secondary rounded">
                                        <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{width: "100px", height: "100px"}} alt="" />
                                    </div>
                                    <div className="ms-4 d-block">
                                        <h4 className="text-dark">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item img-border-radius bg-light rounded p-4">
                            <div className="position-relative">
                                <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: "30px", right: 0}}></i>
                                <div className="mb-4 pb-4 border-bottom border-secondary">
                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                </div>
                                <div className="d-flex align-items-center flex-nowrap">
                                    <div className="bg-secondary rounded">
                                        <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{width: "100px", height: "100px"}} alt="" />
                                    </div>
                                    <div className="ms-4 d-block">
                                        <h4 className="text-dark">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item img-border-radius bg-light rounded p-4">
                            <div className="position-relative">
                                <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{width: "30px", height: "0"}}></i>
                                <div className="mb-4 pb-4 border-bottom border-secondary">
                                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                </div>
                                <div className="d-flex align-items-center flex-nowrap">
                                    <div className="bg-secondary rounded">
                                        <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{width: "100px", height: "100px"}} alt="" />
                                    </div>
                                    <div className="ms-4 d-block">
                                        <h4 className="text-dark">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                            <i className="fas fa-star text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}