import React, { Component } from "react";
import {
  Button,
} from "@material-ui/core";
import { QRCode } from 'react-qrcode-logo';
import Dropzone, {useDropzone} from 'react-dropzone';
import lgmeeaa from "./logo_aposento nuevo-01.png"

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  constructor() {
    super();
    this.onDrop = (files) => {
        this.getAsText(files[0]);
        this.props.handleChangefile(files)
    }
    this.state = {
      disabled: false,
      files: []
    };
  }
  


  getAsText=(fileToRead)=> {
    var reader = new FileReader();
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = this.loadHandler;
    reader.onerror = this.errorHandler;
  } 

  
  loadHandler=(event)=>{
    var csv = event.target.result;
    


  }

  errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
  }

  render() {
    const { values, handleChange } = this.props;

    const files =values.files.map((file,index) => (
        <li key={file.name}>
          {file.name}
        </li>
      ));
    return (
        <section className="formg" ref={this.props.refe} >
            <h3 className="textokoiform">Guarda esta información</h3>
            <h3 className="textokoiform4">Captura este codigo</h3>
            <div>
            <h4 className="textokoiform4">Te has registrado correctamente a Koinonia 2021.</h4>
            <QRCode logoImage={lgmeeaa}  logoHeight={80} logoWidth={80} size={200} value={values.id} />
       
            </div>

            <div>
            <h4 className="textokoiform4">Guarda esta información</h4>
            <h4 className="textokoiform4">Nombre :{values.firstName+" " +values.lastName}</h4>
            <h4 className="textokoiform4">Red :{values.firstName+" " +values.lastName}</h4>
            <h4 className="textokoiform4">Boleto de : {values.tipo == 1 ? 'Niño Completo' :values.tipo == 2 ? 'Adulto Completo'  : values.tipo == 3 ? 'Niño Media jornada '  : "Adulto Media jornada "}</h4>
            </div>
            
        
        
      </section>
    );
  }
}

export default FormPersonalDetails;
