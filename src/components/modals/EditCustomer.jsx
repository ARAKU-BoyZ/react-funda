import { axiosInstance } from '../../lib/axios'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { Modal, ModalBody, Input, Button, useDisclosure, ModalContent, ModalHeader, ModalFooter } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { updateCustomer } from '../../store/actions/customerAction'



const EditCustomer = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure()
    const dispatch = useDispatch()
    const customers = useSelector((state) => state.customerData)// ambil data dari redux

    const token = useSelector((state) => state.auth.authData)

    const [inputNama, setInputNama] = useState("")
    const [inputPhoneNumber, setInputPhoneNumber] = useState("")
    const [inputAddress, setInputAddress] = useState("")
    const [localCustomers, setLocalCustomers] = useState([])


    const editCustomer = async (data) => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const response = await axiosInstance.put('/customers/', {
                name: inputNama,
                phoneNumber: inputPhoneNumber,
                address: inputAddress,
            }, {headers})
            
            if (response.status === 200 || !response.data) {
                toast.success("Customer Changed")
                dispatch(updateCustomer(response.data))
                console.log(response)
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed Changed")
        }
    }


    // singkron data redux ke state local
    useEffect(() => {
        if (customers) {
            setLocalCustomers(customers)
        }
    }, [customers])


    return (
        <>
            <Button onPress={onOpen}>Edit Customer</Button>
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
                                <Button onClick={editCustomer}>Submit</Button>
                                <Button onPress={onClose}>Close</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    )
}

export default EditCustomer