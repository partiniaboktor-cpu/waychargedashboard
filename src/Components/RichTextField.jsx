import React, { useRef, useState } from "react";
import "./RichTextField.css";

const RichTextField = ({ placeholder = "Write here...", minHeight = 64 }) => {
  const editorRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const run = (command) => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false);
  };

  const handleInput = () => {
    if (!editorRef.current) return;
    const text = editorRef.current.innerText.trim();
    const html = editorRef.current.innerHTML
      .replace(/<br>/g, "")
      .replace(/&nbsp;/g, "")
      .trim();
    setIsEmpty(text.length === 0 && html.length === 0);
  };

  return (
    <div className="rteWrap">
      <div className="rteToolbar">
        <button type="button" onClick={() => run("bold")} aria-label="Bold">
          B
        </button>
        <button type="button" onClick={() => run("italic")} aria-label="Italic">
          I
        </button>
        <button
          type="button"
          onClick={() => run("underline")}
          aria-label="Underline"
        >
          U
        </button>
        <button
          type="button"
          onClick={() => run("strikeThrough")}
          aria-label="Strike"
        >
          S
        </button>
        <button
          type="button"
          onClick={() => run("insertUnorderedList")}
          aria-label="Bullet list"
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => run("insertOrderedList")}
          aria-label="Numbered list"
        >
          1. List
        </button>
        <button
          type="button"
          onClick={() => run("formatBlock")}
          aria-label="Quote"
        >
          "
        </button>
      </div>

      <div
        ref={editorRef}
        className={`rteEditor ${isEmpty ? "isEmpty" : ""}`}
        contentEditable
        onInput={handleInput}
        data-placeholder={placeholder}
        style={{ minHeight }}
      />
    </div>
  );
};

export default RichTextField;
