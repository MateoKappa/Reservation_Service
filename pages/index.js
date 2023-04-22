import styles from "@/styles/index.module.scss";
import HowItWorks from "../Components/HowItWorks/Works";
export default function Home() {
  return (
    <div className={styles.Presentation}>
      <HowItWorks />
    </div>
  );
}
