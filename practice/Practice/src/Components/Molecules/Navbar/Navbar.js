import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InputField from "../../Atoms/InputField/InputField";
import { useForm } from "react-hook-form";
import { cartProducts, searchData } from "../../../Actions/Actions";
import Dropdown from "../../Molecules/Dropdown/Dropdown";
const Navbar = () => {
  const { register, getValues, reset } = useForm();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const handleSearch = () => {
    const inputValue = getValues("search");
    console.log(inputValue);
    dispatch(searchData(inputValue));
    reset({ todo: "" });
    dispatch(cartProducts(products));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="bg-gray-100 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Redux Tutorial</h1>
        <div className="space-x-4">
          <Link to={"/form"} className="text-blue-500 hover:text-blue-700">
            Form
          </Link>
          <Link to={"/"} className="text-blue-500 hover:text-blue-700">
            Home
          </Link>
          <Link to={"/cart"} className="text-blue-500 hover:text-blue-700">
            Cart
          </Link>
          <span className="text-gray-700">Items: {totalItems}</span>
          <Link to={"/todo"} className="text-blue-500 hover:text-blue-700">
            Todo
          </Link>
        </div>
        <div className="flex gap-2 justify-center">
          <InputField
            name="search"
            register={(name) =>
              register(name, {
                onChange: handleSearch,
              })
            }
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;
