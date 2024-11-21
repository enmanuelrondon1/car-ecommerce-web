import Link from "next/link";
import { SidebarItemProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const SidebarItem = (props: SidebarItemProps) => {
  const { item } = props;
  const { href, icon: Icon, label } = item;

  const pathName = usePathname();
  const isActive = pathName === href;


  return (
    <Link href={href} className={cn(`flex gap-x-2 mt-2 text-slate-700 text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer `, isActive && "bg-slate-400/20")}>
      <Icon className="h-5 w-5 " strokeWidth={1} />
      {label} 
      
    
    </Link>
  );
};