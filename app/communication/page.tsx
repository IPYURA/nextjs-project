import { FullPageScroll } from "@/components/FullPageScroll/FullPageScroll";
import classes from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Communication/Banner";
import Webinar from "@/components/Communication/Webinar";
import Lecture from "@/components/Communication/Lecture";
import Podcast from "@/components/Communication/Podcast";
import PodcastMobile from "@/components/Communication/PodcastMobile";
import NotMobile from "@/components/MediaQuery/NotMobile";
import Mobile from "@/components/MediaQuery/Mobile";

export default function Communication() {
  return (
    <>
      <NotMobile>
        <main className={classes.main}>
          <FullPageScroll>
            <div className={` ${classes.section}`}>
              <Banner></Banner>
            </div>
            <div className={` ${classes.section}`}>
              {/* <Podcast></Podcast> */}
            </div>
            <div className={` ${classes.section}`}>
              <Webinar></Webinar>
            </div>
            <div className={` ${classes.section}`}>
              <Lecture></Lecture>
            </div>
            <Footer></Footer>
          </FullPageScroll>
        </main>
      </NotMobile>
      <Mobile>
        <main className={classes.main}>
          <Banner></Banner>
          <PodcastMobile></PodcastMobile>
          <Webinar></Webinar>
          <Lecture></Lecture>
          <Footer></Footer>
        </main>
      </Mobile>
    </>
  );
}
