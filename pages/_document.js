import React from 'react';
import Document, { Main, NextScript } from 'next/document';
import Head from '../components/Head'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
