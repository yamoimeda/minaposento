import React from 'react';

const ig = ['Aposento alto Colón','Aposento alto Barraza','Aposento alto Penonomé','Aposento alto Arraijan','Aposento alto Chilibre','Aposento alto Hidekel']
export default function Iglesias() {
  return(
    <section class="vh">
        <div class="titulo">
            <div>
                <p>NUESTRAS IGLESIAS HIJAS</p>
            </div>
        </div>

    <div style= {{display: "flex", justifyContent: "center"}}>
    {ig.map((ig, index) => (
             <div class="card" key={index}>
                <div class="top">
                    <img src="static/logo_aposento nuevo-01(1).png"  alt="" />
                
                    <button class="like">
                        <div class="hexagon"><img src="https://img.icons8.com/fluent-systems-filled/24/000000/instagram-new.png"/></div>
                    </button>
                </div>

             <div class="bottom">
                <div class="desc">{ig}
                </div>
                <div class="buttons">      
                </div>
             </div>
           </div>
            ))}
        
            </div>
    </section>
  );
}