import Link from 'next/link'
import FontAwesomeIcon from "@/components/FontAwesomeIcon";

export default function NavMenu() {
    return (
        <>
            <div className="container-fluid fixed-top">
                <div className="container topbar bg-primary d-none d-lg-block">
                    <div className="d-flex justify-content-between">
                        <div className="top-info ps-2">
                            {/* <small className="me-3"> */}
                            {/* <i className="fas fa-map-marker-alt me-2 text-secondary"></i> */}
                            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} className="me-2 text-secondary" />
                            <a href="#" className="text-white">123 Street, New York</a>
                            {/* </small> */}
                            {/* <small className="me-3"> */}
                            {/* <i className="fas fa-envelope me-2 text-secondary"></i> */}
                            <FontAwesomeIcon icon={['fas', 'envelope']} className="me-2 text-secondary" />
                            <a href="#" className="text-white">Email@Example.com</a>
                            {/* </small> */}
                        </div>
                        <div className="top-link pe-2">
                            <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                            <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
                            <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
                        </div>
                    </div>
                </div>
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <Link href="/" className="nav-item nav-link active">Home</Link>
                                <Link href="/shop" className="nav-item nav-link">Shop</Link>
                                <Link href="/cart" className="nav-item nav-link">Cart</Link>
                                <Link href="/checkout" className="nav-item nav-link">Checkout</Link>
                                {/* <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                        <a href="cart.html" className="dropdown-item">Cart</a>
                                        <a href="chackout.html" className="dropdown-item">Chackout</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="404.html" className="dropdown-item">404 Page</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                            </div>
                            <div className="d-flex m-3 me-0">
                                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal">
                                    <FontAwesomeIcon icon={['fas', 'search']} className="text-primary" />
                                </button>
                                <a href="#" className="position-relative me-4 my-auto">
                                    <FontAwesomeIcon icon={['fas', 'shopping-bag']} className="fa-2x" />
                                    <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" >3</span>
                                </a>
                                <a href="#" className="my-auto">
                                    <FontAwesomeIcon icon={['fas', 'user']} className="fa-2x" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}