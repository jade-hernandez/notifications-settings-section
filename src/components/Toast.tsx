import { useEffect } from "react";
import Badge from "./Badge";

export interface IToast {
  type: "success" | "error";
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ type, message, onClose, duration = 4000 }: Readonly<IToast>) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const typeStyles = {
    success: {
      bg: "bg-green-50",
      text: "text-green-700",
      label: "Success"
    },
    error: {
      bg: "bg-red-50",
      text: "text-red-800",
      label: "Error"
    }
  };

  const styles = typeStyles[type];

  return (
    <div
      className={`flex items-center justify-center gap-3 rounded-full ${styles.bg} p-1 pr-3 text-sm font-medium ${styles.text}`}
      id='toast'
      role='alert'
      aria-live='assertive'
      aria-atomic='true'
    >
      <Badge
        key={`${type}-badge`}
        label={styles.label}
        classNames={styles.text}
      />
      <span className=''>{message}</span>
    </div>
  );
}
