import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Grid, Modal, Box } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const DetailDosen = createContext();

function Dosen(props) {
    const [dosen, setDosen] = useState([]);
    const [detail, setDetail] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3000/mahasiswa",
            headers: {
                accept: "*/*",
            },
        })

            .then((data) => {
                setDosen(data.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [])
    return (
        <Container>
            <Grid>
                {dosen.map((result) => {
                    return (
                        <Grid>
                            <Card>
                                <CardActionArea onClick={() => { setOpen(true); setDetail([result.address, result.tlp]) }}>
                                    <CardMedia
                                        component="img"
                                        height="50"
                                        image={result.image}
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <Typography variant="h5"> {result.name} </Typography>
                                    <Typography variant="h5"> {result.nip} </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {detail[0]}
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {detail[1]}
                    </Typography>

                </Box>
            </Modal>
        </Container>

    );
}
export default Dosen;

