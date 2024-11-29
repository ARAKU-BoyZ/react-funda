import { Button, Card, CardBody, CardFooter, CardHeader, useDisclosure } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../lib/axios";
import { toast } from "sonner";
import { setCustomers } from "../../store/actions/customerAction";
import { useState } from "react";

const DeleteCustomer = ({ id }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const token = useSelector((state) => state.auth.authData)

    const deleteCustomer = async () => {
        setIsLoading(true); // Aktifkan loading
        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            }
            const response = await axiosInstance.delete(`/customers/${id}`, {headers});

            if (response.status === 200) {
                toast.success("Customer deleted successfully");
                onOpenChange(false); // Tutup modal setelah success
                dispatch(setCustomers()); // Pastikan fetch ulang data pelanggan di backend
                console.log(id)
            } else {
                toast.error("Failed to delete customer");
            }
        } catch (error) {
            console.error("Delete Error", error);
            toast.error("An error occurred while deleting customer");
        } finally {
            setIsLoading(false); // Matikan loading
        }
    };

    return (
        <>
            <Button onPress={onOpen}>Delete Customer</Button>
            {isOpen && (
                <Card>
                    <CardHeader>Delete Customer</CardHeader>
                    <CardBody>
                        <p>Yakin ingin menghapus customer ini?</p>
                    </CardBody>
                    <CardFooter>
                        <Button
                            color="danger"
                            onPress={deleteCustomer}
                            isDisabled={isLoading} // Nonaktifkan jika loading
                        >
                            {isLoading ? "Deleting..." : "Confirm Delete"}
                        </Button>
                        <Button
                            onPress={() => onOpenChange(false)}
                            isDisabled={isLoading} // Nonaktifkan jika loading
                        >
                            Cancel
                        </Button>
                    </CardFooter>
                </Card>
            )}
        </>
    );
};

export default DeleteCustomer;