import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { CopyIcon, LockOpen1Icon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import copy from 'clipboard-copy';
import { CopyCheckIcon } from "lucide-react";

const DecryptMessage = () => {
  const { toast } = useToast();
  
  const [IsCopied, setIsCopied] = useState(false);
  const [decrypted, setDecrypted] = useState();
  const [encrypted, setEncrypted] = useState();

  const handleEncryptedMessage = (event) => {
    const message = event.target.value;
    setEncrypted(message);
  };
  const handleDecrypt = () => {
    const message = encrypted;
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

    const emojiToChar = {};

    special.forEach((char, index) => {
      emojiToChar[emojis[index]] = char;
    });

    const decryptedMessage = Array.from(encrypted)
      .map((emoji) => emojiToChar[emoji] || emoji)
      .join("");
    setDecrypted(decryptedMessage);
  };

  const handleCopy = async() => {
    if(!decrypted){
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please decrypt the message first.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
    
    await copy(decrypted);
    setIsCopied(true);

    toast({
      title: "Copied to clipboard",
      description: "The encrypted message has been copied to the clipboard.",
      action: <ToastAction altText="Close">Close</ToastAction>,
    });
  }
  return (
    <div className="h-[450px] w-full mt-[30px] flex items-center justify-center flex-col max-w-[500px]">
      <div className="w-full">
        <Label htmlFor="text">The message to Decrypt</Label>
        <Textarea
          type="text"
          id="text"
          placeholder="Enter the emojis to decrypt."
          className="max-h-[100px]"
          onChange={handleEncryptedMessage}
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
        <div className="flex items-center justify-between">
        <Textarea
          value={decrypted}
          type="text"
          id="text"
          placeholder="Encrypted message will appear here..."
          className="max-h-[100px] transition-all duration-500 ease-in-out w-[80%]"
          disabled
        />
        <div className="h-ful">
          <Button onClick={handleCopy}> 
          {" "}
          {IsCopied ? <CopyCheckIcon /> : <CopyIcon /> }
           </Button>
        </div>
        </div>

        <div className="h-10"></div>
        <Button className="w-full" onClick={handleDecrypt}>
         <LockOpen1Icon /> Decrypt
        </Button>
      </div>
    </div>
  );
};

export default DecryptMessage;
