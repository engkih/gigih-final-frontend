import { useEffect, useState } from "react";

const videos = [{ videoUrl: "https://www.youtube.com/watch?v=7pzoRkQh8Z0" },
{ videoUrl: "https://www.youtube.com/watch?v=nsWYGGQ_buk" },
{ videoUrl: "https://www.youtube.com/watch?v=lsXqparnx24" },
{ videoUrl: "https://www.youtube.com/watch?v=XXIsQ7y_V1w" },
{ videoUrl: "https://www.youtube.com/watch?v=ZbQ1_sW9zK8" },
{ videoUrl: "https://www.youtube.com/watch?v=j4ZW3YPm58U" },
{ videoUrl: "https://www.youtube.com/watch?v=bkNveqCxsm8" },
{ videoUrl: "https://www.youtube.com/watch?v=Gw-rUCwLoQ0" },
{ videoUrl: "https://www.youtube.com/watch?v=G8eb__OOM_g" },
{ videoUrl: "https://www.youtube.com/watch?v=Xz7RQqaknf4" },
{ videoUrl: "https://www.youtube.com/watch?v=Btlttmh-xpc" },
{ videoUrl: "https://www.youtube.com/watch?v=PdfjX4I6wFs" },
{ videoUrl: "https://www.youtube.com/watch?v=dplnvPh9AlA" },
{ videoUrl: "https://www.youtube.com/watch?v=nXkgbmr3dRA" },
{ videoUrl: "https://www.youtube.com/watch?v=3NNElYHPiB4" },
{ videoUrl: "https://www.youtube.com/watch?v=dbm_o5Cg5yY" },
{ videoUrl: "https://www.youtube.com/watch?v=zhUI7MWE_Fc" }
]

//var links = []
var links = []
function PageLink() {
    const [vidLink, setVidLink] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3030/")
        .then(response => response.json())
        .then(data => setVidLink(data))
        .catch((error) => console.error(error));
      }, []);

      for (let i = 0; i < vidLink.length; i++) {
        var newLinks = vidLink[i].videoUrl;
        var insertLinks = newLinks.map(parsers)
        // return vidLink[i].videoUrl
        // console.log(newLinks)
        links.push(insertLinks)
        // var links = []

        // return pageLink = links.map(parsers())
        
    }
}

PageLink()
export var vidIds = links
// for (let i = 0; i < videos.length; i++) {
//     var newLinks = videos[i].videoUrl;
//     links.push(newLinks)
// }


function parsers(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
}

// var linkId = () => {
//     PageLink();
//     return links.map(parsers())
// }

// export var vidIds = linkId

// function pageLink() {
//     PageLink();
//     vidIds.push(links.map(parsers()));
    
// };

// export var vidIds = PageLink.map(parsers())
// export default VidFetch

// console.log(pageLink)

