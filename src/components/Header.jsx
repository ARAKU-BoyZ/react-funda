import Heading from "./Heading";
import logo from '../assets/washer.png'
import { Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";

// Melakukan styling menggunakan Inline Style
const Header = () => {
    return (
        <header>
            <div className="flex justify-between p-4">
                <img className="w-14" src={logo} alt="" />
                <Avatar size="lg" name="Jhon" />
            </div>
            <Link to="/t-transaksi">Table Transaksi</Link>
        </header>
        
    )
}

export default Header;