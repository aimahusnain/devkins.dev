import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const Tools = () => {
  return (
    <div className="flex flex-wrap px-6 justify-center mt-6 w-full">
      <h1 className="text-4xl font-bold">🛠 Devkins Tools</h1>
      <div className="flex flex-wrap px-6 justify-center mt-6 gap-y-[30px] gap-[50px] w-full">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
          className="bg-white rounded-xl p-3 pt-0 border "
        >
          <AccordionItem value="item-1" className="w-[330px]">
            <AccordionTrigger>
              SEO (Search Engine Optimization) Tools
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link
                href="/uniqe-words-finder"
                className="border-b w-fit border-black"
              >
                Unique Words Finder in Related Keywords
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
              <Link href="/fsd" className="border-b w-fit border-black">
                Tool Title
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
          className="bg-white rounded-xl p-3 pt-0 border "
        >
          <AccordionItem value="item-1" className="w-[330px]">
            <AccordionTrigger>Converter Tools</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link
                href="/tools/number-to-words-converter"
                className="border-b w-fit border-black"
              >
                Number To Words Converter
              </Link>
              <Link
                href="/tools/color-converter"
                className="border-b w-fit border-black"
              >
                Color Converter
              </Link>
              <Link
                href="/tools/binary-converter"
                className="border-b w-fit border-black"
              >
                Binary Converter
              </Link>
              <Link
                href="/tools/decimal-converter"
                className="border-b w-fit border-black"
              >
                Decimal Converter
              </Link>
              <Link
                href="/tools/base64-encoder"
                className="border-b w-fit border-black"
              >
                Base64 Encoder
              </Link>
              <Link
                href="/tools/base64-decoder"
                className="border-b w-fit border-black"
              >
                Base64 Decoder
              </Link>
              <Link
                href="/tools/morse-converter"
                className="border-b w-fit border-black"
              >
                Morse Converter
              </Link>
              <Link
                href="/tools/bits-to-bytes-convertor"
                className="border-b w-fit border-black"
              >
                Bits to Bytes Converter
              </Link>
              <Link
                href="/tools/kilobyte-to-megabyte-converte"
                className="border-b w-fit border-black"
              >
                Kilobyte to Megabyte Converter
              </Link>
              <Link
                href="/tools/gigabyte-to-terabyte-converter"
                className="border-b w-fit border-black"
              >
                Gigabyte to Terabyte Converter
              </Link>
              <Link
                href="/tools/hex-converter"
                className="border-b w-fit border-black"
              >
                Hex Converter
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
          className="bg-white rounded-xl p-3 pt-0 border "
        >
          <AccordionItem value="item-1" className="w-[330px]">
            <AccordionTrigger>Text Tools</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <Link
                href="/tools/character-counter"
                className="border-b w-fit border-black"
              >
                Character Counter
              </Link>
              <Link
                href="/tools/case-converter"
                className="border-b w-fit border-black"
              >
                Case Converter
              </Link>
              <Link
                href="/tools/reverse-words"
                className="border-b w-fit border-black"
              >
                Reverse Words
              </Link>
              <Link
                href="/tools/emojis-remover"
                className="border-b w-fit border-black"
              >
                Emojis Remover
              </Link>

              <Link
                href="/tools/reverse-letters"
                className="border-b w-fit border-black"
              >
                Reverse Letters
              </Link>

              <Link
                href="/tools/reverse-list"
                className="border-b w-fit border-black"
              >
                Reverse List
              </Link>

              <Link
                href="/tools/duplicate-words-remover"
                className="border-b w-fit border-black"
              >
                Duplicate Words Remover
              </Link>
              <Link
                href="/tools/cursive-text-generator"
                className="border-b w-fit border-black"
              >
                Cursive Text Generator
              </Link>
              <Link
                href="/tools/old-english-text-generator"
                className="border-b w-fit border-black"
              >
                Old English Text Generator
              </Link>

              <Link
                href="/tools/upside-down-text-generator"
                className="border-b w-fit border-black"
              >
                Upside Down Text Generator
              </Link>

              <Link
                href="/tools/list-randomizer"
                className="border-b w-fit border-black"
              >
                List Randomizer
              </Link>

              <Link
                href="/tools/text-separator"
                className="border-b w-fit border-black"
              >
                Text Separator
              </Link>
              <Link
                href="/tools/text-to-speech"
                className="border-b w-fit border-black"
              >
                Text To Speech
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="px-6">
          <h1 className="font-bold text-3xl">Calculators</h1>
          <div className="flex flex-wrap justify-left mt-6 gap-y-[30px] gap-[50px] w-full">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
              className="bg-white rounded-xl p-3 pt-0 border "
            >
              <AccordionItem value="item-1" className="w-[330px]">
                <AccordionTrigger>Financial Calculators</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
              className="bg-white rounded-xl p-3 pt-0 border "
            >
              <AccordionItem value="item-1" className="w-[330px]">
                <AccordionTrigger>
                  Fitness and Health Calculators
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
              className="bg-white rounded-xl p-3 pt-0 border "
            >
              <AccordionItem value="item-1" className="w-[330px]">
                <AccordionTrigger>Math Calculators</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                  <Link href="/fsd" className="border-b w-fit border-black">
                    Tool Title
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1" // Set defaultValue to "item-1" to open the accordion by default
              className="bg-white rounded-xl p-3 pt-0 border "
            >
              <AccordionItem value="item-1" className="w-[330px]">
                <AccordionTrigger>Other Calculators</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  <Link
                    href="/tools/age-calculator"
                    className="border-b w-fit border-black"
                  >
                    Age Calculator
                  </Link>
                  <Link
                    href="/tools/random-number-calculator"
                    className="border-b w-fit border-black"
                  >
                    Random Number Generator
                  </Link>
                  <Link
                    href="/tools/ramdom-password-gnenerator"
                    className="border-b w-fit border-black"
                  >
                    Random Password Generator
                  </Link>
                  <Link
                    href="/tools/Simple-Calculator"
                    className="border-b w-fit border-black"
                  >
                    Simple Calculator
                  </Link>
                  <Link
                    href="/tools/FactorCalculator"
                    className="border-b w-fit border-black"
                  >
                    Factor Calculator
                  </Link>
                  <Link
                    href="/tools/date-calculator"
                    className="border-b w-fit border-black"
                  >
                    Date Calculator
                  </Link>
                  <Link
                    href="/tools/time-zone-calculator"
                    className="border-b w-fit border-black"
                  >
                    Time Zone Calculator
                  </Link>
                  <Link
                    href="/tools/day-of-the-week-calculator"
                    className="border-b w-fit border-black"
                  >
                    Day of the week Calculator
                  </Link>
                  <Link
                    href="/tools/dew-point-calculator"
                    className="border-b w-fit border-black"
                  >
                    Dew Point calculator
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
