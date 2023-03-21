import React, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import './../assets/style/App.scss';
import CardExampleCardProps from './../component/CardAuto';
import HeaderNavbar from './../component/layout/headers';
import Footer from './../component/layout/footer';
import { registerLocale } from "react-datepicker";
import fr from 'date-fns/locale/fr';
import {Pagination} from "@mui/material";
import Filter from './../component/FilterLeasing';
import { debounce } from 'lodash';
registerLocale('fr', fr)

export default function Leasing() {
    const [startDate, setStartDate] = useState(new Date());
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
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const itemsPerPage = 9;

    useEffect(() => {
        async function fetchData() {
            const urls = ["vehicule", "model", "brand", "energie", "type", "gearBoxe"].map((endpoint) => process.env.REACT_APP_API_URL + endpoint);

            const dataKeys = ["vehiculeData", "modelData", "brandData", "energieData", "typeData", "gearBoxeData"];

            const dataPromises = urls.map(async (url, index) => {
                const storageKey = dataKeys[index];
                let data = JSON.parse(localStorage.getItem(storageKey));

                if (!data) {
                    const response = await fetch(url);
                    data = await response.json();
                    localStorage.setItem(storageKey, JSON.stringify(data));
                }

                return data;
            });

            const [vehiculeData, modelData, brandData, energieData, typeData, gearBoxeData] = await Promise.all(dataPromises);

            setVehicles(vehiculeData);
            setModel(modelData);
            setBrand(brandData);
            setEnergie(energieData);
            setType(typeData);
            setGearBoxe(gearBoxeData);
            setFilteredVehicles(vehiculeData);
        }

        fetchData();
    }, []);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleSubmit = debounce((event) => {
        event.preventDefault();
        let newFilteredVehicles = vehicles; // Start with the complete list of vehicles

        if (selectedBrand !== null) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => vehicle.id_brands === selectedBrand);
        }
        if (selectedModel !== null) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => vehicle.id_model_car === selectedModel);
        }
        if (selectedEnergie !== null) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => vehicle.id_energies === selectedEnergie);
        }
        if (selectedType !== null) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => vehicle.id_types === selectedType);
        }
        if (selectedGearBoxe !== null) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => vehicle.id_gear_boxes === selectedGearBoxe);
        }
        if (startDate) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => {
                // Assuming vehicle.date is a string in the format 'YYYY-MM-DD'
                const vehicleDate = new Date(vehicle.date);
                return vehicleDate >= startDate;
            });
        }
        setFilteredVehicles(newFilteredVehicles); // Update filteredVehicles instead of vehicles
    }, 300);

    const getMergedVehicles = () => {
        return filteredVehicles.map((vehicle) => {
            const vehicleModel = model.find((m) => m.id === vehicle.id_model_car);
            return { ...vehicle, model: vehicleModel };
        });
    };

    const getVisibleVehicles = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return getMergedVehicles().slice(startIndex, endIndex);
    };

    console.log(getVisibleVehicles())

    return (
        <div className="Leasing">
            <HeaderNavbar/>
            <div className="shop">
                <Filter
                    brand={brand}
                    model={model}
                    energie={energie}
                    type={type}
                    gearBoxe={gearBoxe}
                    selectedBrand={selectedBrand}
                    selectedModel={selectedModel}
                    selectedEnergie={selectedEnergie}
                    selectedType={selectedType}
                    selectedGearBoxe={selectedGearBoxe}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    setSelectedBrand={setSelectedBrand}
                    setSelectedModel={setSelectedModel}
                    setSelectedEnergie={setSelectedEnergie}
                    setSelectedType={setSelectedType}
                    setSelectedGearBoxe={setSelectedGearBoxe}
                    handleSubmit={handleSubmit}
                />
                <div className='catalogue'>
                    <div className='vehicles'>
                        {getVisibleVehicles().map(vehicule => (
                            <CardExampleCardProps key={vehicule.id} item={vehicule}  />
                        ))}
                    </div>
                </div>
            </div>
            <div className='pagination'>
                <Pagination count={Math.ceil(filteredVehicles.length / itemsPerPage)} page={currentPage} onChange={handlePageChange} variant="outlined" />
            </div>
            <Footer/>
        </div>
    );
}
