import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player"

export default function VideoEmbed() {
    const search = useLocation();
    return (
        // console.log(search),
        <div style={{
            backgroundColor: "lightblue",
            textAlign: "center",
            height: "100%"
        }}>
            {/* <ReactPlayer 
            // width="100%"
            // height="100%"
            url={`https://www.youtube.com/embed/${search.pathname}`}
            playing={true}
            /> */}
            <iframe
                title="videoss"
                allow="autoplay"
                allowFullScreen
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${search.pathname}`}
            ></iframe>
        </div>
    );
}
