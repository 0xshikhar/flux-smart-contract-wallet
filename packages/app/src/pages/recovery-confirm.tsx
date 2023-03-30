/* eslint-disable camelcase */
import { Button, FormControl, FormHelperText, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount, useSigner } from "wagmi";

import { DefaultLayout } from "@/components/layouts/Default";

import { FluxWallet__factory } from "../../../contracts/typechain-types";

export interface PeerMeta {
  name: string;
  url: string;
}

const HomePage: NextPage = () => {
  const router = useRouter();

  const [socialRecoveryWalletAddress, setFluxWalletAddress] = useState("");
  const [newOwner, setNewOwner] = useState("");
  const { data: signer } = useSigner();
  const { address } = useAccount();
  const [guardian, setGuardians] = useState("");
  const [guardian2, setGuardians2] = useState("");
  const [isOk, setIsOk] = useState(false);
  const [inRecovery, setInRecovery] = useState(false);

  const txRecovery = async () => {
    if (!signer || !address) {
      return;
    }
    const contract = FluxWallet__factory.connect(socialRecoveryWalletAddress, signer);
    await contract.executeRecovery(newOwner, [guardian, guardian2]).catch((err) => {
      console.log(err.message);
      alert("not enough guardian support");
    });
  };

  useEffect(() => {
    setFluxWalletAddress(router.query.address as string);
  }, [router]);

  useEffect(() => {
    if (!signer || !address || !socialRecoveryWalletAddress) {
      return;
    }
    const contract = FluxWallet__factory.connect(socialRecoveryWalletAddress, signer);
    contract.isGuardian(address).then((isOk) => {
      setIsOk(isOk);
    });

    contract.inRecovery().then((inRecovery) => {
      setInRecovery(inRecovery);
    });
  }, [signer, address, socialRecoveryWalletAddress]);

  return (
    <DefaultLayout>
      <div className="appbox">



      </div>
    </DefaultLayout>
  );
};

export default HomePage;
