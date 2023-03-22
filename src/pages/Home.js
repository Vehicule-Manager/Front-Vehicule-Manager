import 'semantic-ui-css/semantic.min.css';
import React, {useEffect, useState} from 'react';
import {Icon} from 'semantic-ui-react';
import './../App.css';
import './../assets/style/App.scss';
import CardExampleCardProps from './../component/CardAuto';
import HeaderNavbar from './../component/layout/headers';
import Footer from './../component/layout/footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    const [model, setModel] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const urls = ["vehicule", "model"].map((endpoint) => process.env.REACT_APP_API_URL + endpoint);

            const dataPromises = urls.map((url) => {
                return fetch(url).then(response => response.json())
            });

            Promise.all(dataPromises).then(([vehiculeData, modelData]) => {
                setVehicles(vehiculeData);
                setModel(modelData);
            });
        }
        fetchData();
    }, []);

    const getMergedVehicles = () => {
        return vehicles.map((vehicle) => {
            const vehicleModel = model.find((m) => m.id === vehicle.id_model_car);
            return { ...vehicle, model: vehicleModel };
        });
    };

    return (
        <div className="Home">
            <HeaderNavbar/>
            <h1>Bienvenue sur « Auto Rentals » !</h1>
            <p>
                Vous recherchez un nouveau véhicule en location, que ce soit en LLD ou en LOA, pour votre besoin de
                déplacement professionnel ou personnel ?
            </p>
            <p>
                Nous vous proposons divers choix de marques et de modèles, mais aussi de couleur selon vos
                préférences !
            </p>
            <p>
                Si vous le souhaitez, vous pouvez nous contacter par téléphone, par mail ou venir directement sur
                place pour obtenir les renseignements souhaités.
            </p>
            <p><strong>*Voir ci-dessous pour obtenir les modalités de contact</strong></p>

            <h2>Nos locations du moment</h2>

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 3,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {getMergedVehicles().map(vehicule => (
                    <CardExampleCardProps key={vehicule.id} item={vehicule}  />
                ))}
            </Carousel>
    <h2>Nous contacter</h2>

    <div className='contactsContainer'>
        <a className='contactsCard' href='tel:030204204'>
            <Icon name='phone' size='huge' circular inverted/>
            <div>03 02 04 20 44</div>
        </a>
        <a className='contactsCard' href='mailto:rien.rien@gmail.com'>
            <Icon name='mail' size='huge' circular inverted/>
            <div>rien.rien@gmail.com</div>
        </a>
        <a className='contactsCard' href='https://goo.gl/maps/5WKCjpvjAZpQHQNQ8'>
            <Icon name='map marker alternate' size='huge' circular inverted/>
            <div>10 rue belleville <br/>60200 Compiègne</div>
        </a>
    </div>
    <Footer/>
</div>
)
    ;
}

export default Home
