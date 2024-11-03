import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure, Input, ModalFooter, Select } from "@nextui-org/react";

const Transaksi = () => {
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
                                <Input label="Masukan Kode"/>
                                <h6 className="font-semibold">Nama Konsumen</h6>
                                <Input label="Pilih Konsumen"/>
                                <h6 className="font-semibold">Pilih Paket Laundry</h6>
                                <Input />
                                <h6 className="font-semibold">Qty (Kg)</h6>
                                <Input />
                                <h6 className="font-semibold">ToTal Bayar</h6>
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