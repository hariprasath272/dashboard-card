import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../src/assets/images/logo.jpg"

const Navbar = ({setFilterData,cardData}) => {
  const [searchQuery, setSearchQuery] = useState('');
const onChange=(e)=>{
  const searchValue = e.target.value.toLowerCase()
  setSearchQuery(searchValue)
  const searchInput=cardData.filter((Item)=>Item?.videoTitle.toLowerCase().includes(searchValue))
  setFilterData(searchInput)

  console.log(searchQuery,searchInput,"data")
}

  return (
    <div id="navbar" className="nav">
      <div className="navbar-container">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
          <img src={logo} className='mt-2' style={{width:"47px"}}/>
            <h3 className="font-medium text-2xl ps-2">Assets</h3>
          </div>
          <div>
            <div class="Search-box">
              <input
                id="searchQueryInput"
                type="text"
                name="searchQueryInput"
                placeholder="Search"
                value={searchQuery}
                onChange={onChange}
              />
              <button
                id="searchQuerySubmit"
                type="submit"
                name="searchQuerySubmit"
                class="sear-btn"
              >
                <svg
                  style={{ width: "24px", height: "24px", color: "white" }}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#666666"
                    d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                  />
                </svg>
              </button>
              <button
                className="m-3 p-2 ps-4 pe-4"
                style={{ background: "blue", borderRadius: "15px" }}
              >
                Create{" "}
                <span className="ps-1">
                  <i
                    class="bi bi-caret-down-fill"
                    style={{ color: "white", fontSize: "1rem" }}
                  ></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
