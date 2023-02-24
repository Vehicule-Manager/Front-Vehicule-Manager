import 'semantic-ui-css/semantic.min.css';
import React, {useEffect, useState} from 'react';
import {Button, Form} from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './../App.css';
import './../assets/style/App.scss';
import CardExampleCardProps from './../component/CardAuto';
import HeaderNavbar from './../component/layout/headers';
import Footer from './../component/layout/footer';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr)

export default function Leasing() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [vehicule, setVehicles] = useState([]);
    const [brand, setBrand] = useState([]);
    const [energie, setEnergie] = useState([]);
    const [type, setType] = useState([]);
    const [gearBoxe, setGearBoxe] = useState([]);
    const [model, setModel] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(process.env.REACT_APP_API_URL + "vehicule");
            const data = await response.json();
            setVehicles(data);
            const model = await fetch(process.env.REACT_APP_API_URL + "model");
            const modelData = await model.json();
            setModel(modelData);
            const brand = await fetch(process.env.REACT_APP_API_URL + "brand");
            const brandData = await brand.json();
            setBrand(brandData);
            const energie = await fetch(process.env.REACT_APP_API_URL + "energie");
            const energieData = await energie.json();
            setEnergie(energieData);
            const type = await fetch(process.env.REACT_APP_API_URL + "type");
            const typeData = await type.json();
            setType(typeData);
            const gearBoxe = await fetch(process.env.REACT_APP_API_URL + "gearBoxe");
            const gearBoxeData = await gearBoxe.json();
            setGearBoxe(gearBoxeData);
        }
        fetchData();
    }, []);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    const options = [
        {key: 'm', text: 'Male', value: 'male'},
        {key: 'f', text: 'Female', value: 'female'},
        {key: 'o', text: 'Other', value: 'other'},
    ];
    const brandOptions =
        brand.map(brand => (
            {key: brand.id, text: brand.name, value: brand.name}
        ));
    const energieOptions =
        energie.map(energie => (
            {key: energie.id, text: energie.name, value: energie.name}
        ));
    const typeOptions =
        type.map(type => (
            {key: type.id, text: type.name, value: type.name}
        ));
    const gearBoxeOptions =
        gearBoxe.map(gearBoxe => (
            {key: gearBoxe.id, text: gearBoxe.name, value: gearBoxe.name}
        ));
    const modelOptions =
        model.map(model => (
            {key: model.id, text: model.name, value: model.name}
        ));
    return (
        <div className="Leasing">
            <HeaderNavbar/>
            <div className="shop">
                <Form className="filter">
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Marque'
                            options={brandOptions}
                            placeholder='Marque'
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Model'
                            options={modelOptions}
                            placeholder='Model'
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Tarif'
                            options={options}
                            placeholder='Tarif'
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Énergie'
                            options={energieOptions}
                            placeholder='Énergie'
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Type'
                            options={typeOptions}
                            placeholder='Type'
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Boite de vitesse'
                            options={gearBoxeOptions}
                            placeholder='Boite de vitesse'
                        />
                    </Form.Field>
                    <Form.Field>
                        <DatePicker
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            locale="fr"
                            selectsRange
                            inline
                        />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                <div className='catalogue'>
                    {vehicule.map(vehicule => (
                        <CardExampleCardProps key={vehicule.id} item={ vehicule } />
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
