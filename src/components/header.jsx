import { Tooltip, Button } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Content from "../contents";
//import Tesjs from "../reactRoute";
//import "./styles.css";
const Home = () => {
  return (
    <h1>Tokopedia Play Clone</h1>
    // <Link to="/content">Content</Link>
  )
};



export default function NavBar() {
  return (
    <div style={{maxHeight:"100%", maxWidth:"100%"}}>
      <h1>Tokopedia Play Clone</h1>
      {/* <Link to="/content">Content</Link> */}
    </div>
    //     <div className="NavBar" style={{ backgroundColor: "burlywood" }}>
    //       <Breadcrumb separator="-">
    //         <BreadcrumbItem>
    //           <BreadcrumbLink href="/content">Home</BreadcrumbLink>
    //         </BreadcrumbItem>

    //         <BreadcrumbItem>
    //           <BreadcrumbLink>
    //             <BrowserRouter>
    //               <Routes>
    //                 <Route path="/content" element={<span>testtttttt123e</span>} />
    //               </Routes>
    //             </BrowserRouter>
    //           </BreadcrumbLink>
    //         </BreadcrumbItem>

    //         <BreadcrumbItem isCurrentPage>
    //           <BreadcrumbLink href="#">Contact</BreadcrumbLink>
    //         </BreadcrumbItem>
    //       </Breadcrumb>
    //       <BrowserRouter>
    //       <Routes>
    //         <Route path="/content" Component={Content}/>
    //       </Routes>
    //     </BrowserRouter>

    // <Link to="/content">Content</Link>

    //     </div>
  );
}
