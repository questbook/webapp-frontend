import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { Fragment, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react';
import axios from '../lib/axios';
import { useAppContext } from '../context/state';
import tracks from '../public/data/tracks.json';
import { sendAmplitudeData } from '../lib/amplitude';
import protocolConstants from '../constants/protocolConstants.json';

function NftClaimModal({
  showNftClaimModal,
  setShowNftClaimModal,
  setShowWaitingModal,
}) {
  const {
    setMintingSuccess,
    currentTrackNameKey,
    currentQuestName,
    currentQuestDesc,
    setTransactionDetails,
  } = useAppContext();
  const addressInputRef = useRef(null);
  const [address, setAddress] = useState('');
  const [tweetClicked, setTweetClicked] = useState(false);
  const [tweetUrl, setTweetUrl] = useState('');
  const [minting, setMinting] = useState(false);
  const [learning, setLearning] = useState('');
  const [tweetText, setTweetText] = useState('');
  const [showError, setShowError] = useState(false);
  const track = tracks[currentTrackNameKey]?.protocol;
  const router = useRouter();

  useEffect(() => {
    setTweetText(
      `I learnt "${learning}" at https://openquest.xyz${router.asPath}.\n I'm confirming my address to claim my @questbookapp NFT : ${address}`
    );
  }, [address, learning]);
  const mintNft = async () => {
    if (tweetUrl !== '' && address !== '') {
      try {
        setMinting(true);
        setShowWaitingModal(true);
        setShowNftClaimModal(false);
        const tweetId = tweetUrl.split('/').pop();
        const res = await axios.post(`/mint/${track.toLowerCase()}`, {
          quest: currentQuestName,
          track: track,
          questDesc: currentQuestDesc,
          address,
          tweetId,
        });
        if (res) {
          console.log(res);
          setMinting(false);
          setShowNftClaimModal(false);
          setShowWaitingModal(false);
          setMintingSuccess(true);
          setTransactionDetails(res?.data?.resp);
          setTweetUrl('');
          setAddress('');
          setLearning('');
          sendAmplitudeData('NFT_claimed', {
            address: res?.data?.resp?.events[0]?.args[1],
            track: track,
            quest: currentQuestName,
          });
        } else {
          setMinting(false);
          setShowNftClaimModal(true);
          setShowWaitingModal(false);
          setShowError(true);
        }
      } catch (error) {
        console.log(error);
        setMinting(false);
        setShowNftClaimModal(true);
        setShowWaitingModal(false);
        setShowError(true);
      }
    }
  };
  return (
    <Transition.Root show={showNftClaimModal} as={Fragment}>
      <Dialog
        as="div"
        initialFocus={addressInputRef}
        onClose={() => setShowNftClaimModal(false)}
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
            unmount={!minting}
          >
            <div
              className={` inline-block align-bottom text-center bg-white rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full`}
            >
              <XIcon
                className="absolute top-0 right-0 w-6 h-8 m-4 cursor-pointer"
                onClick={() => setShowNftClaimModal(false)}
              />
              <div className="flex flex-col items-center bg-white px-4 py-6  sm:p-6 sm:pb-4 gap-y-6">
                <div
                  className={`${
                    showError ? '' : 'hidden'
                  } bg-red-100 border w-full sm:w-10/12 mt-8 border-red-400 text-red-700 px-4 py-3 rounded relative`}
                  role="alert"
                >
                  <strong className="font-bold font-Inter">Holy smokes!</strong>
                  <span className="block sm:inline font-Inter">
                    {' '}
                    Claiming failed!
                  </span>
                  <span
                    className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
                    onClick={() => setShowError(false)}
                  >
                    <svg
                      className="fill-current h-6 w-6 text-red-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </div>
                <div className="mx-auto flex-shrink-0 flex items-center justify-center ">
                  <h2 className=" text-5xl font-bold">👏</h2>
                </div>
                <div className="text-center">
                  <h2 className="font-Inter font-semibold text-base mb-2">
                    Congratulations!
                  </h2>
                  <p className="font-Inter font-normal text-sm leading-6">
                    Keep up your learning efforts consistent.
                  </p>
                </div>
                <div className="w-full sm:w-10/12">
                  <p className="font-Inter font-normal text-sm leading-6 mb-4">
                    Enter your{' '}
                    {/* <span className="font-Inter font-bold text-sm">
                      Ethereum
                    </span>{' '} */}
                    wallet address, tweet to our official handle @questbook and
                    we will airdrop the NFT to your wallet.
                  </p>
                  <div className="border rounded px-2 py-4">
                    <p className="font-Inter font-bold text-sm text-left mb-2">
                      Step 1: Enter your {track} wallet address
                    </p>
                    <input
                      ref={addressInputRef}
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      type="text"
                      placeholder={protocolConstants[track]?.addressPlaceholder}
                      className="form-input px-4 md:px-8 py-3 text-left border-[#ABB2B9] font-Inter font-normal text-sm rounded w-full"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-10/12">
                  <div className="border rounded px-2 py-4">
                    <p className="font-Inter font-bold text-sm text-left mb-2">
                      Step 2: Describe in few words what you learnt from this
                      quest
                    </p>
                    <textarea
                      onChange={(e) =>
                        setLearning(e.target.value.substring(0, 61))
                      }
                      value={learning}
                      type="text"
                      minLength="5"
                      maxLength="60"
                      placeholder="how to create a smart contract"
                      className="form-input px-4 md:px-8 py-3 text-left border-[#ABB2B9] out-of-range:border-red-500 font-Inter font-normal text-sm rounded w-full"
                    />
                  </div>
                </div>
                <div className="border rounded px-2 py-4 text-center w-full sm:w-10/12">
                  <p className="font-Inter font-bold text-sm text-left mb-2">
                    Step 3: Tweet to our official handle @questbook
                  </p>
                  <button
                    onClick={() => {
                      setTweetClicked(true);
                      window &&
                        window.open(
                          `https://twitter.com/intent/tweet?text=${tweetText}`,
                          '_blank'
                        );
                    }}
                    disabled={address === '' || learning === ''}
                    className={` bg-[#299DED] group disabled:bg-[#CCCCCC] cursor-pointer disabled:cursor-not-allowed w-full h-9 mx-auto flex items-center justify-center gap-x-2 rounded`}
                  >
                    <Image
                      src={`${
                        address === '' || learning === ''
                          ? '/images/twitter-grey.svg'
                          : '/images/twitter.svg'
                      }`}
                      width={20}
                      height={20}
                    />
                    <span className="font-Inter font-medium text-base text-white group-disabled:text-[#7A7A7A]">
                      Tweet
                    </span>
                  </button>
                </div>
                <div className={`border rounded px-2 py-4 w-full sm:w-10/12`}>
                  <p className="font-Inter font-bold text-sm text-left mb-2">
                    Step 4: Enter the tweet URL
                  </p>
                  <p className="font-Inter font-bold text-sm my-2">Tweet Url</p>
                  <input
                    type="text"
                    value={tweetUrl}
                    disabled={
                      !(tweetClicked && address.length && learning.length)
                    }
                    onChange={(e) => setTweetUrl(e.target.value)}
                    placeholder="https://twitter.com/madhavanmalolan/status/1479014163938635777"
                    className="form-input px-4 md:px-8 py-3 text-left border-[#ABB2B9] font-Inter font-normal text-sm rounded w-full mb-3"
                  />
                  <button
                    disabled={
                      !(
                        tweetClicked &&
                        address.length &&
                        tweetUrl.length &&
                        learning.length
                      )
                    }
                    onClick={mintNft}
                    className="bg-[#7A64F6] group disabled:bg-[#CCCCCC] cursor-pointer disabled:cursor-not-allowed w-full  h-9 mx-auto flex items-center justify-center gap-x-2 rounded"
                  >
                    <span className="font-Inter font-medium text-base text-white group-disabled:text-[#7A7A7A]">
                      Claim
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default NftClaimModal;
