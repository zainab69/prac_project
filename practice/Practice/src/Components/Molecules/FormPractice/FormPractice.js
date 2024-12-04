import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./FormPractice.css";
import InputField from "../../Atoms/InputField/InputField";
const FormPractice = () => {
  const defaultValues = {
    firstName: "",
    email: "",
  };
  const schema = yup
    .object({
      firstName: yup.string("Name is required ").required(),
      email: yup.string("email is required").required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="sm:w-64 md:w-96 lg:w-1/2 rounded-md h-80 bg-slate-50 shadow-lg to-white p-4 flex flex-col justify-center gap-3 align-center  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="p-4 text-2xl font-semibold">Form practice </h2>
       <div>
       <InputField
          name="firstName"
          register={register}
          error={errors.firstName}
        />
       </div>
        <InputField name="email" register={register} error={errors.email} />
        <button
          className="bg-lime-800 p-4 text-white rounded-md text-2xl "
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
};
export default FormPractice;
