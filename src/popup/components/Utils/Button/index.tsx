import React from 'react';

type Btn = {
  text: string;
};

export default function Button({ text }: Btn) {
  return (
    <button className="bg-gray-500 hover:bg-gray-600 text-white text-lg w-full h-12">
      {text}
    </button>
  );
}
