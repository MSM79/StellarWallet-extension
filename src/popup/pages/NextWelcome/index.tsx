import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Button from '../../components/Utils/Button';

export default function NextWelcome() {
  return (
    <Layout>
      <div className="p-4 h-screen flex flex-col justify-end">
        <div className="flex flex-col w-full">
          <Link to="/signup" className="mb-2">
            <Button text="Create Account" />
          </Link>
          <Link to="/signin">
            <Button text="Restore Account" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
