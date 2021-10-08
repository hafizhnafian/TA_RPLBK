import ButtonMahasiswa from "./components/ButtonMahasiswa";
import ButtonDosen from "./components/ButtonDosen";
import Home from "./components/Home"
import HeadBar from "./components/HeadBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <HeadBar home="Sistem Informasi" mhs="Mahasiswa" dsn="Dosen"/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/mhs" component={ButtonMahasiswa} />
      <Route path="/dsn" component={ButtonDosen} />
    </Switch>
    </BrowserRouter>
  );
}