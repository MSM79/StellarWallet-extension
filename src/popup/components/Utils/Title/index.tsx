import React from 'react';

type Text = {
  text: string;
};

export default function Button({ text }: Text) {
  return (
    <p className="text-dark text-lg w-full flex justify-center text-2xl">
      {text}
    </p>
  );
}
