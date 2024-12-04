import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartProducts,
  dropdown,
  selectedcategory,
} from "../../../Actions/Actions";
import axios from "axios";
import "./Dropdown.css";

const Dropdown = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const products = useSelector((state) => state.dropDown);
  const mainProducts = useSelector((state) => state.products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        const data = response.data;
        console.log(data);
        dispatch(dropdown(data));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const handleDropdown = (e) => {
    const selectedValue = e.target.value;
    setSelectedValue(selectedValue);

    const filteredItems = mainProducts.filter(
      (item) => item.category === selectedValue
    );

    if (filteredItems.length > 0) {
      console.log("Filtered Items:", filteredItems);
    } else {
      console.log("No items found for the selected category");
    }
  };

  return (
    <div>
      <select className="dropdown" onChange={(e) => handleDropdown(e)}>
        {products.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
