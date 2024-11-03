"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useClipboard } from "use-clipboard-copy";
import { Button } from "@/components/ui/button";

interface CodeClipboardProps {
  code: string;
  language?: string;
}

export function CodeClipboard(
  { code, language = "javascript" }: CodeClipboardProps = {
    code: 'console.log("Hello, World!");',
  }
) {
  const [isCopied, setIsCopied] = useState(false);
  const clipboard = useClipboard();

  const handleCopy = () => {
    clipboard.copy(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative rounded-lg overflow-hidden">
        <pre
          className={`language-${language} p-4 bg-gray-800 text-gray-100 overflow-x-auto`}
        >
          <code>{code}</code>
        </pre>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-100"
          onClick={handleCopy}
        >
          {isCopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
