import styles from "./Button.module.scss";

interface Props {
  label: string;
  icon: any;
  //   variant?: 'primary' | 'secondary' | 'add' | 'collapse';
  //   underline?: boolean;
  //   selected?: boolean;
  onClick?(): void;
  //   tight?: boolean;
}

export default function Button({
  label,
  icon,
  //   tight,
  onClick,
}: //   selected,
//   underline,
//   variant = 'primary',
Props) {
  //   const isTertiary =
  //     variant === 'add' || variant === 'collapse';

  return (
    <a className={styles.Button} onClick={onClick}>
      <span>{icon}</span>
      {label}
    </a>
  );
}
