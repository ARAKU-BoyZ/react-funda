import { Button, Input } from "@nextui-org/react";
import { useRef, useState } from "react";




const Wishlist = () => {
    // useRef untuk mengakses elemen DOM langsung
    const inputRef = useRef()
    
    // menyimpan dan mengelola nilai State
    const [wishlistItems, setWishlistItems] = useState([])

    const addWishlist = () => {
        const wishlistInputValue = inputRef.current.value // (Pengganti document getElement)
        
        
        // Fungsi Button mengambil list dari wishlist item dan menambah item baru dari wishlist input
        setWishlistItems([...wishlistItems, wishlistInputValue])
    }

    return (
        <div>
            <div className="flex items-center p-4 gap-4">
                {/* menggunakan useRef pada elemen INPUT */}
                <Input ref={inputRef} label="Wishlist Item" color="secondary" />
                <Button onClick={addWishlist} color="primary">
                    Add
                </Button>
            </div>
            <ul className="list-decimal list-inside text-center">
                {wishlistItems.map((item) => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Wishlist;