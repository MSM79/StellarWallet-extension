import React from 'react';

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: '470px',
        maxHeight: '400px',
        width: '320px',
      }}
    >
      {children}
    </div>
  );
}
