import React from "react";
import styles from "./Purpose.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@nextui-org/react";
function Purpose() {
  const [image, setImage] = useState(true);
  const [delay, setDelay] = useState("exit");

  const animDelay = () => {
    setTimeout(() => setDelay("exit_none"), "500");
  };
  return (
    <div className={styles.purpose}>
      {image ? (
        <div>
          <motion.div
            key={image}
            className={styles.clock}
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {" "}
            <img
              className={styles.clock}
              src="https://media.istockphoto.com/id/932675972/photo/top-view-of-spoon-and-fork-on-white-round-plate-in-a-form-of-clock-on-red-background-minimal.jpg?s=612x612&w=0&k=20&c=G5aV1pWdL0OBTdFq9sd_FkA_wdxFpcCaNv9XPNhPOjk="
            />
          </motion.div>
          <motion.div
            key={image}
            className={styles.woman}
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {" "}
            <img src="https://img.freepik.com/free-photo/busy-woman-beige-jacket-looks-her-hand-watch-brunette-with-red-bright-lips-glasses-white-headphones-posing-isolated-background_197531-18647.jpg" />
          </motion.div>
        </div>
      ) : (
        <>
          <div className={styles.backgroundLeft}></div>
          <div className={styles.backgroundRight}></div>
          <div className={styles.clockBlock} key={image}>
            <h3>Στις Επιχειρησεις</h3>
            <div className={styles.problems}>
              <p>1) Ασκοπος συνωστιμος</p>

              <p>2) Επιπλεον προσωπικο για οργανωση κρατησεων</p>
              <p>3) Σπαταλη χρονου και χρηματων</p>
            </div>
          </div>
          <div className={styles.womanBlock} key={image}>
            <h3>Στους Ιδιωτες</h3>
            <div className={styles.problems}>
              <p>1) Χρονοβορα διαδικασια κρατησης </p>
              <p>2) Ατομα που αποφευγουν να εχουν κοινωνικη επαφη</p>
              <p>3) Ασκοπη Αναζητηση διαθεσιμοτητας στην εστιαση</p>
            </div>
          </div>
        </>
      )}
      <div id={image ? null : delay} className={styles.header}>
        Ποιος ειναι ο σκοπος μας?
      </div>
      <h3 id={image ? null : delay}>
        Ο σκοπος του Reservation Service ειναι να παρέχει υπηρεσίες ηλεκτρονικής
        κράτησης και ανανέωση διαθεσιμότητας σε πραγματικό χρόνο για
        επιχειρήσεις με συνωστισμό αλλά και ιδιώτες που δεν έχουν χρόνο για τις
        διαδικασίες κρατήσεων.Τα προβληματα που βρισκονται και επιλουμε
        βρισκονται και στους δυο τομεις (Επιχειρησεις/Ιδιωτες)
      </h3>{" "}
      <Button
        id={image ? null : delay}
        onClick={() => {
          setImage(!image), animDelay();
        }}
        shadow
        color="primary"
        auto
        size="lg"
      >
        Click me
      </Button>
      <button onClick={() => console.log(delay)}>dsaads</button>
    </div>
  );
}

export default Purpose;
