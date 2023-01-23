import "./App.css";
import Layout from "../src/pages/Layout.js";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Home from "../src/components/Home";
import Pokelist from "../src/components/Pokelist";
import About from "../src/components/About";
import PokeSingle from "./components/PokeSingle";
import React from "react";

function RouterWrapper(props) {
    const params = useParams();

    return (
        <PokeSingle
            params={params}
            {...props}
        />
    );
}

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Layout />}
                    >
                        <Route
                            index
                            element={<Home />}
                        />
                        <Route
                            path="pokelist"
                            element={<Pokelist />}
                        />
                        <Route
                            path="pokelist/:pokesingle"
                            element={<RouterWrapper />}
                        />
                        <Route
                            path="about"
                            element={<About />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;
