import Image from 'next/image';

export default function Sidebar() {
    return (
        <div className="col-lg-3">
            <div className="row g-4">
                <div className="col-lg-12">
                    <div className="mb-3">
                        <h4>Categories</h4>
                        <ul className="list-unstyled fruite-categorie">
                            <li>
                                <div className="d-flex justify-content-between fruite-name">
                                    <a href="#"><i className="fas fa-apple-alt me-2"></i>Apples</a>
                                    <span>(3)</span>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between fruite-name">
                                    <a href="#"><i className="fas fa-apple-alt me-2"></i>Oranges</a>
                                    <span>(5)</span>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between fruite-name">
                                    <a href="#"><i className="fas fa-apple-alt me-2"></i>Strawbery</a>
                                    <span>(2)</span>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between fruite-name">
                                    <a href="#"><i className="fas fa-apple-alt me-2"></i>Banana</a>
                                    <span>(8)</span>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex justify-content-between fruite-name">
                                    <a href="#"><i className="fas fa-apple-alt me-2"></i>Pumpkin</a>
                                    <span>(5)</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="mb-3">
                        <h4 className="mb-2">Price</h4>
                        <input type="range" className="form-range w-100" id="rangeInput" name="rangeInput" min="0" max="500" defaultValue="0" onInput={(e) => document.getElementById('amount').value = e.target.value} />
                        <output id="amount" name="amount" min="0" max="500" htmlFor="rangeInput">0</output>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="mb-3">
                        <h4>Additional</h4>
                        <div className="mb-2">
                            <input type="radio" className="me-2" id="Categories-1" name="Categories-1" value="Beverages" />
                            <label htmlFor="Categories-1"> Organic</label>
                        </div>
                        <div className="mb-2">
                            <input type="radio" className="me-2" id="Categories-2" name="Categories-1" value="Beverages" />
                            <label htmlFor="Categories-2"> Fresh</label>
                        </div>
                        <div className="mb-2">
                            <input type="radio" className="me-2" id="Categories-3" name="Categories-1" value="Beverages" />
                            <label htmlFor="Categories-3"> Sales</label>
                        </div>
                        <div className="mb-2">
                            <input type="radio" className="me-2" id="Categories-4" name="Categories-1" value="Beverages" />
                            <label htmlFor="Categories-4"> Discount</label>
                        </div>
                        <div className="mb-2">
                            <input type="radio" className="me-2" id="Categories-5" name="Categories-1" value="Beverages" />
                            <label htmlFor="Categories-5"> Expired</label>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <h4 className="mb-3">Featured products</h4>
                    <div className="d-flex align-items-center justify-content-start">
                        <div className="rounded me-4" style={{ width: '100px', height: '100px' }}>
                            <Image src="/img/featur-1.jpg" className="img-fluid rounded" alt="Big Banana" width={100} height={100} />
                        </div>
                        <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="d-flex mb-2">
                                <h5 className="fw-bold me-2">2.99 $</h5>
                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start">
                        <div className="rounded me-4" style={{ width: '100px', height: '100px' }}>
                            <Image src="/img/featur-2.jpg" className="img-fluid rounded" alt="Big Banana" width={100} height={100} />
                        </div>
                        <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="d-flex mb-2">
                                <h5 className="fw-bold me-2">2.99 $</h5>
                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start">
                        <div className="rounded me-4" style={{ width: '100px', height: '100px' }}>
                            <Image src="/img/featur-3.jpg" className="img-fluid rounded" alt="Big Banana" width={100} height={100} />
                        </div>
                        <div>
                            <h6 className="mb-2">Big Banana</h6>
                            <div className="d-flex mb-2">
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star text-secondary"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="d-flex mb-2">
                                <h5 className="fw-bold me-2">2.99 $</h5>
                                <h5 className="text-danger text-decoration-line-through">4.11 $</h5>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-4">
                        <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">View More</a>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="position-relative">
                        <Image src="/img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt="Fresh Fruits Banner" width={500} height={300} />
                        <div className="position-absolute" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
                            <h3 className="text-secondary fw-bold">Fresh <br /> Fruits <br /> Banner</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}