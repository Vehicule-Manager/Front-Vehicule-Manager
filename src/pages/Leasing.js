import 'semantic-ui-css/semantic.min.css';
import React, {useState} from 'react';
import {Button, Form} from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './../App.css';
import './../assets/style/App.scss';
import CardExampleCardProps from './../component/CardAuto';
import HeaderNavbar from './../component/layout/headers';
import Footer from './../component/layout/footer';

export default function Leasing() {
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(null);
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

    return (
        <div className="Leasing">
            <HeaderNavbar/>
            <div className="shop">
                <Form className="filter">
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Type'
                            options={options}
                            placeholder='Type'
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Énergie'
                            options={options}
                            placeholder='Énergie'
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
                            label='Marque'
                            options={options}
                            placeholder='Marque'
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select
                            fluid
                            label='Boite de vitesse'
                            options={options}
                            placeholder='Boite de vitesse'
                        />
                    </Form.Field>
                    <Form.Field>
                        <DatePicker
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                        />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
                <div className='catalogue'>
                    <CardExampleCardProps/>
                    <CardExampleCardProps/>
                    <CardExampleCardProps/>
                    <CardExampleCardProps/>
                    <CardExampleCardProps/>
                    <CardExampleCardProps/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
