import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { useDispatch, useSelector } from "react-redux"
import { z } from "zod"
import { axiosInstance } from "../../lib/axios"
import { useState } from "react"
import { addProduct } from '../../store/actions/productActions'
import { toast } from "sonner"


const customerSchema = z.object({
    name: z.string().min(3, "Minimum 3 character"),
    phoneNumber: z.number().min(10, "Minimum 10 characters"),
    address: z.string().min(3, "Minimum 3 characters"),
})

const CreateProduct = () => {
    const dispatch = useDispatch()
    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    const token = useSelector((state) => state.auth.authData)

    //Set Customer
    const [inputBarang, setInputBarang] = useState("")
    const [inputHarga, setInputHarga] = useState("")
    const [inputType, setInputType] = useState("")

    // GlobalState
    const addProductGlobal = async (e) => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const response = await axiosInstance.post("/product", {
                name: inputBarang,
                phoneNumber: inputHarga,
                address: inputType,
            }, {headers})

            if (response.status === 201) {
                toast.success("Customer Created Successfully")
                dispatch(addProduct(response.data.data))
            }
        } catch (error) {
            console.log(error)
            toast.error("Server Error")
        }
    }

    return (
        <>
            <Button onPress={onOpen}>Tambah Product</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Tambah Product</ModalHeader>
                            <ModalBody>
                                <div>
                                    <h1>Masukan Nama</h1>
                                    <Input
                                     onChange={(event) => {
                                        setInputBarang(event.target.value)
                                     }}
                                     value={inputBarang}
                                     placeholder="Masukan Nama" />
                                </div>
                                <div>
                                    <h1>Masukan Harga</h1>
                                    <Input
                                     onChange={(event) => {
                                        setInputHarga(event.target.value)
                                     }}
                                     value={inputHarga}
                                     placeholder="Masukan Nomer" />
                                </div>
                                <div>
                                    <h1>Masukan Alamat</h1>
                                    <Input
                                     onChange={(event) => {
                                        setInputType(event.target.value)
                                     }}
                                     value={inputType}
                                     placeholder="Masukan Nama" />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={addProductGlobal}>Submit</Button>
                                <Button onPress={onClose}>Close</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    )
}

export default CreateProduct