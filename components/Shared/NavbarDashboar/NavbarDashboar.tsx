"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";

export const NavbarDashboar = () => {
  // const { showMenu } = props;
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
              <SidebarRoutes  />
            </SheetTitle>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
