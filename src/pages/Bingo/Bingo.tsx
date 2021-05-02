import { IonContent, IonPage } from '@ionic/react';
import './Bingo.css';
import Menu from "../../components/Menu";


const bingo: React.FC = () => {
  return (
    <IonPage>
      <Menu />
      <IonContent fullscreen>
        <div className="container">
          <div className="row">
            <div className="col">
            <div className="grid">
              <div id='div1'>12</div>
              <div id='div2'>12</div>
              <div id='div3'>21</div>
              <div id='div4'>14</div>
              <div id='div5'>18</div>
              <div id='div6'>21</div>
              <div id='div7'>14</div>
           </div>
           <div id="info">
             <div id="infodiv1">
               Bingo
             </div>
             <div id="infodiv2">
               Player 1
             </div>
           </div>
           <div className="wrapper">
            <div className="box1">1</div>
            <div className="box2">2</div>
            <div className="box3">3</div>
            <div className="box4">4</div>
            <div className="box5">5</div>
            <div className="box6">6</div>
            <div className="box7">7</div>
            <div className="box8">8</div>
            <div className="box9">9</div>
            <div className="box10">10</div>
            <div className="box11">11</div>
            <div className="box12">12</div>
            <div className="box13">13</div>
            <div className="box14">14</div>
            <div className="box15">15</div>
            <div className="box16">16</div>
            <div className="box17">17</div>
            <div className="box18">18</div>
            <div className="box19">19</div>
            <div className="box20">20</div>
            <div className="box21">21</div>
            <div className="box22">22</div>
            <div className="box23">23</div>
            <div className="box24">24</div>
            <div className="box25">25</div>
            </div>
           <div id="secondlast">
             <h1>
               21
             </h1>
           </div>
           <div id="last">
             <div id="lastdiv1">
               Bingo
             </div>
             <div id="lastdiv2">
               Player 2
             </div>
           </div>
          </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default bingo;