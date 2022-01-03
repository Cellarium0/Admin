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
    TextInput,
    required,
    SimpleForm,
    SimpleShowLayout,
} from 'react-admin';

export const BrandList = props => (
    <List filters={[<TextInput source="search" label="Search" alwaysOn />]} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

const BrandShowActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} record={data} />
        <EditButton basePath={basePath} record={data} />
        <DeleteButton basePath={basePath} record={data} />
    </TopToolbar>
);

export const BrandShow = props => (
    <Show actions={<BrandShowActions />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

export const BrandCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <TextInput validate={required()} source="name" />
        </SimpleForm>
    </Create>
);

export const BrandEdit = props => (
    <Edit {...props}>
        <SimpleForm redirect="show">
            <TextInput disabled source="id" />
            <TextInput validate={required()} source="name" />
        </SimpleForm>
    </Edit>
);
