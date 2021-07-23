import React, { Component} from "react";
import {
  Button,
  TextField,

} from "@material-ui/core";

export class FormUserDetails extends Component {
  continue = e => {
    
    e.preventDefault();
    this.props.nextStep();
  };

  constructor() {
    super();
    this.state = {
      hijas:false,

    };
  }
componentDidMount(){
  const { values} = this.props;
    
    if(values.igle === "Panamá"){
      this.setState({ hijas: true });
    }

}

  handle = input => e =>{
    const {  handleChange } = this.props;
    handleChange("igle");
    if(e.target.value === "Panamá"){
      this.setState({ hijas: true });
    }else{
      this.setState({ hijas: false });
    }
  }

  render() {
      
    const { values, handleChange } = this.props;
    return (
      <section className="formg"  >
        <h3 className="textokoiform">Datos</h3>
        <div style={{flex:"row"}}>
        <TextField
          label="Nombre"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
          variant="outlined" 
          helperText="Primer Nombre"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginLeft: 5,marginBottom:0,  width: "45%"}}
        />
        <TextField
          label="Apellido"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
          variant="outlined" 
          helperText="Primer apellido"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginLeft: 5,marginBottom:0,  width: "45%"}}
        />
        </div>
        <div className="selectdiv">
            <div className="select">
                    <select name="slct" id="slct" required  onChange={handleChange("tipo")}>
                      <option selected disabled>Tipo de Boleto</option>
                      <option value="1">Niño Completo ($50 USD)</option>
                      <option value="2">Adulto Completo ($50 USD)</option>
                      <option value="3">Niño Media jornada ($33 USD)</option>
                      <option value="4">Adulto Media jornada ($33 USD)</option>
                    </select>
        
            </div>
        </div>
       

    <div style={{flex:"row"}}>
        <TextField
          label="Correo"
          onChange={handleChange("email")}
          defaultValue={values.email}
          variant="outlined" 
          helperText="Correo Electronico"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginLeft: 5,marginBottom:0,  width: "45%"}}
        />
         <TextField
          label="cédula"
          onChange={handleChange("cedula")}
          defaultValue={values.email}
          variant="outlined" 
          helperText="Cédula con guiones"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginLeft: 5,marginBottom:0,  width: "45%"}}
        />
        </div>

        <div className="selectdiv" style={{display:"flex"}}>


          
          <div className="select">
              <select name="slct2" id="slct2" onChange={this.handle("igle")}>
                <option selected disabled>Seleccione Iglesia</option>
                <option value="Panamá">Panamá</option>
                <option value="Colón">Colón</option>
                <option value="Penonomé chigore">Penonomé Chigoré </option>
                <option value="Penonomé los uveros">Penonomé Los Uveros</option>
                <option value="Barraza">Barraza</option>
                <option value="Hidekel">Pedregal</option>
                <option value="Arraijan">Arraiján</option>
                <option value="Chilibre">Chilibre</option>
                
               
              </select>
          
        </div>
        {this.state.hijas === true && <div className="select">
            <select name="slct3" id="slct3" onChange={handleChange("red")}>
              <option selected disabled>Red Apostólica</option>
              <option value="Red juvenil">Red Juvenil</option>
                <option value="Panamá Norte">Panamá Norte </option>
                <option value="Panamá Este">Panamá Este</option>
                <option value="Panamá Centro">Panamá Centro</option>
                <option value="San Miguelito">San Miguelito</option>
                <option value="Circuito 8-8">Circuito 8-8</option>
                <option value="Pueblo Nuevo">Pueblo Nuevo</option>
              
            </select>
      
          </div>}
          
        </div>
        <TextField
          label="Monto a pagar"
          onChange={handleChange("monto")}
          defaultValue={values.monto}
          variant="outlined" 
          helperText="Monto pagado a la cuenta"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          style={{ marginLeft: 5,marginBottom:0,  width: "91%"}}
        />
      
        <br />
        <br />
        <Button
          style={{ background: "#fa7b25", color: "#ffff",width: "90%",margin:"auto",height:"10%"}}
          label="Siguiente"
          onClick={this.continue}
        >
          Siguiente
        </Button>
      </section>
    );
  }
}

export default FormUserDetails;
