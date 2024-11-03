// Menggunakan props dari sebuah Component

const Heading = (props) => {
    return (
            <h1 className="flex font-bold">{props.children}</h1>
    )
}

export default Heading;