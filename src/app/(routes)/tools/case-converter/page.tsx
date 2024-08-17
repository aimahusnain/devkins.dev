"use client";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const CaseConverter = () => {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");
  const [caseType, setCaseType] = useState("lowercase");

  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

  const handleCaseChange = (e: any) => {
    setCaseType(e.target.value);
  };

  const convertText = (text: any, caseType: any) => {
    switch (caseType) {
      case "lowercase":
        return text.toLowerCase();
      case "UPPERCASE":
        return text.toUpperCase();
      case "Sentence case":
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      case "camelCase":
        return text
          .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: any, index: any) =>
            index === 0 ? match.toLowerCase() : match.toUpperCase()
          )
          .replace(/\s+/g, "");
      case "PascalCase":
        return text
          .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match: any) =>
            match.toUpperCase()
          )
          .replace(/\s+/g, "");
      case "Capital Case":
        return text.replace(/\b\w/g, (char: any) => char.toUpperCase());
      case "CONSTANT_CASE":
        return text.toUpperCase().replace(/\s+/g, "_");
      case "dot.case":
        return text.toLowerCase().replace(/\s+/g, ".");
      case "snake_case":
        return text.toLowerCase().replace(/\s+/g, "_");
      case "param-case":
        return text.toLowerCase().replace(/\s+/g, "-");
      default:
        return text;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setConvertedText(convertText(text, caseType));
  };

  return (
    <div className="flex flex-col gap-3 overflow-hidden h-screen justify-center items-center">
      <h1 className="font-bold text-4xl">Case Converter</h1>
      <div className="border mx-4 rounded-lg bg-white p-5">
        <form onSubmit={handleSubmit}>
          <Textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Enter your text here"
          />
          <br />
          <select
            className="border-2 rounded-lg px-3 transition-all duration-500 mb-3 outline-none"
            value={caseType}
            onChange={handleCaseChange}
          >
            <option value="lowercase">lowercase</option>
            <option value="UPPERCASE">UPPERCASE</option>
            <option value="Sentence case">Sentence case</option>
            <option value="camelCase">camelCase</option>
            <option value="PascalCase">PascalCase</option>
            <option value="Capital Case">Capital Case</option>
            <option value="CONSTANT_CASE">CONSTANT_CASE</option>
            <option value="dot.case">dot.case</option>
            <option value="snake_case">snake_case</option>
            <option value="param-case">param-case</option>
          </select>
          <br />
          <Button className="text-white" type="submit">
            Convert
          </Button>
        </form>
        <h2>Converted Text</h2>
        <p>{convertedText}</p>
      </div>
    </div>
  );
};

export default CaseConverter;
