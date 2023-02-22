import React, {useEffect} from 'react';
import HeaderNavbar from './../component/layout/headers';
import Footer from './../component/layout/footer';
import { Icon } from 'semantic-ui-react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'M.', value: 'male' },
  { key: 'f', text: 'Mme', value: 'female' },
]



export default function Contact() {

  useEffect(() => {
    // A retirer
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
    };
      
    fetch(process.env.REACT_APP_API_URL + "vehicule")
    .then(response => response.json())
    .then(data => console.log(data));
    // .then(data => this.setState({ postId: data.id }));   
  });

  console.log(process.env.REACT_APP_LARAVEL)
  return (
    <div>
      <HeaderNavbar />
      <h1>Contact</h1>
      <div class="formContainer">
        <div class="formContact">
          <Form>
            {/* Formulaire de contact : Nom/Prénom/Genre */}
            <Form.Group widths='equal'>
              <Form.Field
                control={Select}
                options={options}
                placeholder='Civilité *'
              />
              <Form.Field
                control={Input}
                placeholder='Nom *'
              />
              <Form.Field
                control={Input}
                placeholder='Prénom *'
              />
            </Form.Group>
            {/* Formulaire de contact : Adresse mail */}
            <Form.Field
              id='form-input-control-error-email'
              control={Input}
              placeholder='adresse mail *'
            />
            {/* Formulaire de contact : Choix de service */}
            <Form.Group widths='equal'>
              <Form.Field
                label='Location'
                control='input'
                type='radio'
                name='htmlRadios'
              />
              <Form.Field
                label='Achat'
                control='input'
                type='radio'
                name='htmlRadios'
              />
              <Form.Field
                label='SAV'
                control='input'
                type='radio'
                name='htmlRadios'
              />
              <Form.Field
                label='Autre'
                control='input'
                type='radio'
                name='htmlRadios'
              />
            </Form.Group>
            <Form.Group widths='equal'>
              {/* Message  */}
              <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Message'
                placeholder='Votre message'
              />
            </Form.Group>
            <Form.Group widths='equal'>
              {/*Bouton de validation */}
              <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Valider'
              />
            </Form.Group>
          </Form>
          <p>* Champs obligatoires.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
