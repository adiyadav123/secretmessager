"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import EncryptMessage from "@/components/EncryptMessage";
import DecryptMessage from "@/components/DecryptMessage";
import { ArrowRight } from "lucide-react";
import { LockClosedIcon, LockOpen1Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Home() {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const name = window.localStorage.getItem("name");
    if (!name) {
      router.push("/");
    }
  }

  const [isClicked, setUsClicked] = useState(true);
  const handleClick = () => {
    setUsClicked(true);
    console.log(isClicked);
  };

  const handleDecryptClick = () => {
    setUsClicked(false);
    console.log(isClicked);
  };

  const handleDeleteData = () => {
    if(typeof window !== "undefined") {
      window.localStorage.clear();
      router.push("/");
    }
  }
  return (
    <div className="home h-full w-full flex items-center justify-center flex-col max-h-[100vh] p-7">
      <div className="container h-[600px] w-full flex items-center justify-center">
        <div className="heading flex items-center justify-between w-full flex-col">
          <div className="w-full h-[40px] absolute top-0 left-0 p-[2px] pl-2">
            <Drawer>
              <DrawerTrigger>
                {" "}
                <Avatar
                  className="absolute right-5 top-5 cursor-pointer"
                >
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    This will delete your data permanently. This action cannot be undone.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button onClick={handleDeleteData}>Delete</Button>
                  <DrawerClose>
                    <Button variant="outline" className="w-full">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex items-center justify-center pb-[5px]">
            <h1 className="text-[40px]">Text &nbsp;</h1>
            <ArrowRight
              className={isClicked ? "" : "rotate-180"}
              style={{ transition: "0.5s ease-in-out" }}
            />
            <h1 className="text-[40px]">&nbsp; Emoji </h1>
          </div>
          <div className="h-[30%] w-full flex items-center justify-between bg-slate-900 p-2 rounded-[10px] max-w-[300px]">
            <Button
              onClick={handleClick}
              style={{ transition: "0.5s ease-in-out" }}
            >
              <LockClosedIcon /> Encrypt Text
            </Button>

            <Button
              onClick={handleDecryptClick}
              style={{ transition: "0.5s ease-in-out" }}
            >
              <LockOpen1Icon /> Decrypt Text
            </Button>
          </div>
          {isClicked ? <EncryptMessage /> : <DecryptMessage />}

          <div className="footer flex items-center justify-center w-full h-[40px] bg-slate-800 absolute bottom-0 left-0">
            Made with 🩷 by <p className="w-[5px]"> </p>{" "}
            <Link href="https://github.com/adiyadav123" target="_blank">
              {" "}
              Aditya Yadav
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
