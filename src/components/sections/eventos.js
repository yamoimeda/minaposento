import React from 'react';
import Slider from '../Slider';
export default function eventos() {
  return(
    <section  class="vh" id="sectionevent">
        <div id="divicion">
            <div class="titulo">
                <div>
                    <p>PROXIMOS EVENTOS</p>
                </div>
            </div>

            <Slider options={{ wrapAround: true,}} >
               <div class="gallery-cell" style={{backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.452), rgba(0, 0, 0, 0.452)),url(static/koinonia.gif)"  }} >

                    <p class="title">
                        KOINONIA
                    </p>
                    <p class=" description">
                        13, 14 Y 15 DE NOVIEMBRE 
                    </p>

                </div>

                <div class="gallery-cell" style={{backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.452), rgba(0, 0, 0, 0.452)),url(static/atravez.jpg)" }}  >
                    
                    <p class="title">
                        A TRAVEZ DE LA BIBLIA
                    </p>
                    <p class=" description">
                        SABADOS 3:00 PM
                    </p>
                </div>

            </Slider>
            
        </div>
    </section>
  );
}