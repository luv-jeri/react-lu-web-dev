import React, { useState } from 'react';

export default function EnterDetails({ field, setData, data }) {
  return (
    <div>
      <span>{field}</span>
      <input
        type='text'
        placeholder='Enter Name'
        onChange={(e) => {
          setData({
            ...data,
            name: e.target.value,
          });
        }}
      />
      <br></br>
      <span>{field}</span>
      <input
        type='email'
        placeholder='Enter Email'
        onChange={(e) => {
          setData({
            ...data,
            email: e.target.value,
          });
        }}
      />
      <br></br>
      <span>{field}</span>
      <input
        type='password'
        placeholder='Enter Password'
        onChange={(e) => {
          setData({
            ...data,
            password: e.target.value,
          });
        }}
      />
    </div>
  );
}
