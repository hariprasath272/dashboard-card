import React from 'react'

const VideoWrapper = ({uniqueValue}) => {
  return (
    <>
    <div className="flex flex-col">
          <div>
            <video controls autoplay>
              <source src={uniqueValue?.videoUrl} type="video/mp4" />
            </video>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="mt-5">
                <h3 className="text-2xl font-medium">
                  {uniqueValue?.videoTitle}
                </h3>
                <p>
                  Created on <span>{uniqueValue?.createdOn}</span>
                </p>
              </div>
              <div className="flex ">
                <button
                  className="m-3 p-2 ps-4 pe-4 w-28"
                  style={{
                    background: "black",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <span className="pe-2">
                    <i
                      class="bi bi-share-fill"
                      style={{ color: "white", fontSize: "1rem" }}
                    ></i>
                  </span>
                  Share{" "}
                </button>
                <button
                  className="m-3 p-2 ps-4 pe-4 w-28"
                  style={{
                    background: "black",
                    borderRadius: "25px",
                    color: "white",
                  }}
                >
                  <span className="pe-2">
                    <i
                      class="bi bi-pencil-square"
                      style={{ color: "white", fontSize: "1rem" }}
                    ></i>
                  </span>
                  Edit{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div>
              <button
                className="p-2 ps-4 pe-4 py-4 w-full border-2 border-slate-300"
                style={{
                  background: "white",
                  borderRadius: "25px",
                  color: "black",
                }}
              >
                <p className="font-medium text-lg">
                  <span className="pe-2">
                    <i
                      class="bi bi-person-video3"
                      style={{ color: "black", fontSize: "1.5rem" }}
                    ></i>
                  </span>
                  Video thumbnail{" "}
                </p>
              </button>
            </div>
            <div>
              <button
                className="p-2 ps-4 pe-4 py-4 w-full border-2 border-slate-300"
                style={{
                  background: "white",
                  borderRadius: "25px",
                  color: "black",
                }}
              >
                <p className="font-medium text-lg">
                  <span className="pe-2">
                    <i
                      className="bi bi-person-lines-fill"
                      style={{ color: "black", fontSize: "1.5rem" }}
                    ></i>
                  </span>
                  Video background{" "}
                </p>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div>
              <button
                className="p-2 ps-4 pe-4 py-4 w-full border-2 border-slate-300"
                style={{
                  background: "white",
                  borderRadius: "25px",
                  color: "black",
                }}
              >
                <p className="font-medium text-lg">
                  <span className="pe-2">
                    <i
                      class="bi bi-hand-thumbs-up-fill"
                      style={{ color: "black", fontSize: "1.5rem" }}
                    ></i>
                  </span>
                  Interactive CTAs
                </p>
              </button>
            </div>
            <div>
              <button
                className="p-2 ps-4 pe-4 py-4 w-full border-2 border-slate-300"
                style={{
                  background: "white",
                  borderRadius: "25px",
                  color: "black",
                }}
              >
                <p className="font-medium text-lg">
                  <span className="pe-2">
                    <i
                      class="bi bi-send-arrow-up"
                      style={{ color: "black", fontSize: "1.5rem" }}
                    ></i>
                  </span>
                  Track video
                </p>
              </button>
            </div>
          </div>
          <div className="border-2 border-slate-300 rounded-xl p-4 mt-6">
            <div className="flex justify-between items-center ">
              <div>
                <h3 className="font-medium text-lg">Last Watched</h3>
                <p>
                  <i>Last person Watched details are shown here</i>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  Anonymous view(217.XXX.108.XXX)
                </h3>
                <p className="float-end">{uniqueValue?.createdOn}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-8">
              <div>
                <h3 className="font-medium text-lg">Edit Sales Page</h3>
                <p>
                  <i>Add/select/remove sales page template for this video</i>
                </p>
              </div>
              <div className="">
                <h3 className="text-lg font-medium">New year greetings</h3>

                <div className="grid grid-cols-3 gap-3">
                  <p className="text-blue-500 underline">Preview</p>
                  <p className="text-blue-500 underline text-center">Edit</p>
                  <p className="underline">Remove</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default VideoWrapper