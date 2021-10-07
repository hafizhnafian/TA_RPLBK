import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";

export default class Mahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Mahasiswa: [],
            visible: false,
        };
    }
    handleButton = (alamat) => {
        alert("Alamat : " + alamat);
    };
    componentDidMount() {
        axios({
            method: "get",
            url: "    http://localhost:3000/mahasiswa ",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    Mahasiswa: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="flex flex-row flex-wrap mt-2 justify-start">
                    {this.state.Mahasiswa.map((results, index) => {
                        return (
                            <Card name={results.name} nim={results.nim} image={results.image}/>
                        );
                    })}
            </div>
        );
    }
}
