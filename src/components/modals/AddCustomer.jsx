import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { useDispatch, useSelector } from "react-redux"
import { z } from "zod"
import { axiosInstance } from "../../lib/axios"
import { useState } from "react"
import { addCustomer } from "../../store/actions/customerAction"
import { toast } from "sonner"


const customerSchema = z.object({
    name: z.string().min(3, "Minimum 3 character"),
    phoneNumber: z.string().min(10, "Minimum 10 characters"),
    address: z.string().min(3, "Minimum 3 characters"),
})

const CreateCustomer = () => {
    const dispatch = useDispatch()
    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    //Set Customer
    const [inputNama, setInputNama] = useState("")
    const [inputPhoneNumber, setInputPhoneNumber] = useState("")
    const [inputAddress, setInputAddress] = useState("")

    // GlobalState
    const addCustomerGlobal = async (data) => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const response = await axiosInstance.post("/customers/", data, {headers})

            if (response.status === 201) {
                toast.success("Customer Created Successfully")
                dispatch(addCustomer(response.data.data))
                console.log(dispatch)
            }
        } catch (error) {
            console.log(error.message)
            toast.error("Server Error")
        }
    }


    const addCustomer = async () => {
        await axiosInstance.post("/customers", {
            name: "",
            phoneNumber: "",
            address: "",
        })
    }

    return (
        <>
            <Button onPress={onOpen}>Tambah Customer</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Tambah Customer</ModalHeader>
                            <ModalBody>
                                <div>
                                    <h1>Masukan Nama</h1>
                                    <Input
                                     onChange={(event) => {
                                        setInputNama(event.target.value)
                                     }}
                                     value={inputNama}
                                     placeholder="Masukan Nama" />
                                </div>
                                <div>
                                    <h1>Masukan No Hanphone</h1>
                                    <Input
                                     onChange={(event) => {
                                        setInputPhoneNumber(event.target.value)
                                     }}
                                     value={inputPhoneNumber}
                                     placeholder="Masukan Nomer" />
                                </div>
                                <div>
                                    <h1>Masukan Alamat</h1>
                                    <Input
                                     onChange={(event) => {
                                        setInputAddress(event.target.value)
                                     }}
                                     value={inputAddress}
                                     placeholder="Masukan Nama" />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={addCustomerGlobal}>Submit</Button>
                                <Button onPress={onClose}>Close</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    )
}

export default CreateCustomer