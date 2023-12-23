
const Cart = ({ cart, setCart }) => {

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    }

    return (
        <div>
            <section className="bg-gray-200 py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-black mb-4">🛒 Shopping Cart</h2>
                    {cart.length === 0 ? (
                        <p className="text-gray-700">Your cart is empty.</p>
                    ) : (
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            {cart.map((item) => (
                                <div key={item.id} className="bg-white p-4 shadow-md rounded-md">
                                    <img src={item.image} alt="cartMobileImage" className='ml-auto mr-auto' />
                                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                    <p className="text-gray-700 mb-2">Price: ₹{item.price}</p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 hover:bg-red-700 text-white transition-all ease-in-out duration-300 px-4 py-2 mt-4"
                                    >
                                        Remove from Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Cart
