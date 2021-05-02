import React from "react";
import Menu from "../../components/Menu";
import "./Chess.css";
import { IonContent, IonPage} from "@ionic/react";

const SliderPage: React.FC = () => {
  return (
    <>
      <IonPage>
        <IonContent>
        <Menu />
        <div className="container">
          <div className="row">
            <div className="col">
            <div>
    <div className="box">&#9814;</div>
    <div className="box black">&#9816;</div>
    <div className="box">&#9815;</div>
    <div className="box black">&#9812;</div>
    <div className="box">&#9813;</div>
    <div className="box black">&#9815;</div>
    <div className="box">&#9816;</div>
    <div className="box black">&#9814;</div>
     </div>

     <div>
        <div className="box black">&#9817;</div>
        <div className="box">&#9817;</div>
        <div className="box black">&#9817;</div>
        <div className="box">&#9817;</div>
        <div className="box black">&#9817;</div>
        <div className="box">&#9817;</div>
        <div className="box black">&#9817;</div>
        <div className="box">&#9817;</div>
         </div>
            
         <div>
            <div className="box"></div>
            <div className="box black"></div>
            <div className="box"></div>
            <div className="box black"></div>
            <div className="box"></div>
            <div className="box black"></div>
            <div className="box"></div>
            <div className="box black"></div>
             </div>
             
             <div>
                <div className="box black"></div>
                <div className="box"></div>
                <div className="box black"></div>
                <div className="box"></div>
                <div className="box black"></div>
                <div className="box"></div>
                <div className="box black"></div>
                <div className="box"></div>
                 </div>
   
                 <div>
                    <div className="box"></div>
                    <div className="box black"></div>
                    <div className="box"></div>
                    <div className="box black"></div>
                    <div className="box"></div>
                    <div className="box black"></div>
                    <div className="box"></div>
                    <div className="box black"></div>
                     </div>
                     
                     <div>
                        <div className="box black"></div>
                        <div className="box"></div>
                        <div className="box black"></div>
                        <div className="box"></div>
                        <div className="box black"></div>
                        <div className="box"></div>
                        <div className="box black"></div>
                        <div className="box"></div>
                         </div>
   
                         <div>
                            <div className="box">&#9823;</div>
                            <div className="box black">&#9823;</div>
                            <div className="box">&#9823;</div>
                            <div className="box black">&#9823;</div>
                            <div className="box">&#9823;</div>
                            <div className="box black">&#9823;</div>
                            <div className="box">&#9823;</div>
                            <div className="box black">&#9823;</div>
                             </div>
                             
                             <div>
                                <div className="box black">&#9820;</div>
                                <div className="box">&#9822;</div>
                                <div className="box black">&#9821;</div>
                                <div className="box">&#9819;</div>
                                <div className="box black">&#9818;</div>
                                <div className="box">&#9821;</div>
                                <div className="box black">&#9822;</div>
                                <div className="box">&#9820;</div>
                                 </div>

            </div>
          </div>
        </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default SliderPage;
