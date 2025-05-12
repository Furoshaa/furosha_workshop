import { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
    name: string;
    price: number;
    image: string;
}

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        console.log('Fetching products...');
        axios.get<{ success: boolean; data: Product[] }>('/api/productsPS3')
            .then(res => {
                console.log('API Response:', res.data);
                setProducts(res.data.data);
            })
            .catch(err => {
                console.error('Error fetching products:', err);
            });
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                    <div class='product-card'>
                        <div key={product.name}>
                            <h2>{product.name}</h2>
                            <img src={product.image} alt={product.name} />
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default ProductList;
