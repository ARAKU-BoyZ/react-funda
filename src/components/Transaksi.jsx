import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure, Input, ModalFooter, Select } from "@nextui-org/react";



const Transaksi = () => {
    // Mengambil Data Transaksi
    const [data, setData] = useState();

    useEffect(() => {
        getData()
    }, [])

    axios.get("api/v1/customers", config).then((sukses) => {
        console.log("sukses", sukses)
        setData(sukses.data.data)
    }).catch((error) => {
        if (error.response.data.message == "Unauthorized" && error.status == 401) {
            localStorage.removeItem("token")
            window.location.reload()
        }
        console.log("error", error)
    })


    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div>
            <Button onPress={onOpen} color="primary">Transaksi</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Transaksi Baru</ModalHeader>
                            <ModalBody>
                                <h6 className="font-semibold">Kode Transaksi</h6>
                                <Input type="text" id="kodeTransaksi" placeholder="Masukkan Kode Transaksi" aria-label="Masukan Kode"/>
                                <h6 className="font-semibold">Nama Konsumen</h6>
                                <Select />
                                <h6 className="font-semibold">Pilih Paket Laundry</h6>
                                <Input type="text" id="kodeTransaksi" placeholder="Masukkan Kode Transaksi" aria-label="Masukan Kode"/>
                                <h6 className="font-semibold">Qty (Kg)</h6>
                                <Input type="text" id="kodeTransaksi" placeholder="Masukkan Kode Transaksi" aria-label="Masukan Kode"/>
                                <h6 className="font-semibold">Total Bayar</h6>
                                <Input />
                            </ModalBody>
                            <ModalFooter className="bg-white">
                                <Button onPress={onClose}>
                                    Tutup
                                </Button>
                                <Button onPress={onClose}>
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Transaksi;