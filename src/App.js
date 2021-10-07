import Main from "./components/Main";
import HeadBar from "./components/HeadBar";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Dosen from './components/Dosen';


export default function App() {
  return (
    <BrowserRouter>
    <HeadBar home="Sistem Informasi" mhs="Mahasiswa" dsn="Dosen"/>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/mhs" component={Main} />
      <Route path="/dsn" component={Dosen} />
    </Switch>
    </BrowserRouter>
  );
}