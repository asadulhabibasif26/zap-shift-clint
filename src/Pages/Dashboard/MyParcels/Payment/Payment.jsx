import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const Payment = () => {

    const {id} = useParams();
    const axiosSecure = useAxiosSecure();
    const {isLoading, data: parcel} = useQuery({
        queryKey: ['parcels' , id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${id}`);
            return res.data;
        }
    })

    const handlePayment =async () => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }

        const res =  await axiosSecure.post('/create-checkout-session', paymentInfo);
        console.log(res.data);
        window.location.assign(res.data.url)
    }

    if(isLoading){
        return <span className="loading loading-infinity loading-xl"></span>
    }

    return (
        <div>
            <h2>Please Pay TK: {parcel.cost} For <span className='text-green-500'>{parcel.parcelName}</span></h2>
            <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;