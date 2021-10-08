import { Component } from "react";
import React from "react";
import Mahasiswa from "./Mahasiswa";
import Button from '@material-ui/core/Button';

class ButtonMahasiswa extends Component {
    state = {
        Mahasiswa: false,
        Mahasiswa: false,
    }
    btnmhs = () => {
        this.setState(() => {
            return {
                Mahasiswa: !this.state.Mahasiswa
            }
        })
    }
    componentDidMount() {
        alert(`Hallo Selamat Datang di Halaman Mahasiswa!!`)
    }
    render() {
        return (
            <>
            <Button variant="contained" onClick={this.btnmhs}>{this.state.Mahasiswa ? 'Tutup Daftar' : 'Tampilkan Daftar'} Mahasiswa </Button>
            {this.state.Mahasiswa && <Mahasiswa />}
            </>
        )
    }
}
export default ButtonMahasiswa;
