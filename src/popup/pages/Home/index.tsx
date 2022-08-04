import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Button from '../../components/Utils/Button';

export default function Home() {
  return (
    <Layout>
      <div className="h-screen flex flex-col justify-center p-4">
        <input
          type="password"
          placeholder="Password"
          className="py-2 px-4 h-11 text-[15px] border border-gray-700 w-full mb-3 outline-none"
        />
        <Button text="Confirm" />
      </div>
    </Layout>
  );
}
