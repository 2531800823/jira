import React, { FC, useEffect, useState } from "react";
import SearchPanel from "./search-panpel";
import List from "./list";
import { delIsNull } from "@/utils";
import qs from "qs";

interface ListScreenProps {}
const apiUrl = import.meta.env.VITE_APP_API_URL;

export interface IParams {
  name: string;
  personId: string;
}
export interface IUsers {
  personId: number;
  name: string;
  id: number;
}

const ListScreen: FC<ListScreenProps> = (props) => {
  const [param, setParam] = useState<IParams>({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);

  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/users`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      });
  }, []);

  useEffect(() => {
    const temp = delIsNull<IParams>(param);
    fetch(`${apiUrl}/projects/?${qs.stringify(temp)}`)
      .then((res) => res.json())
      .then((res) => {
        setList(res);
      });
  }, [param]);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};

export default ListScreen;
