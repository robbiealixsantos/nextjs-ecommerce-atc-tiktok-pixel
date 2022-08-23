import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';
import Script from 'next/script';

const HomePage = () => {
  return (
    <>
      <Script id="tiktok-view-content" strategy="afterInteractive" 
      dangerouslySetInnerHTML={{
        __html: `
        ttq.identify({
          email: "robbie@robbie.com",
          phone_number: "+14153334444"
        });

        ttq.track("ViewContent", {
          content_id: 12345
        });
        `,
      }}
      />
      <main className={styles.container}>
        <div className={styles.small}>
          <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Xbox" />
          <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="PS5" />
          <CategoryCard image="https://imgur.com/Dm212HS.png" name="Switch" />
        </div>
        <div className={styles.large}>
          <CategoryCard image="https://imgur.com/qb6IW1f.png" name="PC" />
          <CategoryCard
            image="https://imgur.com/HsUfuRU.png"
            name="Accessories"
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
