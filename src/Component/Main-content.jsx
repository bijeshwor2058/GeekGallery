import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./maincontain.module.css";
const MainContent = () => {
  const [images, setImages] = useState([]);
  async function FetchImages() {
    const res = await fetch(
      "https://api.unsplash.com/photos/?client_id=lgQ0_NY33LM3F8ydH9ZnQVFPu1jBKHbBDIxrzdirCDs"
    );
    const data = await res.json();
    console.log(data);
    setImages(data);
  }

  useEffect(() => {
    FetchImages();
    const handleScroll = () => {
          if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            FetchImages();
          }
        };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
  //       FetchImages();
  //     }
  //   };
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  // }, []);

  return (
    <div className={styles.img_container}>
      {images.map((img) => {
        return (
          <div key={img.id}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <img src={img.urls.small} alt={img.alt_description} />
              <div className={styles.img_details}>
                <span>{img.updated_at}</span>
                <span>{img.user.name}</span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MainContent;
