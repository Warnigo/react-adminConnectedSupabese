import { Admin, Resource, ShowGuesser } from "react-admin";

import { dataProvider } from './dataProvider';
import { DashBoard } from "./Dashboard";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from './users';
// import { BrowserRouter as Routes, Route } from 'react-router-dom'

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import authProvider from "./authProvider";

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={DashBoard} >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      show={ShowGuesser}
      recordRepresentation="name"
      icon={UserIcon}
    />
  </Admin>
);