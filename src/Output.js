import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopiedContext } from "./App";

function Output({ entry, input }) {
  const copiedContext = useContext(CopiedContext);
  // eslint-disable-next-line no-unused-vars
  const { copied, setCopied } = copiedContext;
  return (
    <CopyToClipboard
      text={(entry[1] * input).toFixed(2)}
      onCopy={() => {
        setCopied(
          true,
          setTimeout(() => setCopied(false), 3000)
        );
      }}
    >
      <div className="output">
        <p>
          <div
            className={`currency-flag currency-flag-${entry[0].toLowerCase()}`}
          ></div>
          {"  "}
          {entry[0] + ": " + (entry[1] * input).toFixed(2)}
        </p>
      </div>
    </CopyToClipboard>
  );
}

// function copyTo(v) {
//   navigator.clipboard.writeText(v);
// }

// function showText(setCopied) {
//   setCopied(true, () => {
//     setTimeout(() => setCopied(false), 2000);
//   });
// }

export default Output;
