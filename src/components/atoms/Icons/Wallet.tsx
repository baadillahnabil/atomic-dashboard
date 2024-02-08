import type { SVGProps } from "react";

function IconWallet(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M19 7h-1V6a3 3 0 00-3-3H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3v-8a3 3 0 00-3-3zM5 5h10a1 1 0 011 1v1H5a1 1 0 010-2zm15 10h-1a1 1 0 010-2h1zm0-4h-1a3 3 0 000 6h1v1a1 1 0 01-1 1H5a1 1 0 01-1-1V8.83A3 3 0 005 9h14a1 1 0 011 1z" />
    </svg>
  );
}

export default IconWallet;
