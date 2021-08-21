import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ButtonIcon from "components/atoms/button-icon";
import { X } from "react-feather";
import FormSignUp from "components/organisms/form-signup/FormSignUp";

type modalProps = {
  isSignUpModalOpen: boolean;
  closeModal: () => void;
};

export default function ModalSignUp({
  isSignUpModalOpen,
  closeModal,
}: modalProps) {
  return (
    <>
      <Transition appear show={isSignUpModalOpen} as={Fragment}>
        <Dialog
          data-testid="modal_signup_form"
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-opacity-50 bg-gray-900 backdrop-filter backdrop-blur" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Request an invite
                </Dialog.Title>
                <div className="mt-2">
                  <FormSignUp />
                </div>

                <div className="absolute top-3 right-3">
                  <ButtonIcon testId="close_modal" onClick={closeModal}>
                    <X className="w-4 h-4 text-gray-500" />
                  </ButtonIcon>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
