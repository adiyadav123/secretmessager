import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import TypingAnimator from "react-typing-animator";

const EncryptMessage = () => {

  // var textArray = ["Created by Aditya Yadav", "Yes"];
  return (
    <div className="h-[450px] w-full mt-[30px] flex items-center justify-center flex-col">
      <div className="w-full">
        <Label htmlFor="text">The message to Encrypt</Label>
        <Textarea
          type="text"
          id="text"
          placeholder="Enter your message here..."
          className="max-h-[100px] transition-all duration-500 ease-in-out"
        />
        <div className="h-10"></div>
        <Label htmlFor="password">Password</Label>

        <InputOTP maxLength={4} id="password">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>

        <div className="h-10"></div>
        <Label htmlFor="password">Encrypted Message</Label>
        <Textarea
          type="text"
          id="text"
          placeholder="Encrypted message will appear here..."
          className="max-h-[100px] transition-all duration-500 ease-in-out"
          disabled
        />



        {/* <TypingAnimator className=" transition-all duration-500 ease-in-out"
          textArray={textArray}
          textColor="#ffffffff"
          cursorColor="#ffffffff"
          fontSize="24px"
          typingSpeed={60}
          delaySpeed={1000}
          height={"40px"}
          backspace
        /> */}
        
        <div className="h-10"></div>
        <Button className="w-full">Encrypt</Button>
      </div>
    </div>
  );
};

export default EncryptMessage;
