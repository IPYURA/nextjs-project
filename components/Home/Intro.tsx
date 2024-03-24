"use client";

import { dmSerifText, pretendard } from "@/app/fonts";
import classes from "./Intro.module.css";
import BookImg from "@/public/images/book.webp";
import Image from "next/image";
import { useCallback, useState } from "react";
import TextModal from "./TextModal";

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className={classes.container}>
      <div className={`${classes.title} ${pretendard.className}`}>
      Colors influence our emotions
      </div>
      <div className={classes.main}>
        <div className={classes.imgBox}>
          <Image src={BookImg} alt="EoP" fill></Image>
        </div>
        <div className={`${classes.content} ${pretendard.className}`}>
          &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          corrupti porro vitae consectetur perspiciatis, rerum possimus mollitia
          aperiam vero quia veritatis impedit doloribus ullam voluptas fuga.
          Nulla voluptate aspernatur consequuntur. Dicta delectus distinctio
          sapiente accusamus &#39;praesentium&#39;, officia voluptates? Porro
          repellat maxime voluptatum nam dolorem pariatur reprehenderit
          officiis, quisquam quia quod illo perspiciatis itaque dolore maiores
          iure sequi laborum fugiat esse!
          <br />
          <br />
          &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          corrupti porro vitae consectetur perspiciatis, rerum possimus mollitia
          aperiam vero quia veritatis impedit doloribus ullam voluptas fuga.
          Nulla voluptate aspernatur consequuntur. Dicta delectus distinctio
          sapiente accusamus praesentium, officia voluptates? Porro repellat
          maxime voluptatum nam dolorem pariatur reprehenderit officiis,
          quisquam quia quod illo perspiciatis itaque dolore maiores iure sequi
          laborum fugiat esse!
          <br />
          <br />
          &nbsp;
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo at repudiandae ipsa optio aut officiis repellat quos? Porro assumenda est, ad nemo distinctio cupiditate. Minus molestias dolorum suscipit minima obcaecati!
          Excepturi beatae expedita minus esse enim consequuntur ad repellendus a, sapiente, aperiam dolorum? Enim cum voluptatum placeat officia quas, aperiam similique provident rerum minima hic at non, fugiat quidem natus.
          Ullam, qui temporibus, natus quam rem ab accusamus odio unde accusantium reiciendis recusandae autem! Tempora porro delectus quaerat molestiae aut perferendis ipsam, laboriosam ipsum saepe rem amet illum nobis eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptatem delectus vel totam repellendus laboriosam esse nihil impedit porro, ipsa perspiciatis, adipisci, asperiores quo voluptates! Necessitatibus excepturi atque cumque esse.
          <br />
          <br />
          &nbsp;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laborum enim, soluta cum fugit amet obcaecati? Incidunt error, culpa dolor illum velit modi minus sed cumque nulla soluta. Assumenda, incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis modi iusto. Eius, dolor, laborum assumenda eos enim magni sint quas esse accusantium, obcaecati ipsa? Non recusandae reprehenderit quia dicta!
          Corporis ducimus quaerat ab laboriosam cupiditate perspiciatis sint aut aspernatur consectetur quis nisi voluptatum sed quod harum aperiam, laudantium maxime dolorum distinctio, labore tenetur autem natus exercitationem id fuga! Corrupti.
          Aperiam eligendi aliquam rem atque? Ex suscipit praesentium autem nulla optio deserunt, aperiam sapiente provident saepe architecto fuga quam id voluptas expedita dolores ea laborum voluptatibus quas consectetur accusamus a!
          <br />
          <br />
          &nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sequi exercitationem facilis minus harum excepturi quas cum aliquid earum voluptates voluptatem tenetur quam, sunt id obcaecati doloremque nam dolorem modi!
          <br />
          <br />
          &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi repellat doloribus illum perferendis ratione soluta explicabo nam. Excepturi harum delectus magnam provident quia esse, quidem quo nisi doloribus odit!
          <br />
          <br />
          <div>- 2024, CDG</div>
        </div>
        <button
          onClick={openModal}
          className={`${classes.button} ${dmSerifText.className}`}
        >
          More
        </button>
      </div>
      <TextModal open={isModalOpen} onClose={handleClickCloseModal}></TextModal>
    </div>
  );
};

export default Intro;
