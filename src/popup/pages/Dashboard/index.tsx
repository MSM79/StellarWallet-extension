import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Button from '../../components/Utils/Button';

export default function Dashboard() {
  return (
    <Layout>
      <div className="h-screen flex flex-col bg-gray-800">
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <div>blue</div>
          <select className="py-2 px-5 bg-gray-600 rounded outline-none">
            <option>Main Network</option>
            <option>Test Network</option>
          </select>
          <div>M</div>
        </div>

        <div className="bg-gray-600 flex flex-col justify-center items-center text-zinc-100 py-2">
          <p>mamad</p>
          <label>sdfsf...sdfsf</label>
        </div>

        <div className="flex justify-center items-center bg-gray-600 text-white py-4 h-[130px] text-4xl">
          <p>500$</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-900 text-white w-full text-center py-2 border-r border-gray-600 hover:bg-gray-800">
            Send
          </button>
          <button className="bg-gray-900 text-white w-full text-center py-2 hover:bg-gray-800">
            Recive
          </button>
        </div>
      </div>
    </Layout>
  );
}
