import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Section() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Rahim');

  return (
    <div>
      Section
      <h1>
        {name} : {count}
      </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}
