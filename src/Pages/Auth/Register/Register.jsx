import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocalLink from "../../../Components/Logo/SocalLink";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser , updateUserProfile} = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handelRegistration = (data) => {
    console.log("after register", data.photo[0]);
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        //store and get photo url
        const formData = new FormData();
        formData.append("image", profileImg);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios.post(image_API_URL, formData).then((res) => {
          console.log("after image upload", res.data);
          // update user profile
          const userProfile={
            displayName : data.name,
            photoURL : res.data.data.url
          }
          updateUserProfile(userProfile)
          .then(() => {
            console.log(" user profile updated")
            navigate(location.state || '/')
            
          })
          .catch(error => console.log(error))
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-5">
        <h2 className="text-center text-2xl font-bold">Register Here</h2>
        <form onSubmit={handleSubmit(handelRegistration)}>
          <fieldset className="fieldset">
            {/* photo field */}
            <label className="label">Your Photo</label>

            <input
              type="file"
              className="file-input"
              {...register("photo", { required: true })}
              placeholder="Your Photo"
            />

            {errors.email?.type === "required" && (
              <p className="text-red-500">photo is required</p>
            )}

            {/* name field */}
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your Name"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}

            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}

            {/* Password Field */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required...........</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                password must be longer then 6 character
              </p>
            )}
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>

          <button className="mx-auto w-full">
            {" "}
            I Have Already an account{" "}
            <Link className="text-blue-500 font-bold" to="/login" state={location}>
              LogIn
            </Link>{" "}
          </button>

          <h2 className="text-center text-xl font-bold">OR</h2>

          <SocalLink></SocalLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
