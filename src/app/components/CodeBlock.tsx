import { Refractor, registerLanguage } from "react-refractor";
import js from "refractor/lang/javascript";
import ts from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import jsx from "refractor/lang/jsx";
import sql from "refractor/lang/sql";
import bash from "refractor/lang/bash";
import markdown from "refractor/lang/markdown";
import css from "refractor/lang/css";
import scss from "refractor/lang/scss";
import python from "refractor/lang/python";
import html from "refractor/lang/markup";
import yaml from "refractor/lang/yaml";
import graphql from "refractor/lang/graphql";
import json from "refractor/lang/json";
import cpp from "refractor/lang/cpp";
import Clipoboard from "./Clipoboard";

// Supported languages: https://prismjs.com/#supported-languages
registerLanguage(js);
registerLanguage(ts);
registerLanguage(jsx);
registerLanguage(tsx);
registerLanguage(sql);
registerLanguage(bash);
registerLanguage(markdown);
registerLanguage(css);
registerLanguage(scss);
registerLanguage(python);
registerLanguage(html);
registerLanguage(yaml);
registerLanguage(graphql);
registerLanguage(json);
registerLanguage(cpp);

type codeTypes = {
  value: {
    code: string;
    language: string;
    filename?: string | null;
  };
};

export default function CodeBlock({ value }: codeTypes) {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-[#141414] border border-zinc-800 border-zinc-200 rounded-t-lg px-4 py-3 y-2">
        <p className="text-sm">{value.filename || ""}</p>
        <Clipoboard content={value.code} />
      </div>
      <Refractor
        language={value.language ? value.language : "cpp"}
        value={value.code}
        className="text-sm border-x border-b border-zinc-800 rounded-b-lg tracking-normal"
      />
    </div>
  );
}
