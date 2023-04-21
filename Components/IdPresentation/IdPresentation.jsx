import Head from "next/head";
import Image from "next/image";
import styles from "./IdPresentation.module.scss";

export default function Home() {
  const Id = ({ image, text }) => {
    return (
      <div className={styles.id}>
        <img src={image} />
        <div className={styles.idDetails}>
          {" "}
          <h4>{text?.name}</h4>{" "}
          <div className={styles.details}>
            <p> {text?.job}</p>
            <p> {text?.expertise}</p>
            <p> {text?.email}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.Presentation}>
      <div className={styles.idPresentation}>
        <div className={styles.backgroundLeft}></div>
        <div className={styles.backgroundRight}></div>
        <h1>Reservation Service</h1>
        <h3>Υπηρεσια Ηλεκτρονικης Κρατησης </h3>
        <Id
          text={{
            name: "Ματεο Καπλλανι",
            job: "Software Developer",
            expertise: "Expertise in Web Develpoment",
            email: "mkapllani@uth.gr",
          }}
          image="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/242687788_3892346707537831_6443304038215524238_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BSheaFCVNUwAX9tlH4w&tn=WCQvBfoDkFIgfXfj&_nc_ht=scontent-vie1-1.xx&oh=00_AfDxCJVvk_MJiqcIXrp-_89zqE7WilutkghwaxqFBq18Jw&oe=63E9CE4A"
        />
        <Id
          text={{
            name: "Αλεξανδρος Καρυδας",
            job: "Software Developer",
            expertise: "Expertise in Web Develpoment",
            email: "akarydas@uth.gr",
          }}
          image="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/323352206_895728561866901_1376030465546926495_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CemEI-KNcPsAX-2hEeT&_nc_ht=scontent-vie1-1.xx&oh=00_AfCh1JzYpPH2FGNDl1Kg6_ynySePZLC88uoQ6IbzByGUDA&oe=63E36077"
        />{" "}
        <Id
          text={{
            name: "Παναγιωτης Αποστολιδης",
            job: "Software Developer",
            expertise: "Expertise in Mobile Develpoment",
            email: "papostolidis@uth.gr",
          }}
          image="https://avatars.githubusercontent.com/u/54368456?v=4"
        />{" "}
        <Id
          text={{
            name: "Μπαμπης Ριζος",
            job: "Software Developer",
            expertise: "Expertise in Web Design",
            email: "brizos@uth.gr",
          }}
          image="https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/100969996_293345128730250_5659753477119672320_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jB26ULtJ_VkAX9t0eUg&_nc_ht=scontent-vie1-1.xx&oh=00_AfCyTd7k50O-BOS_pHH4_7iZSmcuMSi0sX2s5lsClgAR5A&oe=64051B65"
        />
      </div>
    </div>
  );
}
