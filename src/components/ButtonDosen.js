import { Component } from "react";
import React from "react";
import Dosen from "./Dosen";
import Button from '@material-ui/core/Button';

class ButtonDosen extends Component {
    state = {
        Dosen: false,
        Dosen: false,
    }
    btndsn = () => {
        this.setState(() => {
            return {
                Dosen: !this.state.Dosen
            }
        })
    }
    componentDidMount() {
        alert(`Hallo Selamat Datang di Halaman Dosen!!`)
    }
    render() {
        return (
            <>
            <Button variant="contained" onClick={this.btndsn}>{this.state.Dosen ? 'Tutup Daftar' : 'Tampilkan Daftar'} Dosen </Button>
            {this.state.Dosen && <Dosen />}
            </>
        )
    }
}
export default ButtonDosen;
