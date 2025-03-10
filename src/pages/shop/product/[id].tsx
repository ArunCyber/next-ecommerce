import { useRouter } from 'next/router';


import Layout from '../../../app/layout';
import InnerPagesBanner from '@/components/InnerPagesBanner';
import Sidebar from '@/components/shop/Sidebar';
import CarouselShopping from "@/components/CarouselShopping";
import Image from 'next/image';



export async function getServerSideProps(context) {
    const { id } = context.params;
    const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    const product = await res.json();
    console.log(product)
    const res1 = await fetch('https://fakestoreapi.in/api/products?limit=5');
    const productBrands = await res1.json();

    const res2 = await fetch('https://fakestoreapi.in/api/products/category');
    const productCats = await res2.json();

    const res3 = await fetch(`https://fakestoreapi.in/api/products/category?type=${product.product.category}`);
    const catBasedProducts = await res3.json();

    return {
        props: { product, productBrands, productCats, catBasedProducts },
    };
}

export default function ProductPage({ product, productBrands, productCats, catBasedProducts }) {
    const router = useRouter();
    const { id } = router.query; // Access the dynamic route parameter
    const productData = product.product;
    console.log(productData);
    return (
        <Layout>
            <InnerPagesBanner heading={`Product: ${productData.title}`} />
            <div className="container-fluid py-5 mt-5">
                <div className="container py-5">
                    <div className="row g-4 mb-5">
                        <div className="col-lg-8 col-xl-9">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="border rounded">
                                        <Image src={productData.image} className="img-fluid rounded" alt={productData.title} width={500} height={500} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="fw-bold mb-3">{productData.title}</h4>
                                    <p className="mb-3">Category: {productData.category.charAt(0).toUpperCase() + productData.category.slice(1)}</p>
                                    <h5 className="fw-bold mb-3">${productData.price}</h5>
                                    <div className="d-flex mb-4">
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p className="mb-4">{productData.description}</p>
                                    <div className="input-group quantity mb-5" style={{ width: '100px' }}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control form-control-sm text-center border-0" defaultValue="1" />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <a href="#" className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary">
                                        <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                                    </a>
                                </div>
                                <div className="col-lg-12">
                                    <nav>
                                        <div className="nav nav-tabs mb-3">
                                            <button className="nav-link active border-white border-bottom-0" type="button" role="tab"
                                                id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                                aria-controls="nav-about" aria-selected="true">Description</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content mb-5">
                                        <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                            <p>{productData.description}</p>
                                        </div>
                                        {/* <div className="tab-pane" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                                            <div className="d-flex">
                                                <Image src="/img/avatar.jpg" className="img-fluid rounded-circle p-3" width={100} height={100} alt="Avatar" />
                                                <div>
                                                    <p className="mb-2" style={{ fontSize: '14px' }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Jason Smith</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <Image src="/img/avatar.jpg" className="img-fluid rounded-circle p-3" width={100} height={100} alt="Avatar" />
                                                <div>
                                                    <p className="mb-2" style={{ fontSize: '14px' }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Sam Peters</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p className="text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Sidebar brands={productBrands} categories={productCats} />

                    </div>
                    <h1 className="fw-bold mb-0">Related products</h1>
                    <div className="vesitable">

                        <CarouselShopping filter={catBasedProducts} headingTitle="" />

                    </div>
                </div>
            </div>
        </Layout>
    );
}