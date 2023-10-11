import React from "react";
import { TextField, Button, Box, Typography,Input } from "@mui/material";
import {useForm} from 'react-hook-form';

function Register() {
 
  const form = useForm()
  const { register, handleSubmit , formState} = form

  const {errors} = formState

  const onSubmit=(data)=>{
     console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
   <Typography variant="h4" gutterBottom>
        Registration
      </Typography>
      <TextField id="firstname" label="First Name" name="firstname" variant="outlined"
        margin="dense" {...register('firstname',{
          required:{
            value:true,
            message:'User is register'
          }
        })}/>
      {/* { errors && <p>{errors.firstname?.message}</p>} */}
      <TextField id="lastname" label="Last Name" name="lastname" variant="outlined"
        margin="dense" 
        {...register('lastname',{
          required:{
            value:true,
            message:'LastName is required'
          }
        })}
        />
        {/* <p>{errors.lastname?.message}</p> */}
      <TextField id="email" label="Email" name="email" variant="outlined"
        margin="dense" {...register('email', {
              required: {
                value:true,
                required:"Email is required"
                },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message : "Invalid email address format"
                
              }
            })}
        />
        {/* <p>{errors.email?.message}</p> */}
      <TextField id="password" label="Password" name="password" variant="outlined"
        margin="dense" {...register('password',{
          required:{
            value:true,
            message:'Password is register'
          }
        })} />
        {/* <p>{errors.password?.message}</p> */}
        <Input type="file" id="profilepicture" label="profile Picture" name="profilepicture" variant="outlined" {...register("profilepicture")}/>
        <Button component='span' variant='outlined' color='primary' size="small" >Upload</Button>
      {/* <TextField id="role" label="Role" name="role" variant="outlined"
        margin="dense" /> */}
        <Button type="submit" variant="contained" color="primary" size="large" style={{ marginTop: '20px' }}>
          Register
        </Button>
   </Box>
   </form>
  );
}

export default Register;