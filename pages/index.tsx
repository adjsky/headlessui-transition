import { Transition } from "@headlessui/react";

export default function Home() {
  return (
    <>
      <Transition
        show
        appear
        className="opacity-0"
        enter="transition-opacity duration-500"
        enterTo="!opacity-100"
      >
        will fade in
      </Transition>
      <Transition
        show
        appear
        enter="transition-opacity duration-500"
        enterTo="opacity-100"
        enterFrom="opacity-0"
      >
        will not fade in
      </Transition>
    </>
  );
}
