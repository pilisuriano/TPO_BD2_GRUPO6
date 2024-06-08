import React from "react";

const Orders = () => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            {/* <div className="col-12 alert alert-info text-center mt-3">
            No Orders
            <Link
                className="btn btn-success mx-2 px-3 py-2"
                to="/"
                style={{
                    fontSize; "12px",
                }}
            >
                ¡A COMPRAR!
            </Link>
            </div> */}

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>STATUS</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={"alert-success"}>
                            <td>
                                <a href={`/`} className="link">
                                    1
                                </a>
                            </td>
                            <td>Pagado</td>
                            <td>Dic 14 2023</td>
                            <td>$500</td>
                        </tr>
                        {/* Cancelado */}
                        <tr className={"alert-danger"}>
                            <td>
                                <a href={`/`} className="link">
                                    2
                                </a>
                            </td>
                            <td>No pagado</td>
                            <td>Dic 14 2023</td>
                            <td>$20</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </div>
    );
};

export default Orders;