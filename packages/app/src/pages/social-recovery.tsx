/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable camelcase */
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSigner } from "wagmi";

import { DefaultLayout } from "@/components/layouts/Default";
import { useFluxWallet } from "@/hooks/useFluxWallet";

// import { FluxWallet__factory } from "../../../contracts/typechain-types";

export interface PeerMeta {
  name: string;
  url: string;
}

const HomePage: NextPage = () => {
  const router = useRouter();
  const { fluxWalletAddress, contract } = useFluxWallet();
  const [guardian, setGuardians] = useState("");
  const [guardian2, setGuardians2] = useState("");
  const { data: signer } = useSigner();

  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const txSetGuardians = async () => {
    if (!contract) {
      return;
    }
    await contract.setGuardians([guardian, guardian2], 2);
  };

  const onClickLink = () => {
    router.push(`${origin}/recovery?address=${fluxWalletAddress}`);
  };

  return (
    <DefaultLayout>
      <div className="appbox">
        {fluxWalletAddress && (
          <div>
            <div className="pt-4 px-4">
              <h1 className="text-4xl text-white py-4  font-sans">Let's Setup</h1>
              <h2 className="text-base text-white py-2 pb-10 font-sans "> This Can Save You From  Disaster :) </h2>
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
                      <h2 className="font-bold font-sans">Your Flux Wallet Address </h2>
                      <p className="text-[11px]">{fluxWalletAddress}</p>
                    </div>
                    <div>
                      <form>
                        <div>
                          <label htmlFor="guardian" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guardian #1</label>
                          <input type="text" value={guardian} onChange={(e) => setGuardians(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Wallet Address" required />
                        </div>
                        <div className="py-4">
                          <label htmlFor="guardian2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guardian #2</label>
                          <input type="text" value={guardian2} onChange={(e) => setGuardians2(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Wallet Address" required />
                        </div>
                      </form>
                      <button
                        // onClick={deploy}
                        // disabled={isDeployed}
                        onClick={txSetGuardians} disabled={!guardian || !guardian2}
                        className="w-[280px] my-1 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                      >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">Set Your Social Recovery</span>
                      </button>
                      <a className="text-[12px] font-sans font-bold pt-4">Recovery URL to share</a>
                      <a className="text-[8px] font-sans p-0" onClick={onClickLink}>
                        {`${origin}/recovery?address=${fluxWalletAddress}`}
                      </a>
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

                    {/* <div className="w-screen">
                        <button
                          onClick={deploy}
                          disabled={isDeployed}
                          className="w-[280px] my-1 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                        >
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                          <span className="relative text-white">Deposit 0.1 ETH</span>
                        </button>

                      </div>
                      <div>
                        <label
                          htmlFor="my-modal-7"
                          className="btn w-[130px] mx-1 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 transition duration-500 origin-bottom-left transform bg-pink-500"
                          onClick={handleCreateSession}
                        >
                          Via Stripe
                        </label>
                        <label
                          htmlFor="my-modal-6"
                          className="btn w-[130px] mx-1 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 transition duration-500 origin-bottom-left transform bg-pink-500"
                        // onClick={ }
                        >
                          Via Gelato
                        </label>
                      </div> */}


                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
