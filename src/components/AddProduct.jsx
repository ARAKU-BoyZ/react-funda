import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { axiosInstance } from "../lib/axios";

const CreateProduct = () => {
    // Modal state
    const {isOpen, onOpen, onOpenChange} = useDisclosure()


    // set produk list
    const [listItems, setListItems] = useState([])
    const [inputBarang, setInputBarang] = useState("")
    const [inputBerat, setInputBerat] = useState("")

    // Konfigurasi Axios
    const fetchListItems = async () => {
        // Mendapatkan Data ke API
        const response = await axiosInstance.get("/product")
        setListItems(response.data)
    }


    // Fungsi Button Submit
    const addProduct = async () => {
        await axiosInstance.post("/product", {
            name: inputBarang,
            berat: inputBerat,
        })
        fetchListItems()
        setInputBarang("")
        setInputBerat("")
    }

    useEffect(() => {
        fetchListItems()
    }, [])


    return (
        <>
            <Button onPress={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Tambah Product</ModalHeader>
                            <ModalBody>
                                <div>
                                    <h1>Masukan Barang</h1>
                                    <Input onChange={(event) => {
                                        setInputBarang(event.target.value)
                                    }}
                                    value={inputBarang}
                                     placeholder="Masukan Barang"/>
                                </div>
                                <div>
                                    <h2>Masukan Berat</h2>
                                    <Input onChange={(event) => {
                                        setInputBerat(event.target.value)
                                    }}
                                    value={inputBerat}
                                     placeholder="Berat Barang"/>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={addProduct}>
                                    Submit
                                </Button>
                                <Button color="danger" variant="light" onPress={onClose} >
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <ul className="list-decimal list-inside text-center">
                {listItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.berat}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CreateProduct;