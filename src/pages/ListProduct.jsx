import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { axiosInstance } from "../../lib/axios";




const ListProduct = () => {
    
    // menyimpan dan mengelola nilai State
    const [inputBerat, setInputBerat] = useState ("")
    const [inputBarang, setInputBarang] = useState("")
    const [listItems, setListItems] = useState([])


    //Nambah Data
    const addList = async () => {
        await axiosInstance.post("/product", {
            name: inputBarang,
            berat: inputBerat,
        })
    }

    return (
        <div>
            <div className="flex items-center p-4 gap-4">
                {/* menggunakan useRef pada elemen INPUT */}
                <Input onChange={(event) => {
                    setInputBarang(event.target.value)
                }}
                 value={inputBarang}
                 placeholder="Masukan Barang" />
                <Input onChange={(event) => {
                    setInputBerat(event.target.value)
                }}
                 value={inputBerat}
                 placeholder="Masukan Berat" />
                <Button onClick={addList} color="primary">
                    Add
                </Button>
            </div>
            <ul className="list-decimal list-inside text-center">
                {listItems.map((item, index) => {
                    return <li key={index}>{item.nama} {item.berat}</li>
                })}
            </ul>
        </div>
    )
}

export default ListProduct;