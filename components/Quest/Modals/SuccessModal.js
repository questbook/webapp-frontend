import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useAppContext } from 'context/state';

function SuccessModal() {
  const {
    mintingSuccess,
    setMintingSuccess,
    transactionDetails,
    currentProtocol,
  } = useAppContext();
  const [track, setTrack] = useState('');
  const [nftLink, setNftLink] = useState('');

  useEffect(() => {
    setTrack(currentProtocol);
  }, [currentProtocol]);

  useEffect(() => {
    if (['Polygon', 'Ethereum'].includes(track))
      setNftLink(`https://polygonscan.com/tx/${transactionDetails?.hash}`);
    else if (track === 'NEAR')
      setNftLink(
        `https://explorer.near.org/transactions/${transactionDetails?.id}`
      );
  }, [transactionDetails, track]);
  return (
    <Transition.Root show={mintingSuccess} as={Fragment}>
      <Dialog
        as="div"
        onClose={() => setMintingSuccess(false)}
        className={` fixed z-20 inset-0 overflow-y-auto`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={` inline-block align-bottom text-center bg-white rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full`}
            >
              <div className="flex p-6 justify-center flex-col items-center">
                <div className="relative w-16 h-16 ">
                  <Image
                    alt="alt"
                    src="/images/check.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="font-Inter font-semibold text-2xl leading-8">
                  Yay! You just received your NFT for completing this quest.
                </p>
                <div className={` mt-5 text-center px-2`}>
                  <p className="font-Inter font-bold text-base mb-2 text-[#1C2833]">
                    Quest Completion NFT
                  </p>
                  <div className="p-3 bg-[#F2F2F2] rounded">
                    <a
                      className="font-Inter font-bold text-base cursor-pointer  text-[#7A64F6]"
                      href={nftLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check out NFT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default SuccessModal;
