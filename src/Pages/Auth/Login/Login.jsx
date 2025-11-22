import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocalLink from "../../../Components/Logo/SocalLink";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handelLogin = (data) => {
    console.log(data);
    singInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || '/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center"></h3>
      <p className="text-center text-2xl font-bold">Please Login</p>
      <form onSubmit={handleSubmit(handelLogin)} className="card-body">
        <fieldset className="fieldset">
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

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />

          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              password must be 6 characters or longer
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        <button className="mx-auto w-full">
          {" "}
          I have have not an account{" "}
          <Link className="text-blue-500 font-bold" state={location?.state} to="/register">
            Register
          </Link>{" "}
        </button>

        <h2 className="text-center text-xl font-bold">OR</h2>

        <SocalLink></SocalLink>
      </form>
    </div>
  );
};

export default Login;
