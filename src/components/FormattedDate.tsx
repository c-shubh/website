import dayjs from "dayjs";

interface Props {
  date: Date;
  className?: HTMLTimeElement["className"];
}

export function FormattedDate({ date, className }: Props) {
  return (
    <time dateTime={date.toISOString()} className={className}>
      {dayjs(date).format("MMM DD, YYYY")}
    </time>
  );
}
