import React, { FC, useEffect, useState } from "react";
import SearchPanel from "./search-panpel";
import List from "./list";
import { delIsNull } from "@/utils";
import qs from "qs";
import { useDebounce } from "@/hooks";

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

  const debounceValue = useDebounce<IParams>(param, 500);

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
    const temp = delIsNull<IParams>(debounceValue);
    fetch(`${apiUrl}/projects/?${qs.stringify(temp)}`)
      .then((res) => res.json())
      .then((res) => {
        setList(res);
      });
  }, [debounceValue]);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};

export default ListScreen;
