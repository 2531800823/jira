import React, { FC, useEffect, useState } from "react";
import { IUsers } from ".";

interface ListProps {
  users: IUsers[];
  list: any[];
}
const List: FC<ListProps> = (props) => {
  const { list, users } = props;

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
            <td>{item.name}</td>
            <td>{users?.find((ites) => ites.id === item.personId)?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
