import styles from "./Button.module.scss";
import work from "../../Home/Work/Work.module.scss";

interface Props {
  label: string;
  icon: any;
  onClick?(): void;
}

export default function Button({ label, icon, onClick }: Props) {
  return (
    <a className={`${styles.Button} ${work.HeroButton} ${work.WorkButton}`} onClick={onClick}>
      <span>{icon}</span>
      {label}
    </a>
  );
}
