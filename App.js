import "react-native-gesture-handler";
import Navigation from "./navigation/navigation";
import { useState } from "react";
import Register from "./Views/register";

export default function App() {

    const [signedIn, setSignedIn] = useState(true)

    return (
        signedIn ? (
            <Navigation/>
        ) : (
            <Register/>
        )
    )
}

