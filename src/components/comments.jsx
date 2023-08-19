import { useContext } from "react";
import { ContentContext } from "../contents";
import { Divider } from "@chakra-ui/react";

// function CommentLoading() {
//   const { isLoading, onlyComments } = useContext(ContentContext);
//   const commentContent =
//     onlyComments.map((comment) =>
//       <ul>{comment.username}
//         <li>{comment.comment}</li>
//       </ul>
//     )

//   if (isLoading) {
//     return (
//       <p>"Loading Comments"</p>
//     )
//   }

//   return (
//     <>
//       {commentContent}
//     </>
//   )
// }
function CommetsIsLoading() {
  const { onlyComments } = useContext(ContentContext);

  // function commentBody(commentData) {
  //   return (
  //     <ul>{commentData.username}
  //       <li>{commentData.comment}</li>
  //     </ul>
  //   )
  // }

  // const commentShow = onlyComments.map(commentBody)

  if (onlyComments === undefined) {
    return <p>Loading Comments</p>
  }
  return onlyComments.map((commentsdatas) =>
      <div>
        <ul>{commentsdatas.username}
          <li style={{listStyle:"none"}}>{commentsdatas.comment}</li>
        </ul>
        <Divider />
      </div>
    )


}

export default function CommentList() {

  // const { onlyComments, isLoading } = useContext(ContentContext);


  // const loadingTheComments = () => {
  //   if (isLoading===true) {
  //     return <p>"Loading Comments"</p>

  //   }

  //   return <p>"Ini adalah Comments"</p>

  // }

  // if (isLoading == true) {
  //   <p>'Loading Comments'</p>
  // } else {
  //   onlyComments.map((comment) =>
  //     <ul>{comment.username}
  //       <li>{comment.comment}</li>
  //     </ul>)
  // }

  // onlyComments.map((comment) =>
  //   <ul>{comment.username}
  //     <li>{comment.comment}</li>
  //   </ul>
  // )

  // console.log(onlyComments)
  // console.log(isLoading)

  return (
    <div>
      {/* <h2>"ini adalah bagian comments"</h2> */}
      <CommetsIsLoading />
    </div>
  );
}
