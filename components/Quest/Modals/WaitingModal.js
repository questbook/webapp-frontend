import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

function WaitingModal({ showWaitingModal, setShowWaitingModal }) {
  return (
    <Transition.Root show={showWaitingModal} as={Fragment}>
      <Dialog
        as="div"
        onClose={() => setShowWaitingModal(false)}
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
              className={` inline-block align-bottom p-6 text-center bg-white rounded-lg  overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full`}
            >
              <div className="flex flex-col justify-around items-center">
                <div className="flex justify-center items-center mb-4">
                  <div className="relative w-12 h-12  animate-spin rounded-full bg-gradient-to-r from-[#27AE60] via-[#3AE180] to-[#00A3FF] ">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border-2 border-white"></div>
                  </div>
                </div>
                <p className="font-Inter font-medium text-2xl">
                  Sending NFT to Wallet...
                </p>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default WaitingModal;
