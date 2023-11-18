import React, { useState, useEffect } from 'react';

        const SearchBar = () => {
        const [searchTerm, setSearchTerm] = useState('');
        const [products, setProducts] = useState([]);

        useEffect(() => {
            // Fetch products from fakestoreapi.com JSON API
            fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
        }, []);

        const handleSearch = (e) => {
            setSearchTerm(e.target.value);
        };

        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div>
            <h2>Product Search</h2>
            <input
                type="text"
                placeholder="Search for products"
                value={searchTerm}
                onChange={handleSearch}
            />
            <table>
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map((product) => (
                    <tr key={product.title}>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>${product.price}</td>
                    <td>
                        <img src={product.image} alt=""></img>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        );
        };

export default SearchBar;
