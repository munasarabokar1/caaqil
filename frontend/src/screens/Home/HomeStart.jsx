import React from "react";
import { IonNav } from '@ionic/react';
import Home from "./Home";
import PageOne from "../../components/Expire/page1";
function HomeStart() {
    return <IonNav root={() => <Home />}></IonNav>;
}

export default HomeStart