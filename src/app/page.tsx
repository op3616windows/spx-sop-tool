/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useClipboard } from "use-clipboard-copy";

import { sopData } from "@/data";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SearchBox } from "@/components/search-box";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TagList } from "@/components/tag-list";
import { LightBox } from "@/components/lightbox-image";

export default function Home() {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<any[]>([]);
  const [isNoteCopied, setIsNoteCopied] = useState(false);
  const [isMacroCopied, setIsMacroCopied] = useState(false);
  const [isMailCopied, setIsMailCopied] = useState(false);
  const clipboard = useClipboard();

  const handleCopy = (code: string, type: "macro" | "note" | "mail") => {
    clipboard.copy(code);

    if (type === "macro") {
      setIsMacroCopied(true);
      setTimeout(() => setIsMacroCopied(false), 2000);
    }

    if (type === "note") {
      setIsNoteCopied(true);
      setTimeout(() => setIsNoteCopied(false), 2000);
    }

    if (type === "mail") {
      setIsMailCopied(true);
      setTimeout(() => setIsMailCopied(false), 2000);
    }
  };

  const onClickOption = (tag: string, title: string) => {
    setTag(tag);
    setTags([
      ...tags,
      {
        value: tag,
        label: title,
      },
    ]);
  };

  const onClickReset = () => {
    setTag("");
    setTags([]);
  };

  return (
    <div className="relative isolate overflow-hidden h-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src="https://images.unsplash.com/46/iYvDeqVGRbebiQv2PIJi_DSC_8407.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4288&q=80"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="flex justify-center mt-20">
        <div className="h-full">
          <div className="flex justify-between">
            <Button className="mb-3" onClick={() => onClickReset()}>
              Reset
            </Button>
            <TagList tag={tag} tags={tags} setTags={setTags} setTag={setTag} />
          </div>
          {tag === "" && <SearchBox setTag={setTag} setTags={setTags} />}
          {tag !== "" && (
            <Card className="w-[750px] max-h-[350px] overflow-auto custom-scrollbar">
              {sopData.map((data) => {
                if (data.tag === tag) {
                  return (
                    <div key={data.tag} className="py-2 px-4">
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-semibold">
                          {data.title}
                        </div>
                        {data.image[0] !== "" && (
                          <LightBox images={data.image} alt={data.title} />
                        )}
                      </div>

                      <div className="text-md mb-2">
                        <pre>{data.description}</pre>
                      </div>
                      {data.mail && (
                        <Accordion type="single" collapsible>
                          <AccordionItem value="email">
                            <AccordionTrigger>
                              CS phản hồi Email
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-slate-200 p-2 relative">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="absolute h-6 w-6 top-1 right-1 bg-gray-700 hover:bg-gray-600 text-gray-100 hover:text-gray-300"
                                  onClick={() => handleCopy(data.mail, "mail")}
                                >
                                  {isMailCopied ? (
                                    <Check className="h-3 w-3" />
                                  ) : (
                                    <Copy className="h-3 w-3" />
                                  )}
                                </Button>
                                <pre className="text-xs">{data.mail}</pre>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      )}

                      {data.macro && (
                        <Accordion type="single" collapsible>
                          <AccordionItem value="macro">
                            <AccordionTrigger>
                              CS phản hồi qua Chat
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-orange-200 p-2 relative">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="absolute h-6 w-6 top-1 right-1 bg-gray-700 hover:bg-gray-600 text-gray-100 hover:text-gray-300"
                                  onClick={() =>
                                    handleCopy(data.macro, "macro")
                                  }
                                >
                                  {isMacroCopied ? (
                                    <Check className="h-3 w-3" />
                                  ) : (
                                    <Copy className="h-3 w-3" />
                                  )}
                                </Button>
                                <div className="text-xs">{data.macro}</div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      )}

                      {data.note && (
                        <Accordion type="single" collapsible>
                          <AccordionItem value="note">
                            <AccordionTrigger>
                              CS note remark chuyển BPLQ
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="bg-sky-200 p-2 relative">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="absolute h-6 w-6 top-1 right-1 bg-gray-700 hover:bg-gray-600 text-gray-100 hover:text-gray-300"
                                  onClick={() => handleCopy(data.note, "note")}
                                >
                                  {isNoteCopied ? (
                                    <Check className="h-3 w-3" />
                                  ) : (
                                    <Copy className="h-3 w-3" />
                                  )}
                                </Button>
                                <div className="text-xs">{data.note}</div>
                              </div>{" "}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      )}
                      {data.children?.map((item) => (
                        <div
                          className="hover:bg-muted-foreground/15 cursor-pointer -mx-4 px-4"
                          key={item.tag}
                          onClick={() => onClickOption(item.tag, item.title)}
                        >
                          {item.title}
                        </div>
                      ))}
                    </div>
                  );
                }
              })}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
