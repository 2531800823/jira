import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IParams, IUsers } from ".";

const apiUrl = import.meta.env.VITE_APP_API_URL;

interface SearchPanelProps {
  param: IParams;
  setParam: Dispatch<SetStateAction<IParams>>;
  users: IUsers[];
}

const SearchPanel: FC<SearchPanelProps> = (props) => {
  const { param, setParam, users } = props;

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
