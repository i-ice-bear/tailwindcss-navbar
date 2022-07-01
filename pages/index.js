import Head from "next/head";
import Script from "next/script";
import React from "react";
const IndexComponent = () => {
  return (
    <div className="wrapper">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="index" />
        <meta name="keywords" content="index" />
      </Head>
      <video autoPlay loop style={{ width: '500px', height: '500px' }} >
        <source src="./components/image/video/headervideo.mp4"></source>
        </video>
    </div>
  );
};

export default IndexComponent;
