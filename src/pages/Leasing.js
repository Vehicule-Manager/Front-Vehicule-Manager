import React, {useCallback, useEffect, useMemo, useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './../assets/style/App.scss';
import CardExampleCardProps from './../component/CardAuto';
import HeaderNavbar from './../component/layout/headers';
import Footer from './../component/layout/footer';
import {registerLocale} from "react-datepicker";
import fr from 'date-fns/locale/fr';
import {Pagination} from "@mui/material";
import Filter from './../component/FilterLeasing';
import {debounce} from 'lodash';

registerLocale('fr', fr)

export default function Leasing() {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({});
    const [vehicles, setVehicles] = useState([]);
    const [brand, setBrand] = useState([]);
    const [energie, setEnergie] = useState([]);
    const [type, setType] = useState([]);
    const [gearBoxe, setGearBoxe] = useState([]);
    const [model, setModel] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedEnergie, setSelectedEnergie] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedGearBoxe, setSelectedGearBoxe] = useState('');
    const [filteredVehicles, setFilteredVehicles] = useState([]);


    useEffect(() => {
        fetchData(page); // Pass the current page number to fetchData
    }, [page, filter]); // Add page to the dependency array

    async function fetchData(page) {
        const filterParams = Object.entries(filter)
            .map(([key, value]) => `filter[${key}]=${value}`)
            .join('&');

        let urls = [`vehicule?page=${page}${filterParams ? `&${filterParams}` : ''}`,].map((endpoint) => `${process.env.REACT_APP_API_URL}${endpoint}`);

        urls = urls.concat(["model", "brand", "energie", "type", "gearBoxe"].map((endpoint) => `${process.env.REACT_APP_API_URL}${endpoint}`));

        const dataPromises = urls.map((url) => {
            return fetch(url).then(response => response.json())
        });

        Promise.all(dataPromises).then(([vehiculeData, modelData, brandData, energieData, typeData, gearBoxeData]) => {
            setVehicles(vehiculeData);
            setModel(modelData);
            setBrand(brandData);
            setEnergie(energieData);
            setType(typeData);
            setGearBoxe(gearBoxeData);
            setFilteredVehicles(vehiculeData.data);
        });
    }

    const handleSubmit = debounce((event) => {
        event.preventDefault();

        let newFilter = {};

        if (selectedBrand !== null && selectedBrand >= 1) {
            newFilter.id_brands = selectedBrand;
        }

        if (selectedModel !== null && selectedModel >= 1) {
            newFilter.id_model_car = selectedModel;
        }

        if (selectedEnergie !== null && selectedEnergie >= 1) {
            newFilter.id_energies = selectedEnergie;
        }

        if (selectedType !== null && selectedType >= 1) {
            newFilter.id_types = selectedType;
        }

        if (selectedGearBoxe !== null && selectedGearBoxe >= 1) {
            newFilter.id_gear_boxes = selectedGearBoxe;
        }

        setFilter(newFilter);
    }, 300);

    const getMergedVehicles = useMemo(() => {
        return filteredVehicles.map((vehicle) => {
            const vehicleModel = model.find((m) => m.id === vehicle.id_model_car);
            const modelBrand = brand.find((b) => b.id === vehicleModel.id_brands);
            return { ...vehicle, model: vehicleModel, brand: modelBrand };
        });
    }, [filteredVehicles]);

    const getBrandModel = useMemo(() => {
        if (selectedBrand !== null && selectedBrand >= 1) {
            return model.filter((modelItem) => modelItem.id_brands === selectedBrand);
        }

        return model;
    }, [model, selectedBrand]);

    return (
        <div className="Leasing">
            <HeaderNavbar/>
            <div className="shop">
                <Filter
                    brand={brand}
                    model={getBrandModel}
                    energie={energie}
                    type={type}
                    gearBoxe={gearBoxe}
                    selectedBrand={selectedBrand}
                    selectedModel={selectedModel}
                    selectedEnergie={selectedEnergie}
                    selectedType={selectedType}
                    selectedGearBoxe={selectedGearBoxe}
                    setSelectedBrand={setSelectedBrand}
                    setSelectedModel={setSelectedModel}
                    setSelectedEnergie={setSelectedEnergie}
                    setSelectedType={setSelectedType}
                    setSelectedGearBoxe={setSelectedGearBoxe}
                    handleSubmit={handleSubmit}
                />
                <div className='catalogue'>
                    <div className='vehicles'>
                        {getMergedVehicles.map(vehicule => (
                            <CardExampleCardProps key={vehicule.id} item={vehicule}  />
                        ))}
                    </div>
                </div>
            </div>
            <div className='pagination'>
                <Pagination count={vehicles.last_page} page={page} onChange={useCallback(debounce((event, value) => setPage(value), 300), [])} variant="outlined" />
            </div>
            <Footer/>
        </div>
    );
}
