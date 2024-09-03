"use client";

import * as React from "react";
import { ChevronsUpDown, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { generateMnemonic } from "bip39";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import Wallet from "./Wallet";

const Mneumonic = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mnemonic, setMnemonic] = React.useState("");
  const [isWalletGenerate, setIsWalletgenerated] = React.useState(false);
  const inputRef = React.useRef(null);

  const createWallet = async () => {
    let generatedMneumonic = inputRef.current?.value.trim();
    if (!generatedMneumonic) {
      generatedMneumonic = await generateMnemonic();
    }
    setMnemonic(generatedMneumonic);
    setIsWalletgenerated(true);

    // const mn = await generateMnemonic();
    // setMnemonic(mn);
  };

  return (
    <div>
      {!isWalletGenerate ? (
        <div className="flex justify-center mt-10 ml-40 mr-40 space-x-10">
          <Input
            type="text"
            className="w-[50%] text-black"
            placeholder="Enter Your Secret Phrase(new secret phrase will be generated if left blank)"
            ref={inputRef}
          />
          <Button variant={"secondary"} size={"lg"} onClick={createWallet}>
            Create Wallet
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center mt-10">
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="max-w-[50%]"
            >
              <div className="flex items-center justify-center space-x-4 mb-10">
                <h4 className="text-lg font-semibold">
                  Secret Mneumonic Phrase
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    <ChevronsUpDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="flex justify-center flex-wrap space-x-4">
                {mnemonic.split(" ").map((phrase) => (
                  <span className="rounded-md border px-4 py-3 font-mono text-sm mt-4">
                    {phrase}
                  </span>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div className="mt-10">
            <Wallet />
          </div>
        </div>
      )}
    </div>
  );
};

export default Mneumonic;
