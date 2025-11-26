import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const serviceCenter = useLoaderData();
  const regionDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionDuplicate)];
  // console.log(regions);
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegion = (region) => {
    const regionDistrict = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistricts = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistricts ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistricts ? 110 : 150;
      } else {
        const minCharge = isSameDistricts ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistricts
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    Swal.fire({
      title: "Agree with the Cost?",
      text:  `You Will be charge ${cost} TK`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmed!",
          text: "Your Parcel has been Sended.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4">
        {/* document */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              name="radio-1"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              name="radio-1"
              className="radio"
              defaultChecked
            />
            Non-Document
          </label>
        </div>

        {/* parcel info: name , weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel name</label>

            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Parcel Weight</label>

            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender details  */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            {/* Sender Name */}
            <label className="label">Sender name</label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
            />

            {/* Sender Email */}
            <label className="label">Sender Email</label>
            <input
              type="text"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
            />

            {/* Sender region */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Region</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a region"
                className="select"
              >
                <option disabled={true}>Pick a browser</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Sender District */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a District"
                className="select"
              >
                <option disabled={true}>Pick a District</option>
                {districtByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender address */}
            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
          </fieldset>

          {/* receiver details*/}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>
            {/* Receiver Name */}
            <label className="label">Receiver name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />

            {/* Receiver Name */}
            <label className="label">Receiver Email</label>
            <input
              type="text"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />

            {/* Receiver region */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Region</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a region"
                className="select"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Receiver District */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a District"
                className="select"
              >
                <option disabled={true}>Pick a District</option>
                {districtByRegion(receiverRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Receiver address */}
            <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />
          </fieldset>
        </div>
        <input
          type="submit"
          className="btn btn-primary mt-4 text-black"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
