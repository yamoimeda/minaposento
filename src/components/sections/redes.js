import React from 'react';

export default function Redes() {
  return(
    <section class="vh">
        <div class="socialm" id="ytb" >
            <a class="overlay" href="https://www.instagram.com/aposentoaltopty/"></a>
            <div class="logo">
                <img src="static/ytb.png" alt=""/>
            </div>

            <div class="text">
                <p>Aposento Alto Panama</p>
            </div>

        </div>

        <div  class="socialm" id="insta">
            <a class="overlay" href="https://www.youtube.com/c/AposentoAltoPanama"></a>
            <div class="logo">
                <img src="static/insta.png" alt=""/>
            </div>
            <div class="text">
                <p>@aposentoaltopty</p>
            </div>
        </div>

        <div  class="socialm" id="fb">
            <a class="overlay" href="https://www.facebook.com/AposentoAltopty"></a>
            <div class="logo">
            <img src="static/fb.png" alt=""/>
            </div>
            <div class="text">
                <p>Aposento Alto Panama</p>
            </div>

        </div>
    </section>
  );
}