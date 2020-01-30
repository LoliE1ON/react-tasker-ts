import React from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import {Container, createStyles, Paper, Box, TextField, Button, Theme, InputAdornment} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        field: {
            width: '100%',
            marginTop: 20,
            boxSizing: 'border-box'
        },
    }),
);

export const Login: React.FC = () => {
    const classes = useStyles();
    return (
        <div className="pt1">
            <Container maxWidth="sm">
                <Paper elevation={1}>
                    <Box p={3}>

                        <Box fontSize={22} textAlign="center">Авторизация</Box>

                        <TextField className={classes.field} id="input-with-icon-textfield" label="Login"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField className={classes.field} id="input-with-icon-textfield" label="Password"
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <VpnKeyIcon />
                                   </InputAdornment>
                               ),
                           }}
                        />

                        <Button className={classes.field} variant="contained" color="primary">
                            Войти
                        </Button>

                    </Box>
                </Paper>

                <Box textAlign="center" m={2}>
                    <Router>
                        <Button component={Link} to="/auth/register">Регистрация</Button>
                    </Router>
                </Box>
            </Container>
        </div>

    )
}