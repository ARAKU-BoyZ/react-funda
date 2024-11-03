import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Avatar } from "@nextui-org/react";
import PropTypes from "prop-types";
import logo from '../assets/washer.png'
// import { withAlert } from '../hoc/withAlert'


const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="w-1/5 mx-3 border-r-2 pr-2">
                <img className="w-16" src={logo} alt=""/>
                <br/>
                <h6 className="font-bold">HOME</h6>
                <Button color="primary" className="w-full pl-2 justify-start mt-2">Produk</Button>
                <br/>
                <Button color="primary" className="w-full pl-2 justify-start mt-2">Customer</Button>
                <br/>
                <Button color="primary" className="w-full pl-2 justify-start mt-2">Transaksi</Button>
            </div>
            <div className="relative h-screen justify-end">
                <Avatar className="flex top-0 right-600 m-4 p-4"></Avatar>
            </div>
        </div>
        
        // <Card className="max-w-[150px] rounded-none">
        //     {/* Memanggil prop di function Menggunakan (props.)*/}
        //     <CardHeader className="flex font-bold text-lg">Logo</CardHeader>
        //     <CardBody>
        //         <ul>
        //             <Button>Produk</Button>
        //             <Button>Customer</Button>
        //             <Button>Transaksi</Button>
        //         </ul>
        //     </CardBody>
        // </Card>
        // <Card className="max-w-[400px]">
        //     <CardHeader className="font-bold text-lg">{props.day} ({props.numberOfActivities})</CardHeader>
        //     <Divider />
        //     <CardBody>
        //         <ul className="list-decimal list-inside">
        //             <li>Mandi</li>
        //             <li>Sarapan</li>
        //             <li>Coding</li>
        //         </ul>
        //     </CardBody>
        //     <Divider />
        //     <CardFooter>
        //         <Button>Finish</Button>
        //     </CardFooter>
        // </Card>
    )
}

// TodoCard.PropTypes = {
//     day: PropTypes.string,
//     numberOfActivities: PropTypes.number,
// }

export default Dashboard;