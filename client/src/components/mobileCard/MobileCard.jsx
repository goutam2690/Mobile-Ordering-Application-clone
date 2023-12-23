
const MobileCard = ({ setCart, mobiles }) => {

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };


    return (
        <>
            {/* Top Rated Mobiles Section */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-black mb-4">🌟 Top Rated Mobiles</h2>
                    <p className="text-black mb-8">Explore our handpicked selection of top-rated mobile devices.</p>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {mobiles.map((product) => (
                            <div key={product.id} className="flex flex-col sm:flex-row bg-white bg-opacity-90 shadow-md rounded-md overflow-hidden transition-transform transform hover:scale-105">

                                {/* Left column for image */}
                                <div className="w-full sm:w-1/3 overflow-hidden">
                                    <img src={product.image} alt={product.name} className="w-full h-auto" />
                                </div>

                                {/* Right column for text */}
                                <div className="flex flex-col justify-between p-4 sm:w-2/3">
                                    <div>
                                        <h2 className="text-xl font-semibold mb-2 text-blue-600">{product.name}</h2>
                                        <p className="text-gray-700 mb-2">Price: ₹{product.price}</p>
                                        <p className="text-gray-700 mb-2">Processor: {product.processor}</p>
                                        <p className="text-gray-700 mb-2">Memory: {product.memory}</p>
                                        <p className="text-gray-700 mb-2">Os: {product.os}</p>
                                        <p className="text-gray-700 mb-2">Type: {product.type}</p>
                                    </div>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="bg-blue-500 hover:bg-blue-700 text-white transition-all ease-in-out duration-300 px-4 py-2 mt-4"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MobileCard
