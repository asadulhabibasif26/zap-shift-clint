import React from 'react';
import { MdCancel } from 'react-icons/md';
import { Link } from 'react-router';

const PaymentCancle = () => {
    return (
        <div>
            <h2 className="text-4xl justify-center font-bold text-red-700 flex ">Payment Cancelled <MdCancel /></h2>
            <Link to='/dashboard/my-parcels'><button className="btn bg-green-700">My Parcel</button></Link>
        </div>
    );
};

export default PaymentCancle;