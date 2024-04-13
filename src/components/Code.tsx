import { createSignal } from "solid-js";

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export function Code({ code }) {
  const [copied, setCopied] = createSignal(false);

  const copy = async () => {
    await navigator?.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <pre class="bg-[#EEF4FA] rounded-md p-8 my-8 relative">
      <button
        onClick={copy}
        class="absolute top-4 right-4 p-2 rounded-md bg-[#568FCB] text-[#fff]">
        {copied() ? <CheckIcon /> : <CopyIcon />}
      </button>
      <code class="text-[#568FCB] font-medium text-sm">{code}</code>
    </pre>
  );
}
