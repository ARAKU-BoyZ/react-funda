import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios"
import { useSelector } from "react-redux";
import { IsAuth } from '../../hoc/checkAuth'
import { Button, useDisclosure } from "@nextui-org/react";
import AddCustomer from '../../components/modals/AddCustomer'
import EditCustomer from "../../components/modals/EditCustomer";


const Customer = () => {
  const [customerList, setCustomerList] = useState ([])

  const token = useSelector((state) => state.auth.authData)

  

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
    <>
    <div className="overflow-x-auto">
      <div className="flex justify-end mb-4">
        <AddCustomer />
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">No.</th>
            <th className="px-4 py-2 border">Nama Customer</th>
            <th className="px-4 py-2 border">Nomer Handphone</th>
            <th className="px-4 py-2 border">Alamat Cutomer</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((customer, index) => {
            return (
              <tr key={index}>
                <td className="px-4 py-2 text-center border">{index + 1}</td>
                <td className="px-4 py-2 text-center border">{customer.name}</td>
                <td className="px-4 py-2 text-center border">{customer.phoneNumber}</td>
                <td className="px-4 py-2 text-center border">{customer.address}</td>
                <td className="px-4 py-2 text-center border">
                  <div className="flex justify-evenly">
                    <EditCustomer />
                    <Button>Hapus</Button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default IsAuth(Customer);
