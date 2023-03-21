import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import DatePicker from "react-datepicker";

const Filter = ({
                    brand,
                    model,
                    energie,
                    type,
                    gearBoxe,
                    selectedBrand,
                    selectedModel,
                    selectedEnergie,
                    selectedType,
                    selectedGearBoxe,
                    startDate,
                    setStartDate,
                    setSelectedBrand,
                    setSelectedModel,
                    setSelectedEnergie,
                    setSelectedType,
                    setSelectedGearBoxe,
                    handleSubmit
                }) => {
    return (
        <Form className="filter">
            <Form.Field>
                <Form.Select
                    fluid
                    label='Marque'
                    options={[
                        { key: null, text: null, value: null }, // empty option
                        ...brand.map(brand => ({ key: brand.id, text: brand.name, value: brand.id }))
                    ]}
                    placeholder='Marque'
                    value={selectedBrand}
                    onChange={(event, { value }) => setSelectedBrand(value)}
                />
            </Form.Field>
            <Form.Field>
                <Form.Select
                    fluid
                    label='Model'
                    options={[
                        { key: null, text: null, value: null }, // empty option
                        ...model.map(model => ({ key: model.id, text: model.name, value: model.id }))
                    ]}
                    placeholder='Model'
                    value={selectedModel}
                    onChange={(event, { value }) => setSelectedModel(value)}
                />
            </Form.Field>
            <Form.Field>
                <Form.Select
                    fluid
                    label='Énergie'
                    options={[
                        { key: null, text: null, value: null }, // empty option
                        ...energie.map(energie => ({key: energie.id, text: energie.name, value: energie.id}))
                    ]}
                    placeholder='Énergie'
                    value={selectedEnergie}
                    onChange={(event, { value }) => setSelectedEnergie(value)}
                />
            </Form.Field>
            <Form.Field>
                <Form.Select
                    fluid
                    label='Type'
                    options={[
                        { key: null, text: null, value: null }, // empty option
                        ...type.map(type => ({key: type.id, text: type.name, value: type.id}))
                    ]}
                    placeholder='Type'
                    value={selectedType}
                    onChange={(event, { value }) => setSelectedType(value)}
                />
            </Form.Field>
            <Form.Field>
                <Form.Select
                    fluid
                    label='Boite de vitesse'
                    options={[
                        { key: null, text: null, value: null }, // empty option
                        ...gearBoxe.map(gearBoxe => ({key: gearBoxe.id, text: gearBoxe.name, value: gearBoxe.id}))
                    ]}
                    placeholder='Boite de vitesse'
                    value={selectedGearBoxe}
                    onChange={(event, { value }) => setSelectedGearBoxe(value)}
                />
            </Form.Field>
            <Form.Field>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    inline
                />
            </Form.Field>
            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
    );
};

export default Filter;
