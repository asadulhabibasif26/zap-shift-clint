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

    if(isLoading){
        return <span className="loading loading-infinity loading-xl"></span>
    }

    return (
        <div>
            <h2>Please Pay For <span className='text-green-500'>{parcel.parcelName}</span></h2>
        </div>
    );
};

export default Payment;