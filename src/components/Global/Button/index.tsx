import styles from "./Button.module.scss";
import home from "../../Home/Home.module.scss";

interface Props {
  label: string;
  icon: any;
  onClick?(): void;
}

export default function Button({ label, icon, onClick }: Props) {
  return (
    <a className={`${styles.Button} ${home.HeroButton} ${home.WorkButton}`} onClick={onClick}>
      <span>{icon}</span>
      {label}
    </a>
  );
}
