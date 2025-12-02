import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id')
    const axiosSecure = useAxiosSecure();

    console.log(sessionId);

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`payment-success?session_id=${sessionId}`)
            .then(res => {
                console.log(res.data)
            })
        }
    },[sessionId , axiosSecure])
    return (
        <div >
            <h2 className="text-4xl justify-center font-bold text-green-700 flex ">Payment Successful <FaCheckCircle /></h2>
        </div>
    );
};

export default PaymentSuccess;