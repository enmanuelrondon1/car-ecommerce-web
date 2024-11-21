"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";
import { NavbarDashboarProps } from "./NavbarDasboard.types";

export const NavbarDashboar = (props: NavbarDashboarProps) => {
  const { showMenu } = props;
  return (
    <nav
      className=" "
    >
      <div className="w-full">
        <Sheet>
          <SheetTrigger className="">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle>
              <SidebarRoutes showMenu={showMenu} />
            </SheetTitle>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
