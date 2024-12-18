import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { axiosInstance } from "../../lib/axios"
import { Button } from "@nextui-org/react"



const Transaksi = () => {
    const [listTransaksi, setListTransaksi] = useState('')

    const token = useSelector((state) => state.auth.authData)

    const fetchListTransaksi = async () => {
      // console.log(token)
        try {
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await axiosInstance.get("/bills", {headers})
            setListTransaksi(response.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchListTransaksi()
    }, [])

    return (
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Nama Pelanggan</th>
              <th className="px-4 py-2 border">Kasir</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(listTransaksi).map((transactions, index) => {
              return (
                <tr key={index}>
                  <td className="px-4 py-2 text-center border">{index + 1}</td>
                  <td className="px-4 py-2 text-center border">{transactions.customer.name}</td>
                  <td className="px-4 py-2 text-center border">{transactions.billDetails[0].product.price}</td>
                  <td className="px-4 py-2 text-center border">
                    <div className="flex justify-center">
                      <Button>Transaksi</Button>
                      <Button>Edit</Button>
                      <Button>Hapus</Button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
}

export default Transaksi