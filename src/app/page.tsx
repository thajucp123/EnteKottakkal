import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import SearchBar from './components/searchbar/page';
import Carousal from './components/carousal/page';


export default function Home() {
  return (
    <div className={styles.container}>
    <div className={styles.hero}>   
    <SearchBar/>
    <Carousal/>
    </div>

    <h2 className={styles.title}>Welcome to Ente Kottakkal</h2>

    <div className={styles.services}>
      <div className={styles.service}>
        <Image src="/govt-services.svg" alt="Government Services" width={50} height={50} />
        <p>ഗവണ്മെന്റ് സേവനം</p>
      </div>
      {/* ... other services */}
    </div>

    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <Image src="/home.svg" alt="Home" width={24} height={24} />
        <p>Home</p>
      </div>
      <div className={styles.footerItem}>
        <Image src="/about.svg" alt="About" width={24} height={24} />
        <p>About</p>
      </div>
    </div>
  </div>
  );
}
