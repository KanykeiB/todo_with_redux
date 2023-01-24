import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import styles from './styles.module.css';
import logo from '../../components/pictures/Logo1.png';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const schema = yup.object({
  fullName: yup.string().required('This field is required'),
  email: yup.string().required('This field is required'),
  password: yup.string().required('This field is required').min(8, 'Password should contain at least 8 characters'),
  passwordConfirm: yup.string().required('Please confirm the password')
  .oneOf([yup.ref('password')], 'Passwords does not match'),}).required();

const SignIn = () => {
    const { 
      register, 
      handleSubmit, 
      formState:{ errors } } 
      = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => console.log(data);
    
      return (
        <div className={styles.container}>
          <img src={logo} alt='no pic found'/>
          <h2>Log in to your Account</h2>
          <h4>Welcome back, please enter your details.</h4>
          <Button 
            sx={{marginBottom: 3}}
            variant="outlined"
            className={styles.buttonG}
            >Continue with Google</Button>
          <Divider>OR</Divider>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={{ marginBottom: 15 }}>
                <p>Email Address <span style={{color:"red"}}>*</span></p> 
                <input 
                  {...register("email")}
                />
                {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
              </div>
              <div style={{ marginBottom: 15 }}
              className={styles.passwordWrap}>
                <p>Password</p>
                <input
                  name="password"
                  type="password"
                  className={styles.passwordInput}
                  {...register('password')}
                />
                <RemoveRedEyeOutlinedIcon
                color="action"
                className={styles.eyeButton}
                />
                {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
                {/* <div>{errors.password?.message}</div> */}
              </div>  
              <div className={styles.additionalBlock}><Checkbox/> <p>Remember me</p> <p>Forgot Password?</p> </div>
              <Button
                type="submit"
                variant="contained"
                sx={{width: 400, marginTop: 3, padding: "15px 15px"}}
                >
                  Log in
                </Button>
            </form>
            <h4>Don't have an account?  <Link to='/signUp'>Sign Up</Link></h4>
        </div>
      );
    };

export default SignIn;