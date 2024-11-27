const handleClick = async (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`
      }
      const response = await axiosInstance.get(`/customers/${id}`, {headers})
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }



  <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
  <ModalContent>
  {(onClose) => (
                <>
                    <ModalHeader>Tambah Customer</ModalHeader>
                    <ModalBody>
                        <div>
                            <h1>Masukan Nama</h1>
                            <Input
                             onChange={(event) => {
                                setInputNama(event.target.value)
                             }}
                             value={inputNama}
                             placeholder="Masukan Nama" />
                        </div>
                        <div>
                            <h1>Masukan No Hanphone</h1>
                            <Input
                             onChange={(event) => {
                                setInputPhoneNumber(event.target.value)
                             }}
                             value={inputPhoneNumber}
                             placeholder="Masukan Nomer" />
                        </div>
                        <div>
                            <h1>Masukan Alamat</h1>
                            <Input
                             onChange={(event) => {
                                setInputAddress(event.target.value)
                             }}
                             value={inputAddress}
                             placeholder="Masukan Nama" />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={edit}>Submit</Button>
                        <Button onPress={onClose}>Close</Button>
                    </ModalFooter>
                </>
            )}
  </ModalContent>
</Modal>