import React from "react";
const List = ({ data }) => {
  let arr = Object.entries(data);
  let array = arr.map((a) => (
    <li key={a[0]}>
      <span>{a[0]}</span>
      <br />
      <span>{a[1]}</span>
    </li>
  ));

  return array;
};
export default List;
