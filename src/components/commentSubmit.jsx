import { useState } from "react";
import { postComment } from "../services/videoFetch";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ContentContext } from "../contents";
import { Button, Input } from "@chakra-ui/react";
import CommentList from "./comments";



export default function CommentSubmit() {
  const { setOnlyComments } = useContext(ContentContext)
  const [commentSubmit, setCommentSubmit] = useState([]);
  const [userNames, setUserNames] = useState('');
  const [comments, setComments] = useState('');


  const usernameChange = e => setUserNames(e.target.value);
  const commentsChange = e => setComments(e.target.value);
  const urls = useLocation();
  const urlSubmit = urls.pathname

  const datas = {
    videoId: urlSubmit,
    comment: comments,
    username: userNames,
  }

  const dataSetter = datas


  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (userNames === "") {
      alert("Username tidak boleh kosong")
      return false
    }
    if (comments === "") {
      alert("Comments tidak boleh kosong")
      return false
    }
    else {
      postComment(urlSubmit, userNames, datas);
      setOnlyComments(oldData => [...oldData, dataSetter])
    }
    // postComment(urlSubmit, userNames, datas);
    // setOnlyComments(oldData => [...oldData, dataSetter])

  }

  // function onSubmit() {
  //   postComment(urlSubmit, userNames, comments)
  // }

  return (
    <div style={{display: "flex", flexDirection: "column", backgroundColor: "white"}}>
      <form>
        <Input type="text" placeholder="Username" value={userNames} onChange={usernameChange} />
        <Input type="text" placeholder="Comments" value={comments} onChange={commentsChange} />
        <br></br>
        <Button colorScheme='blue' type="submit" onClick={handleOnSubmit}>Submit</Button>
        {/* <button type="submit" style={{ borderColor: "black" }} onClick={handleOnSubmit}>
          submit
        </button> */}
      </form>
    </div>
  );
}
