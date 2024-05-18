"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCombinedContext } from "@/context/combined-context";
import { LucideIconList } from "@/lib/lucide-icon-list";
import { icons, Smile } from "lucide-react";

type IconName = keyof typeof icons;
export const IconLucide = ({
  name,
  size,
  color,
  rotate,
}: {
  name: IconName;
  size: number;
  color?: string;
  rotate?: number;
}) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;
  return (
    <LucideIcon
      size={size}
      color={color}
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
};

export function IconList() {
  const { iconName, setIconName } = useCombinedContext();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          id="icon"
          className="flex items-center justify-center cursor-pointer bg-gray-400 dark:bg-slate-400 w-12 h-12 rounded-lg"
        >
          <IconLucide name={iconName as IconName} size={24} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Pic Your Favorite Icon</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-auto h-[500px]">
          {LucideIconList.map((icon, index) => (
            <div
              key={index}
              className="border p-3 flex rounded-md items-center justify-center cursor-pointer"
              onClick={() => setIconName(icon)}
            >
              <IconLucide key={index} name={icon as IconName} size={24} />
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
