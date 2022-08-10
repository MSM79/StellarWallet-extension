import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import Button from '../../components/Utils/Button';

export default function Backup() {
  return (
    <Layout>
      <div className="flex flex-col p-4">
        <label className="text-[15px] font-medium	mb-2">Backup</label>
        <p className="mb-4">
          <b>private key kheili mohme oskol savesh kon bega nari</b>
        </p>
        <label className="text-[14px] font-medium	mb-2">
          Private Key
        </label>
        <label className="border p-2 resize-none text-wrap min-h-min h-16 break-all	">
          dsjkghldskfjghlsdkfjghlskdghslkdjghksjdghdsgjdfklghdlfsjghldk
        </label>
        <div className=" flex flex-col mt-3">
          <label className="text-[14px] font-medium	mb-2">
            Address
          </label>
          <label className="border p-2 resize-none text-wrap min-h-min h-16 break-all	">
            dsjkghldskfjghlsdkfjghlskdghslkdjghksjdghdsgjdfklghdlfsjghldk
          </label>
        </div>
        <Link to="/dashboard" className="mt-4">
          <Button text="OK" />
        </Link>
      </div>
    </Layout>
  );
}
