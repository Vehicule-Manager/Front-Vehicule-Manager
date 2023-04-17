import React from 'react';
import { Button, Form } from 'semantic-ui-react';

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
                    setSelectedBrand,
                    setSelectedModel,
                    setSelectedEnergie,
                    setSelectedType,
                    setSelectedGearBoxe,
                    handleSubmit
                }) => {

    const selectedModelObj = model.find(model => model.id === selectedModel);
    const selectedModelIdBrands = selectedModelObj ? selectedModelObj.id_brands : null;

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
                    placeholder='Choississez une marque'
                    value={selectedModel !== null && selectedModel >= 1 ? selectedModelIdBrands : selectedBrand}
                    onChange={(event, { value }) => setSelectedBrand(value)}
                    disabled={selectedModel !== null && selectedModel >= 1}
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
                    placeholder='Choississez un model'
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
                    placeholder='Choississez une énergie'
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
                    placeholder='Choississez un type de véhicule'
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
            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
    );
};

export default Filter;
