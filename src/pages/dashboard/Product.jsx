import { useEffect, useState } from "react"
import { axiosInstance } from "../../lib/axios"
import { Button } from "@nextui-org/react"
import { useSelector } from "react-redux"
import AddProduct from '../../components/modals/AddProduct'
import { IsAuth } from "../../hoc/checkAuth"

const Product = () => {
    const [productItems, setProductItems] = useState([])

    const token = useSelector((state) => state.auth.authData)
    

    const fetchListProduct = async () => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`
            }
            const response = await axiosInstance.get('/products', {headers})
            setProductItems(response.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }


    useEffect(() => {
        fetchListProduct()
    }, [])


    return (
      <>
        <div className="overflow-x-auto">
          <div className="flex justify-end mb-4">
            <AddProduct />
          </div>
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Nama</th>
                <th className="px-4 py-2 border">Harga</th>
                <th className="px-4 py-2 border">type</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {productItems.map((product, index) => {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2 text-center border">{index + 1}</td>
                    <td className="px-4 py-2 text-center border">{product.name}</td>
                    <td className="px-4 py-2 text-center border">{product.price}</td>
                    <td className="px-4 py-2 text-center border">{product.type}</td>
                    <td className="px-4 py-2 text-center border">
                      <div className="flex justify-center">
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
      </div>
      </>
    )
}

export default IsAuth(Product)