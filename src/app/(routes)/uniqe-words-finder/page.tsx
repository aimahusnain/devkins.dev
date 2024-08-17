"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Copy } from "lucide-react";
import { useState } from "react";
import { Check } from "lucide-react";

export default function KeywordMatcher() {
  const [mainKeyword, setMainKeyword] = useState("");
  const [relatedKeywords, setRelatedKeywords] = useState("");
  const [nonMatchedKeywords, setNonMatchedKeywords] = useState([]);
  const [isCopied, setIsCopied] = useState(false);

  const processKeywords = () => {
    const mainKeywordLowerCase = mainKeyword.toLowerCase();
    const relatedKeywordsArr = relatedKeywords
      .toLowerCase()
      .split("\n")
      .flatMap((keyword) => keyword.split(" "))
      .filter(Boolean);

    const nonMatched = relatedKeywordsArr.filter(
      (word) => !mainKeywordLowerCase.includes(word)
    );

    const nonMatchedLines: any = relatedKeywords
      .split("\n")
      .map((line) =>
        line
          .split(" ")
          .filter((word) => nonMatched.includes(word))
          .join(" ")
      )
      .filter(Boolean);
    // @ts-ignore
    const uniqueNonMatched = [...new Set(nonMatched)];

    setNonMatchedKeywords(nonMatchedLines);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(nonMatchedKeywords.join("\n"))
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };
  return (
    <div className="flex h-screen px-5   justify-center items-center">
      <div className="bg-white border shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-black   ">
          Unique Words Finder in Related Keywords
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Input
              type="text"
              value={mainKeyword}
              onChange={(e: any) => setMainKeyword(e.target.value)}
              placeholder="Main Keyword:"
              className="mb-4 text-gray-800"
            />
            <Textarea
              placeholder="Related Keywords"
              value={relatedKeywords}
              onChange={(e: any) => setRelatedKeywords(e.target.value)}
              className="mb-4 resize-y min-h-[70px] text-gray-800"
            />
            <Button
              size="lg"
              className="bg-primary text-white font-bold py-2 px-4 w-full mb-4"
              onClick={processKeywords}
            >
              Find Different
            </Button>
          </div>

          <div className="flex gap-3">
            <div>
              <h2 className="text-2xl mb-2 text-black">Unique Keywords:</h2>
              <ul className="list-disc pl-6 text-black">
                {nonMatchedKeywords.map((word, index) => (
                  <li key={index} className="mb-2">
                    {word}
                  </li>
                ))}
              </ul>
            </div>
            <Button onClick={copyToClipboard}>
              {isCopied ? (
                <span className="text-green-600">
                  <Check />
                </span>
              ) : (
                <Copy className="text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
