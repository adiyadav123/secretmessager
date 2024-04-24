import React from 'react'
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

const DecryptMessage = () => {
  return (
    <div className="h-[450px] w-full mt-[30px] flex items-center justify-center flex-col">
    <div className="w-full">
      <Label htmlFor="text">The message to Decrypt</Label>
      <Textarea
        type="text"
        id="text"
        placeholder="Enter your message here..."
        className="max-h-[100px]"
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
      <Label htmlFor="password">Decrypted Message</Label>
      <Textarea
        type="text"
        id="text"
        placeholder="Decrypted message will appear here..."
        className="max-h-[100px]" disabled/>


      <div className="h-10"></div>
      <Button className="w-full">Decrypt</Button>
    </div>
  </div>
  )
}

export default DecryptMessage