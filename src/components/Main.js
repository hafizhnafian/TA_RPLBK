import { Component } from "react";
import React from "react";
import Mahasiswa from "./Mahasiswa";
import Dosen from "./Dosen";
import Button from '@material-ui/core/Button';

class Main extends Component {
    state = {
        Mahasiswa: false,
        Mahasiswa: false,
        Dosen: false,
        Dosen: false,
    }
    btnmhs = () => {
        this.setState(() => {
            return {
                Mahasiswa: !this.state.Mahasiswa
            }
        })
    }
    btndsn = () => {
        this.setState(() => {
            return {
                Dosen: !this.state.Dosen
            }
        })
    }
    componentDidMount() {
        alert(`Hallo Selamat Datang!!`)
    }
    render() {
        return (
            <>
            <Button variant="contained" onClick={this.btnmhs}>{this.state.Mahasiswa ? 'Tutup Daftar' : 'Tampilkan Daftar'} Mahasiswa </Button>
            {this.state.Mahasiswa && <Mahasiswa />}
            <Button variant="contained" onClick={this.btndsn}>{this.state.Dosen ? 'Tutup Daftar' : 'Tampilkan Daftar'} Dosen </Button>
            {this.state.Dosen && <Dosen />}
            </>
        )
    }
}
export default Main;
