import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Button from '../../components/Utils/Button';

export default function ImportWallet() {
  return (
    <Layout>
      <div className="h-screen flex flex-col justify-center p-3">
        <label className="text-[13px] font-medium	mb-2">
          Private Key
        </label>
        <input
          type="password"
          placeholder="S..."
          className="py-2 px-4 h-11 text-[15px] border border-gray-700 w-full mb-3 outline-none"
        />
        <Button text="Restore" />
        <Link
          to="/nwelcome"
          className="mx-auto mt-4 text-gray-500 hover:text-gray-800"
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
}
