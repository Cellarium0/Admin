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

export const SectionList = props => (
    <List filters={[<TextInput source="search" label="Search" alwaysOn />]} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="color" />
            <EditButton />
        </Datagrid>
    </List>
);

const SectionShowActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} record={data} />
        <EditButton basePath={basePath} record={data} />
        <DeleteButton basePath={basePath} record={data} />
    </TopToolbar>
);

export const SectionShow = props => (
    <Show actions={<SectionShowActions />} {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="color" />
        </SimpleShowLayout>
    </Show>
);

export const SectionCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <TextInput validate={required()} source="name" />
            <TextInput validate={required()} source="color" />
        </SimpleForm>
    </Create>
);

export const SectionEdit = props => (
    <Edit {...props}>
        <SimpleForm redirect="show">
            <TextInput disabled source="id" />
            <TextInput validate={required()} source="name" />
            <TextInput validate={required()} source="color" />
        </SimpleForm>
    </Edit>
);
