import React, {useEffect, useMemo, useState} from 'react';
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
                    setFilteredVehicles(vehiculeData);
                });
        }
        fetchData();
    }, []);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleSubmit = debounce((event) => {
        event.preventDefault();
        let newFilteredVehicles = vehicles; // Start with the complete list of vehicles
        if (selectedBrand !== null && selectedBrand >= 1) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => vehicle.id_brands === selectedBrand);
        }
        if (selectedModel !== null && selectedModel >= 1) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => vehicle.id_model_car === selectedModel);
        }
        if (selectedEnergie !== null && selectedEnergie >= 1) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => vehicle.id_energies !== selectedEnergie);
        }
        if (selectedType !== null && selectedType >= 1) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => vehicle.id_types === selectedType);
        }
        if (selectedGearBoxe !== null && selectedGearBoxe >= 1) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => vehicle.id_gear_boxes === selectedGearBoxe);
        }
        if (startDate) {
            newFilteredVehicles = newFilteredVehicles.filter(vehicle => {
                const vehicleDate = new Date(vehicle.enterDate);
                return vehicleDate >= startDate;
            });
        }
        setFilteredVehicles(newFilteredVehicles); // Update filteredVehicles instead of vehicles
    }, 300);

    console.log(filteredVehicles)
    const getMergedVehicles = useMemo(() => {
        return filteredVehicles.map((vehicle) => {
            const vehicleModel = model.find((m) => m.id === vehicle.id_model_car);
            const modelBrand = brand.find((b) => b.id === vehicleModel.id_brands);
            return { ...vehicle, model: vehicleModel, brand: modelBrand };
        });
    }, [filteredVehicles, model, brand]);

    const getVisibleVehicles = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return getMergedVehicles.slice(startIndex, endIndex);
    };

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
