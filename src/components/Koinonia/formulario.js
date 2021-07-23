import React, { Component } from "react";
import Datospersonales from "./componentes/datospersonales";
import Captura from "./componentes/captura";
import Codigofinal from "./componentes/codidofinal";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import lgmeeaa from "./componentes/logo_aposento nuevo-01.png";
import firebase from '../../firebase';

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    red: "",
    igle: "",
    tipo:"",
    cedula:"",
    id:"",
    url:"",
    urlcap:"",
    files:[],
    monto:"",
    file:undefined
  };
  // Go to next step
  nextStep = () => {
    const { step,firstName, lastName,email,red,igle,tipo,
    cedula } = this.state;
    if(firstName == "" || lastName == "" || email == ""  || tipo== "" ||
      cedula == "" ){
        alert("Pofavor llene todos los campos")
      }else{
        this.setState({
          step: step + 1
        });
      }
    
  };

  // Go to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  firstStep = () => {
    this.setState({
      step: 1
    });
  };
  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  handleChangefile = (input) =>  {
    this.setState({ files: input });
  };
  handleChangeid = (input) =>  {
    this.setState({ id: input });
  };
  handleChangefilebob= input =>{
    this.setState({ file: input });
    
  }
  subircaptura=()=>{
    const { step,url,firstName,lastName,email,red,igle,tipo,cedula,monto } = this.state;
    if(this.state.files.length != 0){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = dd + '-' + mm + '-' + yyyy;
    var registro = firebase.firestore().collection("koinonia-registros").doc()
    var storageRef = firebase.storage().ref("koinonia/comprobantes");
    this.setState({ id: registro.id });
    var listRef = storageRef.child(registro.id);
    listRef.putString(this.state.file, 'data_url').then(function(snapshot) {
     snapshot.ref.getDownloadURL().then(function(downloadURL) {
        
         registro.set({
        uid: registro.id,
        nombre: firstName,
        apellido: lastName,
        correo: email,
        red: red,
        igle: igle,
        tipo: tipo,
        cedula: cedula,
        fecha: today,
        url:downloadURL,
        verificado:0,
        monto: monto
        
    })
      });

    });

     
    this.setState({
      step: step + 1
    });
    }
  
    
    
  }
  renderSwitch(step) {
    const { firstName, lastName, email, igle, red ,files,tipo,cedula,id,file,urlcap,monto} = this.state;
    const values = { firstName, lastName, email, red, igle,files,tipo,cedula,id,file,urlcap,monto };

    switch (step) {
        default:
          return <h1>User Forms not working. Enable Javascript!</h1>;
        case 1:
          return (
            <Datospersonales
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <Captura
              subircap={this.subircaptura}
              prevStep={this.prevStep}
              handleChangefile={this.handleChangefile}
              handleChange={this.handleChange}
              handleChangefilebob={this.handleChangefilebob}
              values={values}
            />
          );
        case 3:
          return (
            <Codigofinal
              handleChange={this.handleChange}
              prevStep={this.prevStep}
              values={values}
            />
          );
        //
       
      }
  }

  render() {
    const { step } = this.state;
  

   return(
       <div className="formularioCont" ref={this.props.refProp}>
           <div className="barradeprogreso">
                <ProgressBar
                        percent={100/3*step}
                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                    
                    >
                        <Step transition="scale">
                        {({ accomplished }) => (
                            <img
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="30"
                            src={lgmeeaa}
                            />
                        )}
                        </Step>
                        <Step transition="scale">
                        {({ accomplished }) => (
                            <img
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="30"
                            src={lgmeeaa}/>
                        )}
                        </Step>
                        <Step transition="scale">
                        {({ accomplished }) => (
                            <img
                            style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                            width="30"
                            src={lgmeeaa}/>
                        )}
                        </Step>
                    </ProgressBar>

                    </div>
           {this.renderSwitch(step)}

       </div>
   )
  }
}
export default UserForm;
