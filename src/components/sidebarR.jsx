import CommentList from "./comments";
import CommentSubmit from "./commentSubmit";

export default function SidebarR() {
  // const allComments = comments.map((comments) => 
  //   <div style={{ borderColor: "red", borderWidth: "10px" }}>
  //   <ul>`${comments.username}`
  //     <li>`${comments.comment}`</li>
  //   </ul>
  // </div>)

  return (

    <div className="SidebarR" style={{
      backgroundColor: "limegreen",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      width: "100%"
    }}>
      <CommentList />
      <CommentSubmit />
    </div>
  );
}
