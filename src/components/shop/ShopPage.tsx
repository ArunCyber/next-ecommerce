import { useState } from 'react';
import Sidebar from "./Sidebar";
import Image from 'next/image';
import Link from 'next/link';




export default function ShopPage({ products, brands, categories }) {
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the indices of items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = products.slice(startIndex, endIndex);

    // Calculate total pages
    const totalPages = Math.ceil(products.length / itemsPerPage);
    let dummyProductImage = 'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691074519203-galaxy%20S22%205G.jpg';

    return (
        <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <h1 className="mb-4">Fresh fruits shop</h1>
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="row g-4">
                            <div className="col-xl-3">
                                <div className="input-group w-100 mx-auto d-flex">
                                    <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                </div>
                            </div>
                            <div className="col-6"></div>
                            <div className="col-xl-3">
                                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                    <label htmlFor="fruits">Default Sorting:</label>
                                    <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                                        <option value="volvo">Nothing</option>
                                        <option value="saab">Popularity</option>
                                        <option value="opel">Organic</option>
                                        <option value="audi">Fantastic</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">

                            <Sidebar brands={brands} categories={categories} />

                            <div className="col-lg-9">
                                <div className="row g-4 justify-content-center">

                                    {currentItems.map((product) => (

                                        <div key={product.id} className="col-md-6 col-lg-6 col-xl-4">
                                            <div className="rounded position-relative fruite-item">
                                                <Link href={'/shop/product/' + product.id}>
                                                    <div className="fruite-img">
                                                        <Image
                                                            src={product.image !== "" ? product.image : dummyProductImage}
                                                            alt={product.title}
                                                            width={500}
                                                            height={500}
                                                            className="img-fluid w-100 rounded-top"
                                                        />
                                                        {/* <Image src={product.image} className="img-fluid w-100 rounded-top" alt={product.title} width={500} height={500} /> */}
                                                    </div>
                                                </Link>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <Link href={'/shop/product/' + product.id}><h4>{product.title.substring(0, 30) + "..."}</h4></Link>
                                                    <p>{product.description.substring(0, 110) + "..."}</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">${product.price}</p>
                                                        <Link href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                    {/* Repeat similar blocks for other products */}
                                    <div className="col-12">
                                        <div className="pagination d-flex justify-content-center mt-5">

                                            {currentPage > 1 && (
                                                <a
                                                    className="rounded"
                                                    onClick={() => setCurrentPage(currentPage - 1)}
                                                >
                                                    &laquo;
                                                </a>
                                            )}

                                            {Array.from({ length: totalPages }, (_, index) => (
                                                <a
                                                    className={`rounded ${currentPage === index + 1 ? 'active' : ''}`}
                                                    key={index}
                                                    onClick={() => setCurrentPage(index + 1)}
                                                    disabled={currentPage === index + 1}
                                                >
                                                    {index + 1}
                                                </a>
                                            ))}

                                            {currentPage < totalPages && (
                                                <a
                                                    className="rounded"
                                                    onClick={() => setCurrentPage(currentPage + 1)}
                                                >
                                                    &raquo;
                                                </a>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
