import { useEffect, useState } from "react"
import { axiosInstance } from "../../../lib/axios"
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react"

const Product = () => {
    // set Data yang di ambil
    const [productItems, setProductItems] = useState([])


    // Get data axios
    const fetchListItems = async () => {
        const response = await axiosInstance.get("/product")
        setProductItems(response.data)
    }


    useEffect(() => {
        fetchListItems()
    }, [])


    return (
        <>
            <div className="row">
                <div className="col-auto">
                </div>
                <div className="col mx-5 px-5 md:mx-0 md:px-0">
                    <h1 className="text-center">Product List</h1>
                    <ul>
                        {productItems.map((item, index) => {
                            return (
                                    <li key={index}>{item.name}</li>
                            )
                        })}
                    </ul>
                    <ul>
                        {productItems.map((item, index) => {
                            return (
                                <li key={index}>{item.berat}</li>
                            )
                        })}
                    </ul>
                    {/* <Table aria-label="Product">
                        <TableHeader>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                {productItems.map((item) => {
                                    return (
                                        <TableCell key={1}>{item.name}</TableCell>
                                    )
                                })}
                            </TableRow>
                        </TableBody>
                    </Table> */}
                </div>
            </div>
        </>
    )
}

export default Product