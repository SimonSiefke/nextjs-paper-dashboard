import Document, { Head, Main, NextScript } from 'next/document'
import Link from '../components/Link'
import { sidebarLinks } from '../variables'
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css"
          />
          <style>{`
          body{
            font-family:Roboto, sans-serif;
            font-weight: 500;
          }
            :root {
          --padding-1: 1rem;
          --padding-2: 2rem;
          --padding-3: 3rem;
        }
          a{text-decoration:none;}
          h1,h2,h3,h4,h5,h6{margin:0}
          ul{list-style-type:none;
          padding:0;margin:0}
         `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
