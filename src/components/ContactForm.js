import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = e => {
    
    axios
      .post("https://reqres.in/api/users")
      .then(res => {
        setData(res.data); // get just the form data from the REST api
      
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            placeholder="Edd"
            data-testid="firstname"
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            placeholder="Burke"
            data-testid="lastname"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input name="email" data-testid="email" ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" ref={register({ required: false })} />
        </div>
        {data && (
          <pre data-testid="newData" style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" data-testid="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
