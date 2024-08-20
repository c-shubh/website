import { useState } from "react";

const cipherText = "ynahn.iysg@msgor.ius";
const magicNumber = 1982;

const cipher = (str: string, shift: number, decipher = false) => {
  const s = decipher ? (26 - shift) % 26 : shift;
  const n = s > 0 ? s : 26 + (s % 26);
  return str
    .split("")
    .map((l, i) => {
      const c = str.charCodeAt(i);
      if (c >= 65 && c <= 90)
        return String.fromCharCode(((c - 65 + n) % 26) + 65);
      if (c >= 97 && c <= 122)
        return String.fromCharCode(((c - 97 + n) % 26) + 97);
      return l;
    })
    .join("");
};
export function Email() {
  const [visible, setVisible] = useState(false);

  return (
    <span>
      {!visible || cipher(cipherText, magicNumber, true)}{" "}
      <button onClick={() => setVisible(!visible)}>
        {!visible ? "Show" : "Hide"} email
      </button>
    </span>
  );
}
