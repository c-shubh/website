import { Hr } from "@/components/Hr";

export function Footer() {
  return (
    <footer className="text-center my-4 space-y-4">
      <Hr />
      <span>
        &copy; {new Date().getFullYear()} Shubh A Chudasama.
        <br /> Code AGPLv3, Content CC BY-NC-SA 4.0.
      </span>
    </footer>
  );
}
