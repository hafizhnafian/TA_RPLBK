import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

export default class Dosen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Dosen: [],
            visible: false,
        };
    }
    handleButton = (alamat) => {
        alert("Alamat : " + alamat);
    };
    componentDidMount() {
        axios({
            method: "get",
            url: "    http://localhost:3000/dosen ",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    Dosen: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="flex flex-row flex-wrap mt-2 justify-start">
                    {this.state.Dosen.map((results, index) => {
                        return (
                            <Card name={results.name} nip={results.nip} image={results.image}/>
                        );
                    })}
            </div>
        );
    }
}
