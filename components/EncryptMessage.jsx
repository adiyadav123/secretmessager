import { useState, React } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { CopyIcon } from "@radix-ui/react-icons";

const EncryptMessage = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState();
  const [encrypted, setEncrypted] = useState();
  const [encryptedInput, setEncryptedInput] = useState();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const symbols = "!@#$%^&*()_+{}|:<>?~`-=[];',./".split("");
  const numbers = "0123456789".split("");
  const special = alphabet.concat(symbols, numbers, alphabet);

  const emojis = [
    "😀",
    "😃",
    "😄",
    "😁",
    "😆",
    "😅",
    "😂",
    "🤣",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "😋",
    "😛",
    "😝",
    "😜",
    "🤪",
    "🤨",
    "🧐",
    "🤓",
    "😎",
    "🥸",
    "🤩",
    "🥳",
    "😏",
    "😒",
    "😞",
    "😔",
    "😟",
    "😕",
    "🙁",
    "☹️",
    "😣",
    "😖",
    "😫",
    "😩",
    "🥺",
    "😢",
    "😭",
    "😤",
    "😠",
    "😡",
    "🤬",
    "🤯",
    "😳",
    "🥵",
    "🥶",
    "😱",
    "😨",
    "😰",
    "😥",
    "😓",
    "🤗",
    "🤔",
    "🤭",
    "🤫",
    "🤥",
    "😶",
    "😐",
    "😑",
    "😬",
    "🙄",
    "😯",
    "😦",
    "😧",
    "😮",
    "😲",
    "🥱",
    "😴",
    "🤤",
    "😪",
    "😵",
    "🤐",
    "🥴",
    "🤢",
    "🤮",
    "🤧",
    "😷",
    "🤒",
    "🤕",
    "🤑",
    "🤠",
    "😈",
    "👿",
    "👹",
    "👺",
    "🤡",
    "💩",
    "👻",
    "💀",
    "☠️",
    "👽",
    "👾",
    "🤖",
    "🎃",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
  ];

  const charToEmoji = {};
  special.forEach((char, index) => {
    charToEmoji[char] = emojis[index];
  });

  const handleMessageInput = (event) => {
    const message = event.target.value.toLowerCase();
    const encryptedMessage = message
      .split("")
      .map((char) => charToEmoji[char] || char)
      .join("");

    setEncryptedInput(encryptedMessage);
  };

  const handleEncryptClick = () => {
    if (!password || password.length < 4) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please enter the password.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
    
    window.localStorage.setItem("password", password);
    setEncrypted(encryptedInput);
  };

  const getPasswordValue = (event) => {
    let password = event;
    setPassword(password);
  };

  const handleCopy = () => {
    if(!encrypted){
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please encrypt the message first.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
    navigator.clipboard.writeText(encrypted);
    toast({
      title: "Copied to clipboard",
      description: "The encrypted message has been copied to the clipboard.",
      action: <ToastAction altText="Close">Close</ToastAction>,
    });
  }
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
          onChange={handleMessageInput}
        />
        <div className="h-10"></div>
        <Label htmlFor="password">Password</Label>

        <InputOTP maxLength={4} id="password" onChange={getPasswordValue}>
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
        <div className="flex items-center justify-between">
        <Textarea
          value={encrypted}
          type="text"
          id="text"
          placeholder="Encrypted message will appear here..."
          className="max-h-[100px] transition-all duration-500 ease-in-out w-[80%]"
          disabled
        />
        <div className="h-ful">
          <Button onClick={handleCopy}> <CopyIcon /> </Button>
        </div>
        </div>

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
        <Button className="w-full" onClick={handleEncryptClick}>
          Encrypt
        </Button>
      </div>
    </div>
  );
};

export default EncryptMessage;
