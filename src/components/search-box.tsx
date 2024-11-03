import { Calendar } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { sttData } from "@/data/stt";
import { urgeData } from "@/data/urge";
import { otherData } from "@/data/other";

export const SearchBox = ({ setTag, setTags }) => {
  const onClickItem = (tag: string, title: string) => {
    setTag(tag);
    setTags((prev) => [...prev, { value: tag, label: title }]);
  };

  return (
    <Command className="bg-white bg-opacity-80 shadow-2xl ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter rounded-lg border md:min-w-[450px] w-[780px]">
      <CommandInput placeholder="Nhập từ khóa cần tìm kiếm..." />
      <CommandList className="custom-scrollbar">
        <CommandEmpty>Không có kết quả phù hợp.</CommandEmpty>
        <CommandGroup heading="Sai trạng thái">
          {sttData.map((item) => {
            if (item.main) {
              return (
                <CommandItem
                  key={item.tag}
                  className="data-[selected='true']:bg-accent-foreground/10"
                  onClickCapture={() => onClickItem(item.tag, item.title)}
                >
                  <Calendar />
                  <span>{item.title}</span>
                </CommandItem>
              );
            }
          })}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Hối lấy/giao/hoàn">
          {urgeData.map((item) => {
            if (item.main) {
              return (
                <CommandItem
                  key={item.tag}
                  className="data-[selected='true']:bg-accent-foreground/10"
                  onClickCapture={() => onClickItem(item.tag, item.title)}
                >
                  <Calendar />
                  <span>{item.title}</span>
                </CommandItem>
              );
            }
          })}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Khác">
          {otherData.map((item) => {
            if (item.main) {
              return (
                <CommandItem
                  key={item.tag}
                  className="data-[selected='true']:bg-accent-foreground/10"
                  onClickCapture={() => onClickItem(item.tag, item.title)}
                >
                  <Calendar />
                  <span>{item.title}</span>
                </CommandItem>
              );
            }
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
