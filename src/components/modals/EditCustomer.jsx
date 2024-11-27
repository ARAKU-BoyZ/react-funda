import { useForm, Controller } from 'react-hook-form'
import { axiosInstance } from '../../lib/axios'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { updateCustomer } from '../../store/actions/customerAction'
import { Modal, Input, Button, useDisclosure, ModalContent, ModalHeader } from '@nextui-org/react'



const EditCustomer = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure()
    const dispatch = useDispatch()

    const token = useSelector((state) => state.auth.authData)

    const form = useForm({
        defaultValues: {
            name: "",
            phoneNumber: "",
            address: "",
        }
    })


    const editCustomer = async () => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const response = await axiosInstance.put(`/customers/`, {headers})

            if (response.status === 201) {
                toast.success("Customer Changed")
                useDispatch(updateCustomer(response.data))
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed Changed")
        }
    }


    return (
        <div>
            <Button onPress={onOpen}></Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Edit Customer</ModalHeader>
                            <form onSubmit={form.handleSubmit(editCustomer)}>
                                <div>
                                    <label>Nama</label>
                                    <Controller
                                    name="nama"
                                    control={form.control}
                                    render={({field, fieldState}) => {
                                        return (
                                            <Input
                                            {...field}
                                            label="Nama"
                                            size="sm"
                                            isInvalid={Boolean(fieldState.error)}
                                            errorMessage={fieldState.error?.message} />
                                        )
                                    }} />
                                </div>
                                <div>
                                    <label>Nomer Hp</label>
                                    <Controller
                                    name="phoneNumber"
                                    control={form.control}
                                    render={({field, fieldState}) => {
                                        return (
                                            <Input
                                            {...field}
                                            label="Nomer Hp"
                                            size="sm"
                                            isInvalid={Boolean(fieldState.error)}
                                            errorMessage={fieldState.error?.message} />
                                        )
                                    }} />
                                </div>
                                <div>
                                    <label>Alamat</label>
                                    <Controller
                                    name="address"
                                    control={form.control}
                                    render={({field, fieldState}) => {
                                        return (
                                            <Input
                                            {...field}
                                            label="Nomer Hp"
                                            size="sm"
                                            isInvalid={Boolean(fieldState.error)}
                                            errorMessage={fieldState.error?.message} />
                                        )
                                    }} />
                                </div>
                                <button
                                type='submit'>Submit</button>
                                <Button>Cancel</Button>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </div>
    )
}

export default EditCustomer