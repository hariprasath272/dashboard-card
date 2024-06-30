import React, { useState } from "react";

export const VideoDescription = ({ uniqueValue }) => {
  const [folderData, setFolderData] = useState([
    { id: "01", folderName: "Test" },
  ]);

  const addFolder = () => {
    if (folderData.length < 5) {
      const addData = [...folderData, { id: folderData.length + 1 }];
      setFolderData(addData);
    }
  };
  const onDeleteFolder = () => {
    if (folderData.length > 1) {
      const deleteData = folderData.slice(0, -1);
      setFolderData(deleteData);
    }
  };
  return (
    <>
      <div>
        <div>
          <p>{uniqueValue?.descriptions}</p>
        </div>
        <div className="flex mt-6">
          <div className="w-1/4">
            <p className="text-lg font-medium">Folders</p>
          </div>
          <div className="w-9/12 border-2 border-slate-300 pt-2 ps-2 h-16 rounded-xl">
            <div className="flex gap-4">
              {folderData.map((val, id) => (
                <div key={id}>
                  {console.log(val, "val")}
                  <p className="bg-gray-200 rounded-lg px-2">Test {val?.id}</p>
                </div>
              ))}
              <div className="bg-blue-500  rounded-xl px-2">
                <i
                  class="bi bi-plus cursor-pointer"
                  style={{ color: "white", fontSize: "1rem" }}
                  onClick={addFolder}
                ></i>
                <i
                  class="bi bi-dash cursor-pointer"
                  style={{ color: "white", fontSize: "1rem" }}
                  onClick={onDeleteFolder}
                ></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-6">
          <div className="w-1/4">
            <p className="text-lg font-medium">Tags</p>
          </div>
          <div className="w-9/12 border-2 border-slate-300 pt-2 ps-2 h-16 rounded-xl">
            <div className="flex gap-4">
              <div>
                <p className=" px-2 text-sm text-slate-500">
                  Click here to add tags
                </p>
              </div>
              <div className="bg-blue-500  rounded-xl px-2">
                <i
                  class="bi bi-plus"
                  style={{ color: "white", fontSize: "1rem" }}
                ></i>
                <i
                  class="bi bi-dash"
                  style={{ color: "white", fontSize: "1rem" }}
                ></i>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-8 border-2 border-slate-200 rounded-xl mt-6">
          <div className="grid grid-cols-3  pt-1 gap-y-5">
            <div>
              <p className="text-lg font-medium">{uniqueValue?.totalPlays}</p>
              <p className="text-slate-500">Total Plays</p>
            </div>
            <div>
              <p className="text-lg font-medium">{uniqueValue?.uniqueViews}</p>
              <p className="text-slate-500">Unique views</p>
            </div>
            <div>
              <p className="text-lg font-medium">{uniqueValue?.avgWatchRate}</p>
              <p className="text-slate-500">Avg Watch Rate</p>
            </div>
            <div>
              <p className="text-lg font-medium">{uniqueValue?.fullyWatched}</p>
              <p className="text-slate-500">Fully Watched</p>
            </div>
            <div>
              <p className="text-lg font-medium">{uniqueValue?.actions}</p>
              <p className="text-slate-500">Actions</p>
            </div>
            <div>
              <p className="text-lg font-medium">
                {uniqueValue?.popularRegion}
              </p>
              <p className="text-slate-500">Popular Region</p>
            </div>
          </div>
          <button className="mt-5 text-lg font-medium w-full py-2 border-2 border-slate-200 rounded-2xl">
            View Details Reports
          </button>
        </div>

        <div className="p-6 border-2 border-slate-200 rounded-xl mt-6">
          <div className="flex justify-between ">
            <div>
              <p className=" text-slate-500 mt-2">Player Theme</p>
              <p className=" text-slate-500 mt-2">Player logo</p>
              <p className=" text-slate-500 mt-2">Privacy</p>
              <p className=" text-slate-500 mt-2">SubTitles</p>
              <p className=" text-slate-500 mt-2">Settings enabled</p>
            </div>
            <div className="text-end">
              <p className="mt-2">{uniqueValue?.playerTheme}</p>
              <p className="mt-2">Logo</p>
              <p className="mt-2">Any one with the link</p>
              <p className="mt-2">English</p>
              <p className="mt-2">comments</p>
              <p className="mt-2">Reactions</p>
              <p className="mt-2">Playback Speed</p>
            </div>
          </div>
          <button className="mt-5 text-lg font-medium w-full py-2 border-2 border-slate-200 rounded-2xl">
            Change Video Settings
          </button>
        </div>
      </div>
    </>
  );
};
