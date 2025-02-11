export default function Shop(req, res) {
    // const products = [
    //     { id: 1, name: 'Product 1', price: 100 },
    //     { id: 2, name: 'Product 2', price: 200 },
    //     { id: 3, name: 'Product 3', price: 300 },
    // ];

    const products = fetch('https://fakestoreapi.in/api/products')
            .then(res=>res.json())
            .then(json=>console.log(json.products))
    // res.status(200).json(products);
// console.log(products[0]);

    return (
        <>
            <h1>Shop</h1>
        </>
    )
}