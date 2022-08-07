import React, { FC, useEffect, useState } from "react";

interface ListProps {}
const apiUrl = import.meta.env.VITE_APP_API_URL;
console.log(apiUrl);
const List: FC<ListProps> = (props) => {
  const [list, setList] = useState([]);
  const {} = props;

  useEffect(() => {
    fetch(`${apiUrl}/projects`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setList(res);
      });
  }, []);

  console.log("List");
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.organization}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
