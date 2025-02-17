import { useState } from 'react';

export default function PaginationExample({ products }) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indices of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div>
      <h1>Pagination Example</h1>
      <ul>
        {currentItems.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

// Fetch data
export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.in/api/products');
  const apiProductData = await res.json();
  const products = apiProductData.products;

  return {
    props: {
      products,
    },
  };
}
