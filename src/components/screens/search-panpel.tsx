import React, { FC, useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_APP_API_URL;

interface SearchPanelProps {}

const SearchPanel: FC<SearchPanelProps> = (props) => {
  const {} = props;
  console.log("SearchPanel");

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [users, setUsers] = useState<{ name: string; id: number }[]>([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/users`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      });
  }, [param]);

  return (
    <form action="">
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) => {
            setParam({ ...param, name: evt.target.value });
          }}
        />
        <select
          value={param.personId}
          onChange={(evt) => {
            setParam({ ...param, personId: evt.target.value });
          }}
        >
          <option value={""}>负责人</option>
          {users.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default SearchPanel;
