const Footer = () => {
    return (
        <footer className="bg-white border-t mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-600">© {new Date().getFullYear()} E-Commerce Store. All rights reserved.</div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;