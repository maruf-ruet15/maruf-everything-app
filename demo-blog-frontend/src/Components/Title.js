// import React from "react";
// import ReactLogo from "./ReactLogo";
// import SpringLogo from "./SpringLogo";
// import RestApiLogo from "./RestApiLogo";
//
// const Title = () => {
//   return (
//     <div className="btn " style={{
//         cursor: "default" ,
//         // position: "relative",
//         // height: "50px",
//
//     }}>
//
//       {/*<h1>*/}
//           <SpringLogo />
//         <span
//           className="text-white pt-5"
//           style={{
//             // marginLeft: "20px",
//             // paddingTop:"40px",
//               // bottom:"0",
//               // position:"absolute",
//             fontWeight: "bold",
//             textShadow: "2px 2px 3px rgb(150, 150, 150)",
//           }}
//         >
//             HOUSE RENT SCANNER
//         </span>
//         {/*<ReactLogo />*/}
//         {/*<span*/}
//         {/*  className="me-2"*/}
//         {/*  style={{*/}
//         {/*    color: "#61dafb",*/}
//         {/*    textShadow: "2px 2px 3px rgb(0,88,121)",*/}
//         {/*  }}*/}
//         {/*>*/}
//         {/*  React*/}
//         {/*</span>*/}
//
//         {/*<span*/}
//         {/*  className="ms-1 me-2"*/}
//         {/*  style={{*/}
//         {/*    color: "rgba(119,188,31)",*/}
//         {/*    textShadow: "2px 2px 3px rgb(49,118,0)",*/}
//         {/*  }}*/}
//         {/*>*/}
//         {/*  spring boot*/}
//         {/*</span>*/}
//
//         {/*<RestApiLogo />*/}
//
//         {/*<span*/}
//         {/*  className="ms-1"*/}
//         {/*  style={{*/}
//         {/*    fontWeight: "bold",*/}
//         {/*    textShadow: "2px 2px 3px rgb(150, 150, 150)",*/}
//         {/*  }}*/}
//         {/*>*/}
//         {/*  .blog*/}
//         {/*</span>*/}
//
//       {/*</h1>*/}
//     </div>
//   );
// };
//
// export default Title;



import React from "react";
import { Link } from "react-router-dom";
import SpringLogo from "./SpringLogo";

const Title = () => {
    return (
        <div
            className="btn"
            style={{
                cursor: "pointer",
            }}
        >
            <Link to="/">
                <SpringLogo />
                <span
                    className="text-white pt-5"
                    style={{
                        fontWeight: "bold",
                        textShadow: "2px 2px 3px rgb(150, 150, 150)",
                    }}
                >
          HOUSE RENT SCANNER
        </span>
            </Link>
        </div>
    );
};

export default Title;
