import React from 'react';
import {Home} from "./views/Home";
import {Header} from "./components/Header";

import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core/styles";
import './style.css';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }
}));

const App: React.FC = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />

            <Header/>

            <main>
                <div className={classes.drawerHeader} />

                <Home/>

            </main>
        </div>
    )
}

export default App;
