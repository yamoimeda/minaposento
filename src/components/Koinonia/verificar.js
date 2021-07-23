
import React, { Component } from "react";
import "react-step-progress-bar/styles.css";
import firebase from '../../firebase';
import { QRCode } from 'react-qrcode-logo';
import lgmeeaa from "./componentes/logo_aposento nuevo-01.png"
import {
    Button,
    TextField,
  
  } from "@material-ui/core";
export class verificar extends Component {
  state = {
    step: 1,
    cedula: "",
    html:""
  };
  // Go to next step
  buscar = (cedula) => {
      var newdata;
    firebase.firestore().collection("koinonia-registros").where("cedula","==",cedula)
    .get()
    .then((querySnapshot) => {
     
      querySnapshot.forEach((doc) => {
       newdata = doc.data()
      
        });
        console.log(newdata);
      var html = <div>
      <h4 className="textokoiform2">Este voleto: {newdata.verifcado == 0 ? "Aun no esta verificado":"Ya esta verificado"}</h4>
      <div  style={{display:"flex",justifyContent:"center"}}>
      <QRCode logoImage={lgmeeaa}  logoHeight={60} logoWidth={60} size={200} value={newdata.id} />
      
        <div>
        <h4 className="textokoiform4"> {newdata.pagado == 0 ? "Abonado":newdata.pagado == 1 ?"Pagado":"Pendiente"}</h4>
        <h4 className="textokoiform4">Monto{newdata.monto}</h4>
      <h4 className="textokoiform4">Nombre :{newdata.nombre+" " +newdata.apellido}</h4>
      <h4 className="textokoiform4">Red :{newdata.red}</h4>
      <h4 className="textokoiform4">Boleto de : {newdata.tipo == 1 ? 'Niño Completo' :newdata.tipo == 2 ? 'Adulto Completo'  : newdata.tipo == 3 ? 'Niño Media jornada '  : "Adulto Media jornada "}</h4>
      
        </div>
        </div>
     </div>

      if(newdata){
        this.setState({html:html})
      }
    })
    .catch((error) => {
    this.setState({html: <h4 className="textokoiform4">Este boleto No esta registrado</h4>})

    });
  
    
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {


   return(
       <>
       <h4 className="textokoiform2">Ingresa tu cédula para obtener detalles de tu reserva</h4>
       <div className="verifcar" ref={this.props.refProp}>
<TextField
          label="Cédula"
          onChange={this.handleChange("cedula")}
          defaultValue={this.state.cedula}
          variant="outlined" 
          helperText="Cédula con guiones"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginLeft: 5,marginBottom:0,  width: "45%"}}
        />
<div className="botonveri">
<Button
          style={{ background: "#fa7b25", color: "#ffff",width: "10%",margin:"auto",marginLeft:5, height:"60%"}}
          label="bUSCAR"
          onClick={()=> this.buscar(this.state.cedula)}
        >
          BUSCAR
        </Button>
</div>



</div>
<div className="resultadoverificar">
    {this.state.html}
</div>
</>
  
   )
  }
}
export default verificar;
