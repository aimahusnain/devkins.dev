"use client";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Counter() {
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const countCharacters = (text: any) => text.length;
  const countWords = (text: any) =>
    text.trim() ? text.trim().split(/\s+/).length : 0;
  const countLines = (text: any) => text.split(/\r?\n/).length;

  return (
    <div className="h-screen flex-col mx-5 gap-3 flex justify-center items-center overflow-hidden">
      <h1 className="font-bold text-3xl">Character Counter</h1>
      <div className="bg-white mx-4 border rounded-lg w-fit p-5 px-7">
        <Textarea
          value={text}
          onChange={handleChange}
          placeholder="Type something..."
        />
        <div style={{ marginTop: "20px" }}>
          <p>Characters: {countCharacters(text)}</p>
          <p>Words: {countWords(text)}</p>
          <p>Lines: {countLines(text)}</p>
        </div>
      </div>
    </div>
  );
}
