import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import Card from "../../components/Card";

const Products = () => {
  const [jsonData, setJsonData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default: All
  const [sortOption, setSortOption] = useState("default"); // Default sorting option

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setJsonData(data);
        setFilteredItems(data); // Initially, display all items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? jsonData
        : jsonData.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  const showAll = () => {
    setFilteredItems(jsonData);
    setSelectedCategory("all");
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedItems.sort((a, b) => a.id - b.id);
        break;
    }

    setFilteredItems(sortedItems);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="text-4xl font-extrabold text-center mt-8 mb-12 text-orange-400">
        Explore the Latest Trends
      </h2>

      {/* products card */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button
              onClick={showAll}
              className={`${
                selectedCategory === "all"
                  ? "rounded-lg px-3 py-1 bg-[#2d3748] text-[#ffffff]"
                  : "bg-white text-[#4a5568]"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => filterItems("Dress")}
              className={`${
                selectedCategory === "Dress"
                  ? "rounded-lg px-3 py-1 bg-[#2d3748] text-[#ffffff]"
                  : "bg-white text-[#4a5568]"
              }`}
            >
              Clothing
            </button>
            <button
              onClick={() => filterItems("Hoodies")}
              className={`${
                selectedCategory === "Hoodies"
                  ? "rounded-lg px-3 py-1 bg-[#2d3748] text-[#ffffff]"
                  : "bg-white text-[#4a5568]"
              }`}
            >
              Hoodies
            </button>
            <button
              onClick={() => filterItems("Bag")}
              className={`${
                selectedCategory === "Bag"
                  ? "rounded-lg px-3 py-1 bg-[#2d3748] text-[#ffffff]"
                  : "bg-white text-[#4a5568]"
              }`}
            >
              Bag
            </button>
          </div>

          <div className="flex justify-end mb-4">
            <div className="bg-Black p-2 rounded-l-lg">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-Black text-white px-2 py-1 rounded-r-lg"
            >
              <option value="default"> Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* product card */}
        <Card filteredItems={filteredItems} />
      </div>
    </div>
  );
};

export default Products;
