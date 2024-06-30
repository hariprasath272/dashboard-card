import React, { useState } from "react";
import LionImg from "../assets/images/lion.jpg";
import { Checkbox } from "antd";
import "./Cards.css";
import { UniqueData } from "../uniquedata/UniqueData";

const CheckboxGroup = Checkbox.Group;

const Cards = ({ data, setFilterData }) => {
  const [checkedList, setCheckedList] = useState([]);
  const [uniqueValue, setUniqueValue] = useState(null);
  const [show, setShow] = useState(false);

  const handleClickUnique = (val) => {
    setShow(true);
    setUniqueValue(val);
  };
  const handleDelete = () => {
    if (data.length > 1) {
      const deleteCard = data.slice(0, -1);
      setFilterData(deleteCard);
    }
  };
  const plainOptions = data.map((item) => item.videoTitle);

  const checkAll = plainOptions.length === checkedList.length;

  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  const onDelete = (id) => {
    console.log(id, "id");
    const deleteValue = data.filter((data) => data.id !== id);
    console.log(deleteValue, data, "del");
    setFilterData(deleteValue);
  };

  console.log(data, "data");
  return (
    <div className="container mx-auto ps-24 pe-16 py-8">
      {show ? (
        <UniqueData uniqueValue={uniqueValue} setShow={setShow} />
      ) : (
        <>
          {data.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.map((val, id) => (
                <div
                  className=" border-2 border-slate-300 p-4 rounded-lg cursor-pointer"
                  key={id}
                >
                  <div className="img">                    
                    <CheckboxGroup
                      value={checkedList}
                      onChange={onChange}
                      className="checkbox"
                    >
                      <Checkbox key={val?.videoTitle} value={val?.videoTitle} ></Checkbox>
                    </CheckboxGroup>
                    <img
                      src={LionImg}
                      onClick={() => handleClickUnique(val)}
                    ></img>
                    <p className="duration-time">{val?.videoDuration}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="mt-2">
                      <h3 className="font-bold">{val?.videoTitle}</h3>
                      <p className="text-sm text-slate-500">
                        Recorded on {val?.createdOn}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="cursor-not-allowed">
                        <i class="bi bi-pencil-square"></i>
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => onDelete(val?.id)}
                      >
                        <i class="bi bi-trash3-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <h3 className="text-xl font-medium text-center">
                Search not found
              </h3>
            </>
          )}
          <div className="w-full flex items-center justify-center">
            <div className="w-56 text-center sm:mt-2 lg:fixed lg:bottom-10">
              <div className="grid grid-cols-2 bg-black text-white p-4 gap-4 rounded-lg">
                <div>
                <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    checked={checkAll}
                  >
                    <p className="text-white">Select all</p>
                  </Checkbox>
                </div>
                <div>
                  <p className="cursor-pointer" onClick={handleDelete}>
                    <i class="bi bi-trash3-fill"></i>
                    <span className="ps-1">Delete</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cards;
