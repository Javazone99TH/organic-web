import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container h-96 items-center m-auto grid grid-cols-4 gap-6">
          <div>
            <Image
              className="p-2"
              src="/logo.png"
              alt="Logo"
              layout="fixed"
              width={200}
              height={40}
            />
            <div className="p-2">
              <h5>Organic company</h5>
              <p className="text-sm">
                179/9, Tha Chang, Mueang Nakhon Nayok District, Nakhon Nayok,
                Thailand 26000
              </p>
              <p className="text-sm">02-222-2222 ext. 222</p>
              <p className="text-sm">example@email.com</p>
            </div>
          </div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>
      </footer>
    </>
  );
}
