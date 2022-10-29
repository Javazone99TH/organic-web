import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Navbar({ title }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + ' - Organic Company' : 'Organic Company'}
        </title>
        <meta name="description" content="E-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header className="bg-transparent">
          <nav className="container m-auto flex h-20 text-sm items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <a className="pr-5">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    layout="fixed"
                    width={200}
                    height={40}
                  />
                </a>
              </Link>
              <Link href="/">
                <a className="p-2">Home</a>
              </Link>
              <Link href="/about">
                <a className="p-2">about</a>
              </Link>
              <Link href="/service">
                <a className="p-2">Service</a>
              </Link>
              <Link href="/catalog">
                <a className="p-2">Calalog</a>
              </Link>
              <Link href="/blog">
                <a className="p-2">Blog</a>
              </Link>
              <Link href="/contact">
                <a className="p-2">Contact</a>
              </Link>
            </div>

            <div>
              <Link href="/cart">
                <a className="p-2">
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                </a>
              </Link>
              <Link href="/login">
                <a className="p-2">
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </a>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
