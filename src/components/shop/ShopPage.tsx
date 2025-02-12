import Sidebar from "./Sidebar";
import Image from 'next/image';

export async function getServerSideProps() {
    const products = fetch('https://fakestoreapi.in/api/products')
            .then(res=>res.json())
            // .then(json=>console.log(json.products))

            return {
                props: {
                    products,
                },
            };
}


export default function ShopPage({ products }) {
    console.log(products)
//     return (
//         <div className="container-fluid fruite py-5">
//             <div className="container py-5">
//                 <h1 className="mb-4">Fresh fruits shop</h1>
//                 <div className="row g-4">
//                     <div className="col-lg-12">
//                         <div className="row g-4">
//                             <div className="col-xl-3">
//                                 <div className="input-group w-100 mx-auto d-flex">
//                                     <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
//                                     <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
//                                 </div>
//                             </div>
//                             <div className="col-6"></div>
//                             <div className="col-xl-3">
//                                 <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
//                                     <label htmlFor="fruits">Default Sorting:</label>
//                                     <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
//                                         <option value="volvo">Nothing</option>
//                                         <option value="saab">Popularity</option>
//                                         <option value="opel">Organic</option>
//                                         <option value="audi">Fantastic</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row g-4">

//                             <Sidebar />

//                             <div className="col-lg-9">
//                                 <div className="row g-4 justify-content-center">

//                                     {products.map((product) => (
//                                         <div key={product.id} className="col-md-6 col-lg-6 col-xl-4">
//                                             <div className="rounded position-relative fruite-item">
//                                                 <div className="fruite-img">
//                                                     <Image src={product.image} className="img-fluid w-100 rounded-top" alt={product.title} width={500} height={500} />
//                                                 </div>
//                                                 <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>Fruits</div>
//                                                 <div className="p-4 border border-secondary border-top-0 rounded-bottom">
//                                                     <h4>{product.title}</h4>
//                                                     <p>{product.description}</p>
//                                                     <div className="d-flex justify-content-between flex-lg-wrap">
//                                                         <p className="text-dark fs-5 fw-bold mb-0">${product.price}</p>
//                                                         <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}

//                                     {/* Repeat similar blocks for other products */}
//                                     <div className="col-12">
//                                         <div className="pagination d-flex justify-content-center mt-5">
//                                             <a href="#" className="rounded">&laquo;</a>
//                                             <a href="#" className="active rounded">1</a>
//                                             <a href="#" className="rounded">2</a>
//                                             <a href="#" className="rounded">3</a>
//                                             <a href="#" className="rounded">4</a>
//                                             <a href="#" className="rounded">5</a>
//                                             <a href="#" className="rounded">6</a>
//                                             <a href="#" className="rounded">&raquo;</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
}