"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VercelLogoIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Home() {

  window.onload = () => {
    const name = window.localStorage.getItem("name");
    if (name) {
      
      window.location.href = "/home";
    }
  };
  const [name, setName] = useState();

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleContinueClick = async() => {
    if (name) {
      const randomNumber = Math.round(Math.random() * 1000);
      const namee = `${name}-${randomNumber}`;
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("database_name", namee);
      window.location.href = "/home";
    } else {
      console.log("No name Entered.");
    }
  };

  return (
    <div className="container text-white p-10 flex items-center justify-center flex-col">
      <div className="content  h-[200px] w-full">
        <h1 className=" text-[30px] font-bold flex items-center justify-center">
          Hey <div className="w-[10px]"></div> <VercelLogoIcon />
        </h1>
        <h1 className=" text-[30px] font-bold flex items-center justify-center w-full">
          Welcome to
          <div className="w-[10px]"></div>
          <Badge>SecretMessager</Badge>
        </h1>
      </div>
      <div className="inp w-full">
        <Label htmlFor="text">Enter your name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Enter your name here..."
          onChange={handleInput}
        />


        <div className="h-[20px]"></div>


        <h1 className="text-[20px] font-bold">FAQs</h1>
        <Accordion type="single" collapsible className="w-full" id="faqs">
          <AccordionItem value="item-1">
            <AccordionTrigger>Who created this?</AccordionTrigger>
            <AccordionContent>
              This was created by Aditya Yadav, a software developer based in
              India.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What is the use of this project?
            </AccordionTrigger>
            <AccordionContent>
              This project is a simple tool to encrypt and decrypt messages
              using a password. It is built in NextJS and uses TailwindCSS for
              styling.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Why do we need your name?</AccordionTrigger>
            <AccordionContent>
              We used your name to store your session data and provide a
              personalized experience. We store your name in the browser's local
              storage and do not share it with anyone.
            </AccordionContent>
          </AccordionItem>
        </Accordion>


        <div className="h-[10px]"></div>


        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full">Continue → </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently save your name as <Badge>{name || "No name entered"}</Badge>. Are you sure you want to continue?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleContinueClick}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
