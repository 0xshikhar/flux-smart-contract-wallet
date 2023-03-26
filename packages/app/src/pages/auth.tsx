/* eslint-disable camelcase */

import { ethers } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { NextPage } from "next";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount, useSigner } from "wagmi";

import { DefaultLayout } from "@/components/layouts/Default";
import { useFluxWallet } from "@/hooks/useFluxWallet";

import { NULL_ADDRESS, NULL_BYTES } from "../../../contracts/lib/utils";
import { generateMerkleTree } from "../util";




// import Image from 'next/image';
// import qrcode from 'qrcode';
// import speakeasy from 'speakeasy';

export interface PeerMeta {
    name: string;
    url: string;
}

const AuthPage: NextPage = () => {
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [Deploying, setDeploying] = useState(false);

    const [address, setAddress] = useState("");
    const [secret, setSecret] = useState("");
    const [uri, setURI] = useState("");

    const [deployed, setDeployed] = useState(false);
    const [scwAddress, setScwAddress] = useState("");


    // setError(false);
    // setDeployed(false);

    // setDeploying(true);

    const router = useRouter();

    useEffect(() => {

        async function MerkleTree() {
            const [_uri, _secret, root] = await generateMerkleTree();
            console.log(`root: ${root}`)
            setSecret(_secret);
            setURI(_uri);
        }
    }, []);



    return (
        <DefaultLayout>
            <div className="appbox">
                {/* {fluxWalletAddress && (   )} */}
                <div id='header'>
                    <div className='pt-4 px-4'>
                        <h1 className="text-4xl text-white py-4  font-sans">
                            Hey ! 👋
                        </h1>
                        <h2 className="text-base text-white py-2 pb-10 font-sans "> Its time to secure you !</h2>
                    </div>

                    <div className='bg-white rounded-[16px] object-contain w-[320px] h-[480px] relative'>
                        <div className="flex h-full items-center justify-center px-4 inset-x-0 bottom-0">
                            <div className="w-full">
                                {/* <WalletAuth /> */}
                                {/* <button onClick={(e) => deploy(e)} className="btn" >
                                    Start Now 🚀
                                </button> */}

                                {/* {deployed ? (
                                    <h2>Scan the QR code using Google Authenticator</h2>
                                ) : (
                                    <div />
                                )}
                                {deployed ? <h2>SCW Address: {scwAddress}</h2> : <div />}
                                {deployed ? (
                                    <h2>Please send atleast 0.1 ETH to your SCW</h2>
                                ) : (
                                    <div />
                                )} */}

                                <div>
                                    <Image src={uri} alt='qr' width={400}
                                        height={400} style={{ objectFit: "contain" }} />
                                    <span>QR code</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DefaultLayout>
    );
};

export default AuthPage;
