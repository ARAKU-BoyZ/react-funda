import { useForm, Controller } from 'react-hook-form'
import { axiosInstance } from '../../lib/axios'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { updateCustomer } from '../../store/actions/customerAction'
import { Card, Input, Button } from '@nextui-org/react'



const EditCustomer = () => {
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
            const response = await axiosInstance.put('/customers', {
                nama: "",
                phoneNumber: "",
                address: "",
            }, {headers})

            if (response.status === 201) {
                toast.success("Customer Changed")
                dispatch(updateCustomer(response.data.data))
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed Changed")
        }
    }






    return (
        <div>
            <Card>
                <h2>Edit Customer</h2>
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
            </Card>
        </div>
    )
}

export default EditCustomer