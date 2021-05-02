import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import SettingsIcon from "@material-ui/icons/Settings";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import VibrationIcon from "@material-ui/icons/Vibration";
import AlarmIcon from "@material-ui/icons/Alarm";
import MyComponent from "../components/RangeSlider";
import Switch from "@material-ui/core/Switch";
import "./Setting.css";


const Setting: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const [checked2, setChecked2] = React.useState(false);

  const toggleChecked2 = () => {
    setChecked2((prev) => !prev);
  };

  return (
    <IonPage>
      <div id="header">
        <h1>SETTINGS</h1>
        <SettingsIcon id="settingslogo" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-12">
            <div id="firstdiv">
              <div id="firstdivsub">
                <AlarmIcon id="alarm" />
                <h2>Alarm</h2>
              </div>
              <div id="firstdivsub2">
                <FormControlLabel
                  control={
                    <Switch checked={checked} onChange={toggleChecked} />
                  }
                  label=""
                  id="form"
                />
              </div>
            </div>

            <hr />
            <div id="seconddiv">
              <div id="seconddivsub">
                <VolumeUpIcon id="volume" />
                <h2>Alarm</h2>
              </div>
              <div id="seconddivsub2">
                <MyComponent />
              </div>
            </div>

            <hr />
            <div id="seconddiv">
              <div id="seconddivsub">
                <MusicNoteIcon id="volume" />
                <h2>Alarm</h2>
              </div>
              <div id="seconddivsub2">
                <MyComponent />
              </div>
            </div>
            <hr />
            <div id="seconddiv">
              <div id="seconddivsub">
                <VibrationIcon id="volume" />
                <h2>Alarm</h2>
              </div>
              <div id="seconddivsub2">
                <FormControlLabel
                  control={
                    <Switch checked={checked2} onChange={toggleChecked2} />
                  }
                  label=""
                  id="form"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  );
};

export default Setting;