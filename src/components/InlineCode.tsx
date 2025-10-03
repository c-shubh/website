import { clsx } from "@/util";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

export function InlineCode(props: Props) {
  return (
    <code
      className={clsx(
        "bg-gray-100 border border-black/10 rounded font-mono text-sm px-1 py-0.5 w-fit",
        props.className
      )}
    >
      {props.children}
    </code>
  );
}
