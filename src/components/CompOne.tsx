// import React from "react";

interface AppProp {
  name: string;
}

const CompOne = ({ name }: AppProp) => {
  return (
    <>
      <p>Hello TS</p>
      <p>{name}</p>
    </>
  );
};

export default CompOne;

// export default function CompOne({ name }) {
//   return (
//     <>
//       <p>Hello TS</p>
//       <p>{name}</p>
//     </>
//   );
// }
