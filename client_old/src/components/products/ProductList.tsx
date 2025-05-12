'use client';

import { useEffect, useState } from 'react';
import { getProducts } from '@/services/productService';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts()
            .then(products => setProducts(products))
            .catch(err => console.log('Error:', err));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">PS3 Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-sm">
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-md mb-2"
                        />
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
} 