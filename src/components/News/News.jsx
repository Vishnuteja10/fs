import React , {useEffect,useRef} from "react";
import Style from "./News.module.css";
import Card from "react-bootstrap/Card";
import newsImg1 from "../../assets/news/news1.png";
import newsImg2 from '../../assets/news/news2.png';
import newsImg3 from '../../assets/news/news3.png';
import newsImg4 from '../../assets/news/news4.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { version } from "react";



export default function News() {


  const newsContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null); // Ref to store the scroll interval

   // Function to start auto-scrolling
 const startScrolling = () => {
   if (scrollIntervalRef.current) return; // Avoid multiple intervals
   scrollIntervalRef.current = setInterval(() => {
     if (newsContainerRef.current) {
       newsContainerRef.current.scrollBy({ left: 1, behavior: "smooth" });
     }
   }, 10);
 };

 // Function to stop auto-scrolling
 const stopScrolling = () => {
   if (scrollIntervalRef.current) {
     clearInterval(scrollIntervalRef.current);
     scrollIntervalRef.current = null; // Clear the interval reference
   }
 };

 // Start scrolling on component mount
 useEffect(() => {
   startScrolling(); // Start auto-scrolling when the component is mounted

   // Clean up the interval on component unmount
   return () => stopScrolling();
 }, []);

 // Event listeners for touch devices (mobile) and mouse (desktop)
 useEffect(() => {
   const newsContainer = newsContainerRef.current;

   if (newsContainer) {
     // Stop scrolling on touch start (mobile devices)
     newsContainer.addEventListener("touchstart", stopScrolling);
     // Resume scrolling on touch end (mobile devices)
     newsContainer.addEventListener("touchend", startScrolling);

     // Stop scrolling on mouse hover (desktop devices)
     newsContainer.addEventListener("mouseenter", stopScrolling);
     // Resume scrolling on mouse leave (desktop devices)
     newsContainer.addEventListener("mouseleave", startScrolling);
   }

   return () => {
     if (newsContainer) {
       newsContainer.removeEventListener("touchstart", stopScrolling);
       newsContainer.removeEventListener("touchend", startScrolling);
       newsContainer.removeEventListener("mouseenter", stopScrolling);
       newsContainer.removeEventListener("mouseleave", startScrolling);
     }
   };
 }, []);



  return (
    <div className={Style.main}>
      <div className={Style.header}>In the News</div>

      <div className={Style.newsContainer}   ref={newsContainerRef}>  
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
            <div className={Style.content}>Revolutionizing Real Estate Investment </div>
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
            <div className={Style.content}>Revolutionizing Real Estate Investment</div>
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
            <div className={Style.content}>Revolutionizing Real Estate Investment </div>
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

        {/* repeat 3 */}


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
            <div className={Style.content}>Revolutionizing Real Estate Investment </div>
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
