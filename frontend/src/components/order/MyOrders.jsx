import { useEffect } from "react";
import { useMyOrdersQuery } from "../../redux/api/orderApi";
import { toast } from "react-toastify";
import Loader from "../layout/Loader";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";

function MyOrders() {
  const { data, isLoading, error } = useMyOrdersQuery();

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error]);

  const setOrders = () => {
    const orders = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Amount",
          field: "amount",
          sort: "asc",
        },
        {
          label: "Payment Status",
          field: "paymentStatus",
          sort: "asc",
        },
        {
          label: "Order Status",
          field: "orderStatus",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    data?.orders?.forEach((order) => {
      orders.rows.push({
        id: order?._id,
        amount: `$${order.totalPrice}`,
        paymentStatus: order?.paymentInfo?.status?.toUpperCase(),
        orderStatus: order?.orderStatus,
        actions: (
          <>
            <Link to={`/me/orders/${order._id}`} className="btn btn-primary">
              <i className="fa fa-eye"></i>
            </Link>
            <Link
              to={`/invoice/orders/${order._id}`}
              className="btn btn-success ms-2"
            >
              <i className="fa fa-print"></i>
            </Link>
          </>
        ),
      });
    });

    return orders;
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1 className="my-5">{data?.orders?.length} Orders</h1>
      <MDBDataTable />
    </div>
  );
}

export default MyOrders;
