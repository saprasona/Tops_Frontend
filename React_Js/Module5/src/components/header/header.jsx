import React, { useEffect, useState } from "react";
import "../header/header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/select";
import axios from "axios";

const Header = () => {
  const [categories, setcategories] = useState([
    " All Categories",
    " Milks And Dairies",
    "Clothing & Beauty",
    " Pet Toy",
    "Baking Material",
    "Fresh Fruit",
    "Wines&Drinks",
    "Fresh Seafood",
    "Fast Food",
    "Vegetables",
    "Bread and Juice",
    "Cake & Milk",
    "Coffee & Teas",
    "Pet Foods",
    "Diet Foods",
  ]);

  const countryList = [];

useEffect (()=>{
  getCountry("https://countriesnow.space/api/v0.1/countries/");
},[]);

const getCountry =async(url)=>{
  try{
await axios.get(url) .then((res)=>{
  if(res!==null){
    // console.log(res.data.data);
    countryList.push(res.data.data.country);
  }
})
  }catch(error){
    console.log(error.message);
  }
}


  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} />
            </div>

            {/* ------headerSearch start-------- */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <Select data={categories} />

                <div className="search">
                  <input type="text" placeholder="Search for items.." />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <Select data={getCountry}/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
