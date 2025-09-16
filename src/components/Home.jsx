import { motion } from 'framer-motion';

import Footer from "./layouts/Footer";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import { useState } from "react";
import { useSocket } from "../context/socket"
const Home = () => {

    const socket = useSocket();

    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const categories = ['All', 'Clothing', 'Electronics', 'Home', 'Sports', 'Toys'];

    const products = Array.from({ length: 12 }).map((_, i) => ({
        id: i + 1,
        title: `Product ${i + 1}`,
        price: (10 + i * 7).toFixed(2),
        category: categories[(i % (categories.length - 1)) + 1],
        image: `https://via.placeholder.com/400x320?text=Product+${i + 1}`,
        rating: (Math.random() * 2 + 3).toFixed(1),
    }));

    const filtered = products.filter(p =>
        (selectedCategory === 'All' || p.category === selectedCategory) &&
        (query.trim() === '' || p.title.toLowerCase().includes(query.toLowerCase()))
    );


    return (

        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
            {<Header setSidebarOpen={setSidebarOpen} setQuery={setQuery} query={query} />}
            <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
                {<Sidebar setSelectedCategory={setSelectedCategory} sidebarOpen={sidebarOpen} categories={categories} selectedCategory={selectedCategory} />}

                <main className="col-span-1 lg:col-span-3">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold">Products</h2>
                            <p className="text-sm text-gray-500">Showing {filtered.length} results for "{query || 'all products'}"</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <label className="text-sm text-gray-600">Sort:</label>
                            <select className="border rounded-md px-3 py-1">
                                <option>Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Rating</option>
                            </select>
                        </div>
                    </div>

                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map(prod => (
                            <motion.article
                                key={prod.id}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-transparent hover:border-gray-100"
                            >
                                <img src={prod.image} alt={prod.title} className="w-full h-44 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-medium text-lg">{prod.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{prod.category}</p>

                                    <div className="mt-3 flex items-center justify-between">
                                        <div>
                                            <div className="font-semibold">${prod.price}</div>
                                            <div className="text-xs text-gray-500">Rating {prod.rating} ★</div>
                                        </div>

                                        <button className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm shadow-sm hover:brightness-105">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </section>

                    <div className="mt-6 flex items-center justify-center">
                        <button className="px-4 py-2 border rounded-md mr-2">Previous</button>
                        <button className="px-4 py-2 border rounded-md">Next</button>
                    </div>
                </main>
            </div>

            {<Footer />}
        </div>
    )
};

export default Home;