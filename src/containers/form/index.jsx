import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import styles from './styles.module.css';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import logo from '../../components/pictures/Logo1.png';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Avatar } from '@mui/material';
import googleLogo from '../../components/pictures/Google_logo.png'

const schema = yup.object({
  fullName: yup.string().required('This field is required'),
  email: yup.string().required('This field is required'),
  password: yup.string().required('This field is required').min(8, 'Password should contain at least 8 characters'),
  passwordConfirm: yup.string().required('Please confirm the password')
  .oneOf([yup.ref('password')], 'Passwords does not match'),}).required();

const FormModule = () => {
    const [visibility, setVisibility] = useState(false)
    const handleVisibility = () => {
      setVisibility(visibility ? false : true)
    }
    const [visibility2, setVisibility2] = useState(false)
    const handleVisibility2 = () => {
      setVisibility2(visibility2 ? false : true)
    }
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
          <h2>Create an Account</h2>
          <h4>Sign up now to get started with an account</h4>
          <Button 
          sx={{marginBottom: 3}}
          variant="outlined"
          className={styles.buttonG}
          >Sign up with Google</Button>
          <Divider>OR</Divider>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Full Name<span style={{color:"red"}}>*</span></p>
              <input 
                {...register("fullName")}
              />
              {errors.fullName && <p style={{color:"red"}}>{errors.fullName.message}</p>}
            </div>
            <div>
              <p>Email Address<span style={{color:"red"}}>*</span></p> 
              <input 
                {...register("email")}
              />
              {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
            </div>
            <div className={styles.passwordWrap}>
              <p>Password<span style={{color:"red"}}>*</span></p>
              <input
                type={visibility? "text" : "password"}
                {...register('password')}
              />
                <RemoveRedEyeOutlinedIcon
                className={styles.eyeButton}
                color="action"
                onClick={handleVisibility}
                />
              {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
            </div>
            <div className={styles.passwordWrap}>
              <p>Confirm Password<span style={{color:"red"}}>*</span></p>
              <input
                type={visibility2? "text" : "password"}
                {...register('passwordConfirm')}
              />

                <RemoveRedEyeOutlinedIcon
                color="action"
                className={styles.eyeButton}
                onClick={handleVisibility2}
                />
              {errors.passwordConfirm && <p style={{color:"red"}}>{errors.passwordConfirm.message}</p>}
            </div>
            <Checkbox/> <label>I have read and agree to the <a href='https://policies.google.com/terms?hl=en-US'>Terms of Service</a></label>
      
            {/* <input type="submit"/> */}
            <Button
            type="submit"
            variant="contained"
            className={styles.submitButton}
            >
              Get Started
            </Button>
          </form>
          <h4>Already have an account? <Link to='/signIn'>Log in</Link></h4>
        </div>
      );
    };

export default FormModule;