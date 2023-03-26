/* eslint-disable camelcase */
// import "./globals.css";

// import { Stack } from "@chakra-ui/react";
// import { LockClosedIcon } from "@heroicons/react/20/solid";
import { ethers } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount, useSigner } from "wagmi";

import { DefaultLayout } from "@/components/layouts/Default";
import { useFluxWallet } from "@/hooks/useFluxWallet";

import { NULL_ADDRESS, NULL_BYTES } from "../../../contracts/lib/utils";
import { FluxWallet__factory } from "../../../contracts/typechain-types";
import WalletAuth from '../components/WalletAuth'
import { generateMerkleTree } from "../util";

export interface PeerMeta {
  name: string;
  url: string;
}

const HomePage: NextPage = () => {
  const { fluxWalletAddress, entryPoint, fluxWalletAPI, isDeployed, balance } = useFluxWallet();

  const router = useRouter();

  const { data: signer } = useSigner();
  const { address } = useAccount();
  const [isWalletConnectLoading] = useState(false);

  const [owner, setOwner] = useState("");
  const [wstatus, setwStatus] = useState("False");

  const deploy = async () => {
    if (!fluxWalletAPI || !entryPoint || !signer || !address) {
      return;
    }
    await signer.sendTransaction({
      to: fluxWalletAddress,
      value: parseEther("0.01"),
    });
  };

  const deploy2 = async () => {
    if (!fluxWalletAPI || !entryPoint || !signer || !address) {
      return;
    }
    const op = await fluxWalletAPI.createSignedUserOp({
      target: NULL_ADDRESS,
      data: NULL_BYTES,
    });

    await entryPoint.handleOps([op], address);
    router.push("/auth");
  };

  useEffect(() => {
    if (!signer || !address || !fluxWalletAddress) {
      return;
    }
    if (isDeployed) {
      const contract = FluxWallet__factory.connect(fluxWalletAddress, signer);
      contract.owner().then((owner) => {
        setOwner(owner);
      });
    } else {
      setOwner(address);
    }
  }, [signer, address, fluxWalletAddress, isDeployed]);


  return (
    <DefaultLayout>
      <div className="appbox">
        {fluxWalletAddress && (
          <div>
            <div className="pt-4 px-4">
              <h1 className="text-4xl text-white py-4  font-sans">Hey ! 👋</h1>
              <h2 className="text-base text-white py-2 pb-10 font-sans "> Welcome To Flux Smart Contract Wallet</h2>
              {/* <CircularProgress /> */}
            </div>

            <div className="bg-white rounded-[16px] object-contain w-[320px] h-[480px] relative">
              <div className="flex h-full items-center justify-center px-4 inset-x-0 bottom-0">
                <div className="w-full">
                  <div>
                    <div className="overflow-visible absolute top-0 right-0">
                      {/* <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70, "--thickness": 10}}>70%</div> */}
                      {/* <div className="radial-progress text-primary" style={{"--value":70}}>70%</div> */}
                    </div>
                    <div className="py-4">
                      <h2 className="font-bold font-sans">AA Wallet Address </h2>
                      <p className="text-[11px]">{fluxWalletAddress}</p>
                      <p className="text-[10px]">* AA address is determined counterfactually by create2</p>
                    </div>
                    <div className="py-4">
                      <h2 className="font-bold font-sans">Owner Wallet Address </h2>
                      <p className="text-[11px]">{owner}</p>
                    </div>
                    <div className="py-4">
                      <h2 className="font-bold font-sans">
                        Deployed Status : {"  "}
                        {wstatus === "true" ? (
                          <div className="badge badge-success gap-2 text-[11px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="inline-block w-4 h-4 stroke-current"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>
                            success
                          </div>
                        ) : (
                          <div className="badge badge-error gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="inline-block w-4 h-4 stroke-current"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>
                            {wstatus}
                          </div>
                        )}
                      </h2>
                      <p className="text-[10px]">* no need to deploy to use acount abstraction wallet</p>
                    </div>
                    <div className="py-4">
                      <h2 className="font-bold font-sans flex">
                        Balance : {<p className="text-[14px]">{ethers.utils.formatEther(balance)} ETH</p>}
                      </h2>
                      <p className="text-[10px]">* deposit is required for demo</p>
                    </div>

                    {/* {isDeployed ? "Already deployed" : "Deploy"} */}
                    {/* <Button
                        w="full"
                        isLoading={isWalletConnectLoading}
                        onClick={deploy}
                        disabled={isDeployed}
                        colorScheme="brand"
                      >
                        Deposit 0.01ETH
                      </Button> */}
                    {/* {isDeployed ? "Already deployed" : "Deploy"} */}
                    {/* <Button w="full" isLoading={isWalletConnectLoading} onClick={deploy2} disabled={isDeployed}>
                        Deploy
                      
                      </Button> */}

                    <div className="w-screen">
                      <button
                        onClick={deploy}
                        disabled={isDeployed}
                        className="w-[280px] my-2 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">Deposit 0.1 ETH</span>
                      </button>
                    </div>

                    <div>
                      <label
                        htmlFor="my-modal-6"
                        className="btn w-[280px] my-2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 transition duration-500 origin-bottom-left transform bg-pink-500"
                        onClick={deploy2}
                      >
                        Deploy
                      </label>
                      {/* writing popup modal after deposit click */}
                      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                      <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box relative">
                          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
                            ✕
                          </label>

                          <h3 className="font-bold text-lg"> Deploying Your Smart Contract Wallet</h3>
                          <progress className="progress w-56"></progress>

                          <div
                            className="modal-action"
                            onClick={() => {
                              router.push("/auth");
                            }}
                          >
                            <label htmlFor="my-modal-6" className="btn">
                              Yay!
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>

    //   </div>
    // </div>
  );
};

export default HomePage;
