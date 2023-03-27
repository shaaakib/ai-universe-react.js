import React from 'react';

export default function Button({ title }) {
  return (
    <div className="text-center">
      <button className="btn btn-success">{title}</button>
    </div>
  );
}
