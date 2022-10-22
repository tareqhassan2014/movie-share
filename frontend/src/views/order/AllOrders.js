import { useEffect, useState } from 'react'
import { confirmOrder, getAllOrders } from 'src/services/movie'

const AllOrders = () => {
    const [orders, setOrders] = useState([])
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await getAllOrders()
            setOrders(response.data)
        }
        fetchOrders()
    }, [refetch])

    // confirm order
    const handelConfirmOrder = async (id) => {
        try {
            await confirmOrder(id)
            setRefetch(!refetch)
            window.alert('Order confirmed successfully')
        } catch (error) {
            window.alert('Error confirm order')
        }
    }

    return (
        <div>
            {orders.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Order ID</th>
                            <th scope="col">Movie ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Confirm Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <th scope="row">{index}</th>
                                <td>{order?._id}</td>
                                <td>{order?.movie}</td>
                                <td>{new Date(order?.createdAt).toDateString()}</td>
                                <td>{order?.status}</td>
                                <td>
                                    <button
                                        disabled={order?.status === 'confirmed'}
                                        className="btn btn-success text-white"
                                        onClick={() => handelConfirmOrder(order._id)}
                                    >
                                        Confirm
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1>No orders</h1>
            )}
        </div>
    )
}

export default AllOrders
