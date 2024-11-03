import { Button } from "@nextui-org/react"
import React, { useState } from "react";
// Materi Redux
import { useSelector } from "react-redux"; 


const Counter = () => {
    // Materi Redux
    const counterSelector = useSelector((store) => store.counter ); 
    const messageSelector = useSelector((store) => store.message);


    const [count, setCount] = useState(0)


    const incrementCounter = () => {
        setCount(count + 1)
    }

    const decrementCounter = () => {
        setCount(count - 1)
    }

    // Update Lifecycle
    // useEffect(() => {
    //     alert("DID UPDATE")
    // }, [count])

    return (
        <div>
            <div className="flex items-center justify-around min-h-96">
                <Button onClick={decrementCounter} color="danger">Substrack</Button>
                <span className="text-3xl font-semibold">{count}</span>
                <Button onClick={incrementCounter} color="primary">Add</Button>
            </div>
            {/* mate ri Redux */}
            <p className="text-center font-semibold text-2xl">Global count: {counterSelector.count} </p>
            <p className="text-center font-semibold text-2xl">Global Message: {messageSelector} </p>
        </div>
    )
}

// class Counter extends React.Component {
//     state = {
//         count: 0,
//     }

//     incrementCounter = () => {
//         this.setState({ count: this.state.count + 1 })
//     }

//     decrementCounter = () => {
//         this.setState({ count: this.state.count - 1})
//     }

//     render() {
//         return (
//             <div>
//                 <div className="flex items-center justify-around min-h-96">
//                     <Button onClick={this.decrementCounter} color="danger">Substrack</Button>
//                     <span className="text-3xl font-semibold">{this.state.count}</span>
//                     <Button onClick={this.incrementCounter} color="primary">Add</Button>
//                 </div>
//             </div>
//         )
//     }
// }

export default Counter;