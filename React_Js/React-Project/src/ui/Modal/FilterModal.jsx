import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function FilterModal({ isOpen, toggle }) {
  const [priceRange, setPriceRange] = useState("");
  const [jewelleryType, setJewelleryType] = useState("");
  const [brands, setBrands] = useState([]);
  const [gender, setGender] = useState("");
  const [size, setSize] = useState([]);
  const [category, setCategory] = useState("");
  const [discount, setDiscount] = useState("");

  const handleCheckboxChange = (setState, state) => (event) => {
    const value = event.target.value;
    setState((prevState) =>
      prevState.includes(value)
        ? prevState.filter((item) => item !== value)
        : [...prevState, value]
    );
  };

  const clearFilters = () => {
    setPriceRange("");
    setJewelleryType("");
    setBrands([]);
    setGender("");
    setSize([]);
    setCategory("");
    setDiscount("");
  };

  const showResults = () => {
    console.log({
      priceRange,
      jewelleryType,
      brands,
      gender,
      size,
      category,
      discount,
    });
  };

  return (
    <div>
      <div
        className={`inset-0 z-[1] flex items-center flex-col w-[20rem] bg-red-50 h-[100%] justify-center ${
          isOpen ? "" : "hidden"
        }`}
        style={{
          position: "fixed",
          top: "0px",
          bottom: "0px",
          left: "0px",
        }}
      >
        <span className="flex items-center justify-between gap-3 bg-red-200 text-lg px-8 py-3 w-[100%] text-[#832729]">
          Filter
          <IoMdClose className="text-2xl" onClick={toggle} />
        </span>

        <div className="w-[100%] px-8 py-4">
          <div className="flex flex-col gap-4">
            <div>
              <label className="flex items-center gap-3 text-lg text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full"
              >
                <option value="">Select Price Range</option>
                <option value="0-50000">0 - 50,000</option>
                <option value="50000-100000">50,000 - 100,000</option>
                <option value="100000-500000">100,000 - 500,000</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-3 text-lg text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Jewellery Type
              </label>
              <select
                value={jewelleryType}
                onChange={(e) => setJewelleryType(e.target.value)}
                className="w-full"
              >
                <option value="">Select Jewellery Type</option>
                <option value="RING">Ring</option>
                <option value="MENS KADA">Mens Kada</option>
                <option value="ERRINGS">Errings</option>
                <option value="BRACELET">Bracelet</option>
                <option value="GOLD CHAIN">Gold Chain</option>
                <option value="NECKLACE">Necklace</option>
                <option value="GIFTING">Gifting</option>
                <option value="GOLD COIN">Gold Coin</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-3 text-lg text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Brand
              </label>
              <div className="flex flex-col gap-2">
                <label>
                  <input
                    type="checkbox"
                    value="holiSale"
                    checked={brands.includes("holiSale")}
                    onChange={handleCheckboxChange(setBrands, brands)}
                  />
                  Holi Sale
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="diwaliSale"
                    checked={brands.includes("diwaliSale")}
                    onChange={handleCheckboxChange(setBrands, brands)}
                  />
                  Diwali Sale
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="newArrivals"
                    checked={brands.includes("newArrivals")}
                    onChange={handleCheckboxChange(setBrands, brands)}
                  />
                  New Arrivals
                </label>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-3 text-lg text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Gender
              </label>
              <div className="flex gap-3">
                <label>
                  <input
                    type="radio"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female
                </label>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-3 text-lg text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Size
              </label>
              <div className="flex flex-col gap-2">
                <label>
                  <input
                    type="checkbox"
                    value="4"
                    checked={size.includes("4")}
                    onChange={handleCheckboxChange(setSize, size)}
                  />
                  4
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="3"
                    checked={size.includes("3")}
                    onChange={handleCheckboxChange(setSize, size)}
                  />
                  3
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="2"
                    checked={size.includes("2")}
                    onChange={handleCheckboxChange(setSize, size)}
                  />
                  2
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="1.5"
                    checked={size.includes("1.5")}
                    onChange={handleCheckboxChange(setSize, size)}
                  />
                  1.5
                </label>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-3 text-lg text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full"
              >
                <option value="">Select Category</option>
                <option value="wedding">Wedding</option>
                <option value="party">Party</option>
                <option value="casual">Casual</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-3 text-lg text-[#832729]">
                <IoIosArrowForward className="text-xl" />
                Discount Percentage
              </label>
              <select
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="w-full"
              >
                <option value="">Select Discount Percentage</option>
                <option value="1-10">1 - 10%</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-[100%]">
          <button
            className="w-[50%] p-3 text-lg border-[1px] border-[#832729] text-[#832729]"
            onClick={clearFilters}
          >
            Clear All
          </button>
          <button
            className="w-[50%] p-3 bg-[#832729] text-white text-lg"
            onClick={showResults}
          >
            Show Result
          </button>
        </div>
      </div>
    </div>
  );
}
