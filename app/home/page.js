"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import EncryptMessage from "@/components/EncryptMessage";
import DecryptMessage from "@/components/DecryptMessage";
import { ArrowRight } from "lucide-react";
import { LockClosedIcon, LockOpen1Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  if(typeof window !== "undefined"){
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
  return (
    <div className="home h-full w-full flex items-center justify-center flex-col min-h-[100vh] p-7">
      <div className="container h-[600px] w-full flex items-center justify-center">
        <div className="heading flex items-center justify-between w-full flex-col">
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
        </div>
      </div>
    </div>
  );
}
