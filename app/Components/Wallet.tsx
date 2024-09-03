import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import nacl from "tweetnacl";

const Wallet = ({ walletIndex }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Wallet - {walletIndex}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Card Contentdadbabnasbdjhasgdhjasgdjaghdkjahskjdhaskjdhakjsdhaksjd
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Wallet;
