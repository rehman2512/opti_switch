'use client'
import React from 'react';
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from '../app/store/store';






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
