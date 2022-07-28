import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <div className="w-[200px] h-[500px]">{children}</div>
    </>
  );
}
