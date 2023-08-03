// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// function Prop(loll) {
//   return (
//     // PROPS
//     <>
//       {/* <div>{loll.a}</div>
//       <div>{loll.lol}</div>
//       <div>{loll.kit}</div> */}
      <button
        onClick={() => {
          toast.success("🦄 Wow so easy!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }}
      >
        toast
      </button>

//       <ToastContainer />
//     </>
//   );
// }

// export default Prop;
