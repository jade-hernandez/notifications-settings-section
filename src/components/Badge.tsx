export interface IBadgeProps {
  key: string;
  label: string;
  classNames: string;
}

export default function Badge({ label, classNames }: Readonly<IBadgeProps>) {
  return (
    <div
      className={
        "size-fit rounded-full bg-white px-2.5 py-0.5 text-sm font-medium shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]" +
        " " +
        classNames
      }
    >
      {label}
    </div>
  );
}
