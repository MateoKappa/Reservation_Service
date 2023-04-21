import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/index.module.scss";
import IdPresentation from "../Components/IdPresentation/IdPresentation.jsx";
import Purpose from "../Components/Purpose/Purpose.jsx";
import { motion, AnimatePresence } from "framer-motion";
import HowItWorks from "../Components/HowItWorks/Works";
import { useState } from "react";
export default function Home() {
  const [page, setPage] = useState(0);
  return (
    <AnimatePresence mode="wait">
      <motion.div key={page} className={styles.Presentation}>
        {page == 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPage(page + 1)}
          >
            {" "}
            <IdPresentation />
          </motion.div>
        ) : page == 1 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setPage(2)}
          >
            <Purpose />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <HowItWorks />
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
