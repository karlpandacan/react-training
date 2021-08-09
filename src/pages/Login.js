import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { login } from "../slices/user"
import Box from '@material-ui/core/Box';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
    cardWidth: 300,
    submitButton: {

    }
}));

const Login = () => {
    const classes = useStyles();

    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name: values.username,
            password: values.password,
        }))
    }

    return (
        <Box my="12px" mx="12px">
            <Grid container>
                <Grid item xs={0} sm={3} md={4} lg={4} xl={4} />
                <Grid item xs={12} sm={5} md={4} lg={4} xl={4}>
                    <Card>
                        <CardContent>
                            <div className="admin-login">
                                <form
                                    className={classes.root}
                                    noValidate
                                    autoComplete="off"
                                    onSubmit={(e) => handleSubmit(e)}
                                >
                                    <Grid container spacing="3">
                                        <Grid item xs="12">
                                            <TextField
                                                id="outlined-basic"
                                                label="Username"
                                                variant="outlined"
                                                fullWidth
                                                onChange={handleChange('username')}
                                            />
                                        </Grid>
                                        <Grid my="12" item xs="12">
                                            <FormControl variant="outlined" fullWidth>
                                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    type={values.showPassword ? 'text' : 'password'}
                                                    value={values.password}
                                                    onChange={handleChange('password')}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    labelWidth={57}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs="12">
                                            <Button float="right" type="submit" variant="contained" color="primary">Login</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Login;