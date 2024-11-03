import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";


const Table = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        const token = localStorage.getItem('token')

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.get("/api/v1/bills", config).then((sukses) => {
            console.log("sukses", sukses)
            setData(sukses.data.data)
        }).catch((error) => {
            if (error.response.data.message == "Unauthorized" && error.status == 401) {
                localStorage.removeItem("token")
                window.location.reload();
            }
            console.log("error", error)
        })
    }


    return (
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b bg-gray-200 text-gray-800 text-left text-sm font-medium">
                Kode Pelanggan
              </th>
              <th className="px-6 py-3 border-b bg-gray-200 text-gray-800 text-left text-sm font-medium">
                Nama Pelanggan
              </th>
              <th className="px-6 py-3 border-b bg-gray-200 text-gray-800 text-left text-sm font-medium">
                Tabel Transaksi
              </th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((item, index) => {
                    return (
                        <tr key={index.toString()} className="hover:bg-gray-100">
                            <td className="px-6 py-4 border-b text-sm text-gray-700">{item.customer.phoneNumber}</td>
                            <td className="px-6 py-4 border-b text-sm text-gray-700">{item.customer.name}</td>
                            <td className="px-6 py-4 border-b text-sm text-gray-700">
                                <Button>Detail Transaksi</Button>
                            </td>
                        </tr>
                    )
                })
            }
          </tbody>
        </table>
    </div>

    )
}

export default Table;