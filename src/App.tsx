import React, { useState } from "react";
import Button from "./components/atoms/button";
import Header from "./components/organisms/header";
import Footer from "./components/organisms/footer";
import ModalSignup from "./components/organisms/modal-signup";

const App: React.FC = () => {
  let [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  function closeModal() {
    setSignUpModalOpen(false);
  }

  function openModal() {
    setSignUpModalOpen(true);
  }

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col h-full">
        <Header />

        <div className="flex-1 flex flex-col items-center justify-center">
          <main className="px-3">
            <div>
              <div className="text-center">
                <h1
                  data-testid="app_page_title"
                  className="text-4xl font-bold text-gray-700"
                >
                  A better way to enjoy every day.
                </h1>
                <div className="my-8">
                  <p>Be the first to know when we launch.</p>
                </div>
                <Button
                  isDisabled={false}
                  isBlock={false}
                  testId="button_open_signup_modal"
                  type="button"
                  variant="primary-outline"
                  onClick={openModal}
                >
                  Request an invite
                </Button>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div>
      <ModalSignup
        closeModal={closeModal}
        isSignUpModalOpen={isSignUpModalOpen}
      />
    </div>
  );
};

export default App;
