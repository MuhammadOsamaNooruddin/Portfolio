const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-20">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} Muhammad Osama Noor Uddin. All rights reserved.</p>
                <p className="text-xs mt-2">Built with ❤️ using React</p>
            </div>
        </footer>
    );
}   

export default Footer;