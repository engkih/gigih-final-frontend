import {
  Image,
  Card,
  CardBody
} from "@chakra-ui/react";

import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
// import { AppContext } from "../App";
// import { vidIds } from "../reactRoute";
// import { vidIds } from "../reactRoute";
// import pageLink from "../reactRoute";
// import { pageLink } from "../reactRoute";
// import PageLink from "../reactRoute";


export default function MainCard() {
  // const [data, setData] = useState([]);
const {videoIds} = useContext(AppContext)
  // useEffect(() => {
  //   fetch("http://localhost:3030/")
  //   .then(response => response.json())
  //   .then(data => setData(data))
  //   .catch((error) => console.error(error));
  // }, []);
  // console.log({urlId})
  const listThumb = videoIds.map(
    pageLink =>
      <Card maxW="sm">

        <Link to={`./${pageLink}`}>
          <CardBody>
            <Image
              src={`https://i.ytimg.com/vi/${pageLink}/hqdefault.jpg`}
              alt="Green double couch with wooden legs"
              borderRadius="5px"
            />
          </CardBody>
        </Link>

      </Card>
  );
console.log(videoIds)
  return (
    <div className="MainBody" style={{ maxWidth:"100%", maxHeight:"100%", backgroundColor: "cadetblue", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>
      {listThumb}
    </div>
  );
}
