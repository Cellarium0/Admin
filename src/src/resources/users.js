import * as React from "react";
import {
    List,
    Show,
    Create,
    Edit,
    Datagrid,
    TopToolbar,
    ListButton,
    EditButton,
    DeleteButton,
    TextField,
    EmailField,
    DateField,
    BooleanField,
    TextInput,
    BooleanInput,
    required,
    SimpleForm,
    SimpleShowLayout,
} from 'react-admin';

export const UserList = props => (
    <List filters={[<TextInput source="search" label="Search" alwaysOn />]} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="username" />
            <EmailField source="email" />
            <DateField source="updated_at" />
            <DateField source="created_at" />
            <BooleanField source="is_active" />
            <BooleanField source="is_admin" />
            <EditButton />
        </Datagrid>
    </List>
);

const UserShowActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} record={data} />
        <EditButton basePath={basePath} record={data} />
        <DeleteButton basePath={basePath} record={data} />
    </TopToolbar>
);

export const UserShow = props => (
    <Show actions={<UserShowActions />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="username" />
            <EmailField source="email" />
            <DateField source="updated_at" />
            <DateField source="created_at" />
            <BooleanField source="is_active" />
            <BooleanField source="is_admin" />
        </SimpleShowLayout>
    </Show>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <TextInput validate={required()} source="username" />
            <TextInput validate={required()} source="email" type="email" />
            <TextInput validate={required()} source="password" type="password" />
            <BooleanInput validate={required()} source="is_active" />
            <BooleanInput validate={required()} source="is_admin" />
        </SimpleForm>
    </Create>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm redirect="show">
            <TextInput disabled source="id" />
            <TextInput validate={required()} source="username" />
            <TextInput validate={required()} source="email" type="email" />
            <BooleanInput validate={required()} source="is_active" />
            <BooleanInput validate={required()} source="is_admin" />
        </SimpleForm>
    </Edit>
);
