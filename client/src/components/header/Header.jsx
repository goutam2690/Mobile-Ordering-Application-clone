import { useEffect, useState } from "react";
import './App.css'

const Header = ({ setMobiles }) => {

    const [searchParams, setSearchParams] = useState({
        query: '',
        price: '',
        type: '',
        processor: '',
        memory: '',
        os: '',
    });



    const handleSearch = async () => {
        try {
            const response = await fetch('https://mobileorderingclonebackend5.onrender.com/api/mobiles/search');
            const data = await response.json();

            // Filter the data based on searchParams
            const filteredMobiles = data.filter((mobile) => {
                const query = searchParams.query.toLowerCase();

                // Check for matches in multiple keys dynamically
                return Object.values(mobile).some((value) =>
                    typeof value === 'string' && value.toLowerCase().includes(query)
                );
            });

            setMobiles(filteredMobiles);
        } catch (error) {
            console.error('Error searching mobiles:', error);
        }
    };

    useEffect(() => {
        handleSearch();
    }, [searchParams]);


    return (
        <>
           <header className="bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900 p-4">
                <div className="container mx-auto flex justify-between items-center flex-col lg:flex-row">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-extrabold mb-2 lg:mb-0 tracking-tight text-white">📱 MobileHub</h1>
                        <p className="slogan text-sm opacity-80 lg:ml-3 lg:mb-0 text-white">Your tech sanctuary for mobile wonders.</p>
                    </div>
                    <div className="menu flex flex-row xs:flex-col justify-center items-center lg:ml-6 space-x-4">
                        <nav className="space-x-4">
                            <a href="#" className="text-white hover:underline">Home</a>
                            <a href="#" className="text-white hover:underline">Products</a>
                            <a href="#" className="text-white hover:underline">About</a>
                            <a href="#" className="text-white hover:underline">Contact</a>
                        </nav>
                        <div className="inputDiv ml-6 relative">
                            <input
                                className="input py-2 px-4 md:px:8 lg:px:8 text-black border border-gray-300 rounded focus:outline-none focus:border-blue-700 transition-all ease-in-out duration-300"
                                type="text"
                                placeholder="Discover the latest tech..."
                                value={searchParams.query}
                                onChange={(e) => setSearchParams({ ...searchParams, query: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
