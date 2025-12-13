"use client";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Disclosure,
  Transition,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";
import { MessageCircle, X, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function PopupWidget() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data, e) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <DisclosureButton className="fixed z-40 flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full shadow-lg hover:shadow-xl right-5 bottom-5 w-14 h-14 focus:outline-none hover:scale-110 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900">
              <span className="sr-only">Open Contact form Widget</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
              >
                <MessageCircle className="absolute w-6 h-6 text-white" />
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute"
                as="div"
              >
                <X className="w-6 h-6 text-white" />
              </Transition>
            </DisclosureButton>
            <Transition
              className="fixed z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
              as="div"
            >
              <DisclosurePanel className="flex flex-col overflow-hidden left-0 h-full w-full sm:w-[380px] min-h-[250px] sm:h-[600px] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-2xl rounded-lg sm:max-h-[calc(100vh-120px)]">
                <div className="flex flex-col items-center justify-center h-32 p-5 bg-gradient-to-r from-cyan-600 to-cyan-700 dark:from-cyan-700 dark:to-cyan-800">
                  <h3 className="text-lg font-semibold text-white">How can we help?</h3>
                  <p className="text-white opacity-80 text-sm mt-1">
                    We usually respond in a few hours
                  </p>
                </div>
                <div className="flex-grow h-full p-6 overflow-auto bg-white dark:bg-gray-900">
                  {!isSubmitSuccessful && (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                      <input
                        type="hidden"
                        value="YOUR_ACCESS_KEY_HERE"
                        {...register("apikey")}
                      />
                      <input
                        type="hidden"
                        value={`${userName} sent a message from Nextly`}
                        {...register("subject")}
                      />
                      <input
                        type="hidden"
                        value="Nextly Template"
                        {...register("from_name")}
                      />
                      <input
                        type="checkbox"
                        className="hidden"
                        style={{ display: "none" }}
                        {...register("botcheck")}
                      />

                      <div>
                        <label
                          htmlFor="full_name"
                          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="full_name"
                          placeholder="John Doe"
                          {...register("name", {
                            required: "Full name is required",
                            maxLength: 80,
                          })}
                          className={`w-full px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-colors ${
                            errors.name
                              ? "border-red-500 dark:border-red-400"
                              : "border-gray-300 dark:border-gray-600"
                          }`}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", {
                            required: "Enter your email",
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Please enter a valid email",
                            },
                          })}
                          placeholder="you@company.com"
                          className={`w-full px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 bg-white dark:bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-colors ${
                            errors.email
                              ? "border-red-500 dark:border-red-400"
                              : "border-gray-300 dark:border-gray-600"
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Your Message
                        </label>
                        <textarea
                          rows={4}
                          id="message"
                          {...register("message", {
                            required: "Enter your Message",
                          })}
                          placeholder="Your Message"
                          className={`w-full px-3 py-2 text-gray-900 dark:text-white placeholder-gray-400 bg-white dark:bg-gray-800 border rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-colors resize-none ${
                            errors.message
                              ? "border-red-500 dark:border-red-400"
                              : "border-gray-300 dark:border-gray-600"
                          }`}
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>

                      <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                        <span>
                          Powered by{" "}
                          <a
                            href="https://Web3Forms.com"
                            className="text-cyan-600 dark:text-cyan-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Web3Forms
                          </a>
                        </span>
                      </p>
                    </form>
                  )}

                  {isSubmitSuccessful && isSuccess && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Message sent successfully
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{Message}</p>
                      <button
                        className="mt-6 px-4 py-2 text-cyan-600 dark:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                        onClick={() => reset()}
                      >
                        Send another message
                      </button>
                    </div>
                  )}

                  {isSubmitSuccessful && !isSuccess && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Oops, Something went wrong!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">{Message}</p>
                      <button
                        className="mt-6 px-4 py-2 text-cyan-600 dark:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors font-medium"
                        onClick={() => reset()}
                      >
                        Try again
                      </button>
                    </div>
                  )}
                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
