import React, { FC } from "react";
import SearchPanel from "./search-panpel";
import List from "./list";

interface ListScreenProps {}

const ListScreen: FC<ListScreenProps> = (props) => {
  const {} = props;
  console.log("ListScreen");
  return (
    <div>
      <SearchPanel />
      <List />
    </div>
  );
};

export default ListScreen;
