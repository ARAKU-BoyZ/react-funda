import { Button } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { axiosInstance } from "../../lib/axios"
import { IsAuth } from "../../hoc/checkAuth"
import { useSelector } from "react-redux"




const Customer = () => {
    const [customerList, setCustomerList] = useState ([])
    

    const token = useSelector((state) =>  state.auth.authData)

    const fetchListCustomer = async () => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await axiosInstance.get('/customers', {headers})
            setCustomerList(response.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {
        fetchListCustomer()
    }, [])


    return (
        <div className="row">
            <div className="col-auto">
                {/* <Sidebar /> */}
            </div>
            <div className="col mx-5 px-5 md:mx-0 md:px-0">
                <div>
                    <h1 className="text-center">Customer List</h1>
                    <Button color="primary">Add Customer</Button>
                    <table className="table-auto w-full border border-gray-300">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nama</th>
                                <th>Phone Number</th>
                                <th>Alamat</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerList.map((customer, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.phoneNumber}</td>
                                        <td>{customer.address}</td>
                                        <td>
                                            <Button color="success" className="mx-2">Edit</Button>
                                            <Button color="danger" className="mx-2">Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default IsAuth(Customer)