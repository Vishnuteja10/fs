import React , {useEffect,useRef} from "react";
import Style from "./News.module.css";
import Card from "react-bootstrap/Card";
import newsImg1 from "../../assets/news/news1.png";
import newsImg2 from '../../assets/news/news2.png';
import newsImg3 from '../../assets/news/news3.png';
import newsImg4 from '../../assets/news/news4.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function News() {



  const newsContainerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (newsContainerRef.current) {
        // Scroll the container horizontally by 1px every 10ms
        newsContainerRef.current.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 10); // Adjust the interval speed if needed

    return () => clearInterval(scrollInterval); // Cleanup the interval on unmount
  }, []);


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={Style.main}>
      <div className={Style.header}>In the News</div>

      <div className={Style.newsContainer}   ref={newsContainerRef}
        onMouseEnter={() => clearInterval(newsContainerRef.current.scrollInterval)} // Pause on hover
        onMouseLeave={() => {
          // Resume scrolling when mouse leaves
          newsContainerRef.current.scrollInterval = setInterval(() => {
            if (newsContainerRef.current) {
              newsContainerRef.current.scrollBy({ left: 1, behavior: "smooth" });
            }
          }, 10);
        }}>

      
        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg1}></img>
            </div>
            <div className={Style.content}>FracSpace Limited: Transforming Real Estate</div>
            <div className={Style.readMore}  onClick={() => window.open("https://theenterpriseworld.com/unnath-reddy-a-visionary-leader-reforming/", "_blank")}
            >Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg4}></img>
            </div>
            <div className={Style.content}>Fracspace:Your Passport to Premium Property Investment</div>
            <div className={Style.readMore}>Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg2}></img>
            </div>
            <div className={Style.content}>Revolutionizing Real Estate Investment and Empowering Dreams</div>
            <div className={Style.readMore} onClick={() => window.open("https://entrepreneurstoday.in/unnath-reddys-fracspace-revolutionizing-real-estate-investment-and-empowering-dreams/", "_blank")}>Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg3}></img>
            </div>
            <div className={Style.content}>FracSpace allows fractional ownership of properties</div>
            <div className={Style.readMore} onClick={() => window.open("https://www.bizzbuzz.news/industry/fracspace-allows-fractional-ownership-of-properties-1212346", "_blank")}>Read More</div>
        </div>


        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg1}></img>
            </div>
            <div className={Style.content}>Fracspace:Your Passport to Premium Property Investment</div>
            <div className={Style.readMore}>Read More</div>
        </div>


        {/* repeat1 */}

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg1}></img>
            </div>
            <div className={Style.content}>FracSpace Limited: Transforming Real Estate</div>
            <div className={Style.readMore}  onClick={() => window.open("https://theenterpriseworld.com/unnath-reddy-a-visionary-leader-reforming/", "_blank")}
            >Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg4}></img>
            </div>
            <div className={Style.content}>Fracspace:Your Passport to Premium Property Investment</div>
            <div className={Style.readMore}>Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg2}></img>
            </div>
            <div className={Style.content}>Revolutionizing Real Estate Investment and Empowering Dreams</div>
            <div className={Style.readMore} onClick={() => window.open("https://entrepreneurstoday.in/unnath-reddys-fracspace-revolutionizing-real-estate-investment-and-empowering-dreams/", "_blank")}>Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg3}></img>
            </div>
            <div className={Style.content}>FracSpace allows fractional ownership of properties</div>
            <div className={Style.readMore} onClick={() => window.open("https://www.bizzbuzz.news/industry/fracspace-allows-fractional-ownership-of-properties-1212346", "_blank")}>Read More</div>
        </div>


        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg1}></img>
            </div>
            <div className={Style.content}>Fracspace:Your Passport to Premium Property Investment</div>
            <div className={Style.readMore}>Read More</div>
        </div>

        {/* repeat 2 */}

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg1}></img>
            </div>
            <div className={Style.content}>FracSpace Limited: Transforming Real Estate</div>
            <div className={Style.readMore}  onClick={() => window.open("https://theenterpriseworld.com/unnath-reddy-a-visionary-leader-reforming/", "_blank")}
            >Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg4}></img>
            </div>
            <div className={Style.content}>Fracspace:Your Passport to Premium Property Investment</div>
            <div className={Style.readMore}>Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg2}></img>
            </div>
            <div className={Style.content}>Revolutionizing Real Estate Investment and Empowering Dreams</div>
            <div className={Style.readMore} onClick={() => window.open("https://entrepreneurstoday.in/unnath-reddys-fracspace-revolutionizing-real-estate-investment-and-empowering-dreams/", "_blank")}>Read More</div>
        </div>

        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg3}></img>
            </div>
            <div className={Style.content}>FracSpace allows fractional ownership of properties</div>
            <div className={Style.readMore} onClick={() => window.open("https://www.bizzbuzz.news/industry/fracspace-allows-fractional-ownership-of-properties-1212346", "_blank")}>Read More</div>
        </div>


        <div className={Style.card}>
            <div className={Style.imageContainer}>
              <img className={Style.image} src={newsImg1}></img>
            </div>
            <div className={Style.content}>Fracspace:Your Passport to Premium Property Investment</div>
            <div className={Style.readMore}>Read More</div>
        </div>



      </div>

    </div>
  );
}
