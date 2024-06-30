// import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "../src/navbar/Navbar";
import Cards from "./cards/Cards";
import { useState } from "react";



function App() {
  const [filterData,setFilterData]=useState(cardData)
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar setFilterData={setFilterData} cardData={cardData}/>
        <Cards data={filterData} setFilterData={setFilterData}/>
      </div>
    </div>
  );
}

export default App;


const cardData = [
  {
    id:"01",
    img: "",
    videoDuration: "48:27",
    videoTitle: "Autumn Springs",
    totalPlays: "132",
    uniqueViews: "76",
    avgWatchRate: "88%",
    fullyWatched: "36",
    actions: "16",
    popularRegion: "Ind",
    createdOn: "01 Jan 2000",
    videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    descriptions:"Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself",
    playerTheme:"#80ced6"
  },
  {
    id:"02",
    img: "",
    videoDuration: "30:15",
    videoTitle: "Winter",
    totalPlays: "200",
    uniqueViews: "150",
    avgWatchRate: "75%",
    fullyWatched: "100",
    actions: "25",
    popularRegion: "USA",
    createdOn: "15 Dec 2001",
     videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
     descriptions:"The first Blender Open Movie from 2006",
     playerTheme:"#d5f4e6"
  },
  {
    id:"03",
    img: "",
    videoDuration: "15:45",
    videoTitle: "Springs",
    totalPlays: "300",
    uniqueViews: "250",
    avgWatchRate: "95%",
    fullyWatched: "200",
    actions: "50",
    popularRegion: "UK",
    createdOn: "10 Jul 2002",
     videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
     descriptions:"HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV",
     playerTheme:"#80ced6"
  },
  {
    id:"04",
    img: "",
    videoDuration: "20:30",
    videoTitle: "Monsoon",
    totalPlays: "400",
    uniqueViews: "350",
    avgWatchRate: "85%",
    fullyWatched: "300",
    actions: "40",
    popularRegion: "AUS",
    createdOn: "22 Mar 2003",
     videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
     descriptions:"Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35",
     playerTheme:"#4080F0"
  }
];

