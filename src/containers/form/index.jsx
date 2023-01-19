import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import * as yup from 'yup'

const schema = yup.object({
  firstName: yup.string().required('jk'),
  age: yup.number().positive().integer().typeError('shdjbcjhv').required(),
}).required();

const FormModule = () => {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => console.log(data);
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} />
          <p>{errors.firstName?.message}</p>
    
          <input {...register("age")} />
          <p>{errors.age?.message}</p>
    
          <input type="submit" />
        </form>
      );
    };

export default FormModule;