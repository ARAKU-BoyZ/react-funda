import Navbar from "../../Navbar"
import Sidebar from '../../Sidebar'

const Dashboard = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <div className="flex flex-row">
                    <div>
                        <Sidebar />
                    </div>
                    <div className="h-screen w-full flex flex-col p-2">
                        <div>
                            <h1 className="font-bold text-2xl">Dashboard</h1>
                            <br />
                        </div>
                        <div>
                            <table className="table-auto w-full border border-collapse border-gray-500">
                                <thead className="bg-gray-300">
                                    <tr>
                                        <th className="border border-gray-300 font-semibold">Kode Pelanggan</th>
                                        <th className="border border-gray-300 font-semibold">Nama Pelanggan</th>
                                        <th className="border border-gray-300 font-semibold">Detail Transaksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border border-collapse border-gray-300 text-center">
                                        <td>Jhon</td>
                                        <td>Jhon</td>
                                        <td>Jhon</td>
                                    </tr>
                                    <tr className="border border-collapse border-gray-300 text-center">
                                        <td>Jhon</td>
                                        <td>Jhon</td>
                                        <td>Jhon</td>
                                    </tr>
                                    <tr className="border border-collapse border-gray-300 text-center">
                                        <td>Jhon</td>
                                        <td>Jhon</td>
                                        <td>Jhon</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </body>
        </>
        //             <tbody>
        //                 <tr className="text-center">
        //                     <td className="border border-gray-300 px-4 py-2">jhon</td>
        //                     <td className="border border-gray-300 px-4 py-2">jhon</td>
        //                     <td className="border border-gray-300 px-4 py-2">jhon</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    )
}

export default Dashboard