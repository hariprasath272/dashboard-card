import React from "react";
import { LeftCircleFilled } from "@ant-design/icons";
import VideoWrapper from "./VideoWrapper";
import { VideoDescription } from "./VideoDescription";

export const UniqueData = ({ uniqueValue, setShow }) => {
  return (
    <>
      <div className="flex justify-end mb-2">
        <h3 className="text-xl text-slate-500 me-2">Back</h3>
        <LeftCircleFilled
          style={{ fontSize: "36px", color: "#08c" }}
          onClick={() => setShow(false)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <VideoWrapper uniqueValue={uniqueValue} />
        <VideoDescription uniqueValue={uniqueValue} />
      </div>
    </>
  );
};
