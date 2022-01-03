import * as React from "react";
import { API_URL } from "./config";
import { fetchUtils, Admin, Resource } from "react-admin";
import cellariumDataProvider from "./providers/cellariumDataProvider.ts";
import cellariumAuthProvider from "./providers/cellariumAuthProvider.ts";
import UserIcon from '@material-ui/icons/Group';
import { UserList, UserShow, UserCreate, UserEdit } from './resources/users';
import { BrandList, BrandShow, BrandCreate, BrandEdit } from './resources/brands';
import { UnitList, UnitShow, UnitCreate, UnitEdit } from './resources/units';
import { SectionList, SectionShow, SectionCreate, SectionEdit } from './resources/sections';
import { CategoryList, CategoryShow, CategoryCreate, CategoryEdit } from './resources/categories';
import { ItemList, ItemShow, ItemCreate, ItemEdit } from './resources/items';

const httpClient = (url, options = {}) => {
  if (!options.headers)
    options.headers = new Headers({ Accept: 'application/json' });
  const token = localStorage.getItem('admin_token');
  options.headers.set('Authorization', `Bearer ${token}`);
  options.headers.set('Access-Control-Expose-Headers', 'X-Total-Count');
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = cellariumDataProvider(API_URL, httpClient);

const App = () => (
  <Admin authProvider={cellariumAuthProvider} dataProvider={dataProvider}>
      <Resource name="users" list={UserList} show={UserShow} create={UserCreate} edit={UserEdit} icon={UserIcon}/>
      <Resource name="brands" list={BrandList} show={BrandShow} create={BrandCreate} edit={BrandEdit} />
      <Resource name="units" list={UnitList} show={UnitShow} create={UnitCreate} edit={UnitEdit} />
      <Resource name="sections" list={SectionList} show={SectionShow} create={SectionCreate} edit={SectionEdit} />
      <Resource name="categories" list={CategoryList} show={CategoryShow} create={CategoryCreate} edit={CategoryEdit} />
      <Resource name="items" list={ItemList} show={ItemShow} create={ItemCreate} edit={ItemEdit} />
  </Admin>
);

export default App;
