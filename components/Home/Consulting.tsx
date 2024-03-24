import Title from "../UI/Title";
import classes from "./Consulting.module.css";
import LinkBox from "./LinkBox";
import imageIndividual from "@/public/images/link-box-individual.webp";
import imageTeam from "@/public/images/link-box-team.webp";


const Consulting = () => {
  return (
    <div className={classes.container}>
      <Title>Consulting</Title>
      <div className={classes.box}>
        <LinkBox
          title="Bird"
          content="With Colors"
          image={imageIndividual}
        ></LinkBox>
        <LinkBox
          title="Light"
          content="Colored Display"
          image={imageTeam}
        ></LinkBox>
      </div>
    </div>
  );
};

export default Consulting;