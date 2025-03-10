import Layout from '../app/layout';
import InnerPagesBanner from '@/components/InnerPagesBanner';

export async function getServerSideProps() {
    const res = await fetch('https://fakestoreapi.in/api/products');
    const apiData = await res.json();

    const res1 = await fetch('https://fakestoreapi.in/api/products?limit=5');
    const productBrands = await res1.json();

    const res2 = await fetch('https://fakestoreapi.in/api/products/category');
    const productCats = await res2.json();

    return {
        props: {
            apiData,
            productBrands,
            productCats
        },
    };
}

export default function Login({ apiData, productBrands, productCats }) {
    return (
        <Layout>
            <InnerPagesBanner heading="Login" />

            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="p-5 bg-light rounded">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="text-center mx-auto" style={{ maxWidth: '700px' }}>
                                    <h1 className="text-primary">Sign in to continue</h1>
                                </div>
                            </div>

                            <div className="col-lg-3"></div>

                            <div className="col-lg-6">
                                <form action="">
                                    <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Name" />
                                    <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Password" />
                                    <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary" type="submit">Submit</button>
                                </form>
                            </div>

                            <div className="col-lg-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}