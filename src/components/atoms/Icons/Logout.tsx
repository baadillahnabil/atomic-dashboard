import type { SVGProps } from "react";

function IconLogout(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        stroke="currentColor"
        d="M13.5 7.5l-3 3.25m3-3.25l-3-3m3 3H4m4 6H1.5v-12H8"
      />
    </svg>
  );
}

export default IconLogout;
