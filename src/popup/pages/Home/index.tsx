import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Button from '../../components/Utils/Button';
import Title from '../../components/Utils/Title';

export default function Home() {
  return (
    <Layout>
      <div className="h-screen flex flex-col justify-center p-4 relative">
        <div className="absolute top-0 left-0 w-full justify-center py-3">
          <Title text="Stellar" />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-4 h-11 text-[15px] border border-gray-700 w-full mb-3 outline-none"
          />
          <Link to="/Nwelcome">
            <Button text="Confirm" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
