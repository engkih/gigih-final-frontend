import Home from "./Home";
import { Routes, Route} from "react-router-dom";
import Content from "./contents";
import { fetchVideoUrls } from "./services/videoFetch";
import { useEffect, useState, createContext } from "react";




export const AppContext = createContext();

function App() {

  const [videosUrls, setVideosUrls] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      setVideosUrls(await fetchVideoUrls());
    }
    fetchData()
  }, [])

  const onlyUrls = videosUrls.map((list) => list.videoUrl)

  function parsers(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }

  const videoIds = onlyUrls.map(parsers)

  const pages = videoIds.map(pageLink =>
    <Route path={`/${pageLink}`} element={<Content />} />
  )

  console.log(videosUrls)
  console.log(onlyUrls)
  console.log(videoIds)
  return (
    <div style={{maxHeight:"100%", maxWidth:"100%"}}>
      <AppContext.Provider value={{videoIds}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        {pages}
      </Routes>
      </AppContext.Provider>
    </div>
  )

}



// // const dataVideoDetails = []
// // const productList = []
// // const dataSum = dataVideoDetails+productList

// // const coba1 = [{
// //   'products': ['hnfdjkg'],
// //   'comments': [{'videoid' : '32dfd','username':'riki'},{'videoid':'32dfd', 'username':'riki'}]
// // }]
// export const AppContext = createContext();
// // console.log(coba1)

// function App() {
//   const [videoUrls, setVideoUrls] = useState([]);
//   const [videoDetails, setVideoDetails] = useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//       const [result1, result2] = await Promise.all(
//         URLs.map((url) => fetch(url).then((res) => res.json()))
//       );
//       setVideoUrls(result1.map((result) => { return result.videoUrl }));
//       setVideoDetails(result2)
//       // const result = await fetch(URL)
//       // result.json().then(data => {
//       //   setVideoUrls(data.map((datas) => { return datas.videoUrl }))
//       // })
//     }
//     fetchData()
//   }, [])

//   // console.log(videoDetails)
//   // const dataVideo = videoDetails
//   // console.log(dataVideo)

//   // console.log(appState)

//   function parsers(url) {
//     var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
//     var match = url.match(regExp);
//     return match && match[7].length === 11 ? match[7] : false;
//   }

//   const dataUrls = videoUrls

//   console.log(dataUrls)


//   const urlId = dataUrls.map(parsers)
//   // console.log(urlId)
//   const pages = urlId.map(pageLink =>
//     <Route path={`/${pageLink}`} element={<Content />} />
//   )



//   // function commentExtractList (datas) {
//   //   return datas.comment
//   // }

//   // const commentList = listDataComments.map(commentExtractList)

//   console.log(videoUrls)


//   return (
//     <div>
//       <AppContext.Provider value={{urlId, videoDetails}}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/content" element={<Content />} />
//         {pages}
//       </Routes>
//       </AppContext.Provider>
//     </div>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }


export default App
