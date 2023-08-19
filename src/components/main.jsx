import {
  Image,
  Card,
  CardBody
} from "@chakra-ui/react";

import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../App";



export default function MainCard() {

const {videoIds} = useContext(AppContext)

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
