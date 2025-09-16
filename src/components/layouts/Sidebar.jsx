const Sidebar = (props) => {
    const { setSelectedCategory, sidebarOpen, categories, selectedCategory } = props
    return (
        <aside
            className={`col-span-1 bg-white rounded-2xl p-4 shadow-sm transition-transform transform ${sidebarOpen ? 'translate-x-0' : 'lg:translate-x-0'} lg:sticky lg:top-24`}
            aria-labelledby="sidebar-title"
        >
            <h3 id="sidebar-title" className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
                {categories.map(cat => (
                    <li key={cat}>
                        <button
                            onClick={() => setSelectedCategory(cat)}
                            className={`w-full text-left px-3 py-2 rounded-md ${selectedCategory === cat ? 'bg-indigo-50 border border-indigo-100' : 'hover:bg-gray-100'}`}
                        >
                            {cat}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Filter</h4>
                <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" />
                    <span>Free shipping</span>
                </label>
                <label className="flex items-center gap-2 text-sm mt-2">
                    <input type="checkbox" />
                    <span>On sale</span>
                </label>
            </div>
        </aside>
    )
};
export default Sidebar;