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
    NumberField,
    ReferenceField,
    ImageField,
    TextInput,
    ReferenceInput,
    SelectInput,
    NumberInput,
    required,
    SimpleForm,
    SimpleShowLayout,
} from 'react-admin';


const filters = [
    <TextInput source="search" label="Search" alwaysOn />,
    <ReferenceInput source="brand_id" label="Brand" reference="brands" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
    <ReferenceInput source="unit_id" label="Unit" reference="units" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
    <ReferenceInput source="section_id" label="Section" reference="sections" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
    <ReferenceInput source="category_id" label="Category" reference="categories" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const ItemList = props => (
    <List filters={filters} {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="img_path" />
            <NumberField source="default_quantity" />
            <ReferenceField label="Brand" source="brand.id" reference="brands" sortBy="brand__name">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Unit" source="unit.id" reference="units" sortBy="unit__name">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Section" source="section.id" reference="sections" sortBy="section__name">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Category" source="category.id" reference="categories" sortBy="category__name">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

const ItemShowActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} record={data} />
        <EditButton basePath={basePath} record={data} />
        <DeleteButton basePath={basePath} record={data} />
    </TopToolbar>
);

export const ItemShow = props => (
    <Show actions={<ItemShowActions />} {...props}>
        <SimpleShowLayout>
        <TextField source="id" />
            <TextField source="name" />
            <ImageField source="img_path" />
            <NumberField source="default_quantity" />
            <ReferenceField label="Brand" source="brand.id" reference="brands">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Unit" source="unit.id" reference="units">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Section" source="section.id" reference="sections">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Category" source="category.id" reference="categories">
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);

export const ItemCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <TextInput validate={required()} source="name" />
            <TextInput validate={required()} source="img_path" />
            <NumberInput source="default_quantity" />
            <ReferenceInput source="brand_id" reference="brands">
                <SelectInput validate={required()} optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="unit_id" reference="units">
                <SelectInput validate={required()} optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="section_id" reference="sections">
                <SelectInput validate={required()} optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="category_id" reference="categories">
                <SelectInput validate={required()} optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const ItemEdit = props => (
    <Edit {...props}>
        <SimpleForm redirect="show">
            <TextInput disabled source="id" />
            <TextInput validate={required()} source="name" />
            <TextInput validate={required()} source="img_path" />
            <NumberInput source="default_quantity" />
            <ReferenceInput source="brand_id" reference="brands">
                <SelectInput validate={required()} optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="unit_id" reference="units">
                <SelectInput validate={required()} optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="section_id" reference="sections">
                <SelectInput validate={required()} optionText="name" />
            </ReferenceInput>
            <ReferenceInput source="category_id" reference="categories">
                <SelectInput validate={required()} optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
