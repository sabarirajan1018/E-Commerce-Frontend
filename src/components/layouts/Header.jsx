const Header = (props) => {
    const { setSidebarOpen, setQuery, query } = props;
    return (
        <header className="bg-white shadow-sm sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(prev => !prev)}
                            className="p-2 rounded-md hover:bg-gray-100"
                            aria-label="Toggle sidebar"
                        >
                            {/* simple hamburger */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-3">
                            <div className="text-xl font-semibold">GetX Store</div>
                            <span className="text-sm text-gray-500">E‑commerce demo</span>
                        </div>
                    </div>

                    <div className="flex-1 mx-4">
                        <div className="max-w-xl mx-auto">
                            <label className="relative block">
                                <span className="sr-only">Search</span>
                                <input
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-200 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                    placeholder="Search products, categories, brands..."
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                                    </svg>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 rounded-md hover:bg-gray-100">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                            </svg>
                            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1 text-xs font-bold leading-none text-white bg-indigo-600 rounded-full">3</span>
                        </button>

                        <button className="p-2 rounded-md hover:bg-gray-100">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A4 4 0 0112 14h0a4 4 0 016.879 3.804" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header