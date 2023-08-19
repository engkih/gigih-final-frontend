import SidebarL from "./components/sidebarL";
import VideoEmbed from "./components/videoEmbed";
import SidebarR from "./components/sidebarR";
import { Link } from "react-router-dom";
import { useState, useEffect, createContext, useReducer } from "react";
import { fetchDataComments, fetchDataProducts } from "./services/videoFetch";
import { useLocation } from "react-router-dom";
import { Tooltip, Button } from "@chakra-ui/react";
// import VideoEmbed from "./content-page/components/videoEmbed";
// import SidebarR from "./content-page/components/sidebarR";

//import "./styles.css";

const URL = 'http://localhost:3030/7pzoRkQh8Z0'

export const ContentContext = createContext();

export default function Content() {
  const search = useLocation();
  const [onlyComments, setOnlyComments] = useState([])
  const [onlyProducts, setOnlyProducts] = useState([])
  // const [dataDetails, setDataDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  // const [reRender, forceUpdate] = useReducer(x=>x+1,0)

  useEffect(() => {
    const fetchDatas = async () => {
      setOnlyComments(await fetchDataComments(search.pathname));
      setOnlyProducts(await fetchDataProducts(search.pathname));
      setIsLoading(false);
    }
    fetchDatas()
  }, [])


  // setOnlyComments(dataDetails.comments)
  // const onlyComments = dataDetails.comments
  // const onlyProducts = dataDetails.products



  // console.log(dataDetails)
  console.log(onlyComments)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setVideosUrls(await fetchVideoUrls());
  //   }
  //   fetchData()
  // }, [])

  //   const [appState, setAppState] = useState([])

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await fetch(URL)
  //       result.json().then(data => {
  //         setAppState(data)
  //       })
  //     }
  //     fetchData()
  //   }, [])

  // console.log(appState)

  return (
    <ContentContext.Provider value={{ onlyComments, onlyProducts, search, isLoading, setOnlyComments }}>
      <div style={{height:"100vh"}}>
        <nav style={{display: "flex", flexDirection: "row",}}>
          <h1>Tokopedia Play Clone</h1>
          <Tooltip hasArrow label='Back to Home Page' bg='red.600'>
            <Button colorScheme="messenger">
              <Link to="/">HOME</Link>
            </Button>
          </Tooltip>
          {/* <Link to="/">HOME</Link> */}
        </nav>
        <div style={{ display: "flex", flexDirection: "row", backgroundColor: "gray" }}>
          <div style={{ width: "15%" }}>
            <SidebarL />
          </div>
          <div style={{ width: "70%" }}>
            <VideoEmbed />
          </div>
          <div style={{ width: "15%" }}>
            <h2>Comments</h2>
            <SidebarR />
          </div>
        </div>
      </div>
    </ContentContext.Provider>
  );
}


// console.log(dataVideoDetails)
