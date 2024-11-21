import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useRef, useState } from "react";

const CreateProduct = () => {
    // Button Modal
    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    // Refrensi Inputan
    const inputBarang = useRef()
    const inputBerat = useRef()

    // set produk list
    const [listProduct, setListProduct] = useState([])


    const addProduct = () => {
        const listInputBarang = inputBarang.current.value;
        const listInputBerat = inputBerat.current.value;

        if (!listInputBarang || listInputBerat) {
            setListProduct([...listProduct, {listInputBarang, listInputBerat}])
            return
        }


        // bersihkan input
        inputBarang.current.value
        inputBerat.current.value
    }


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
                                    <Input ref={inputBarang}/>
                                </div>
                                <div>
                                    <h2>Masukan Berat</h2>
                                    <Input ref={inputBerat}/>
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
                {listProduct.map((produk) => {
                    return <li>Barang: {produk.inputBarang}, Berat: {produk.inputBerat}</li>
                })}
            </ul>
        </>
    )
}

export default CreateProduct;