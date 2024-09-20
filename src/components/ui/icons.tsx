import { SVGProps } from "react";

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? "24"}
      height={props.height ?? "24"}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "none" }}
      viewBox="0 0 22 22"
      {...props}
    >
      <symbol id="checkbox-30" viewBox="0 0 22 22">
        <path
          fill={props.fill ?? "none"}
          stroke={props.stroke ?? "currentColor"}
          d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"
        />
      </symbol>
    </svg>
  );
};

export const TrashIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width ?? "26"}
      height={props.height ?? "26"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6H5ZM8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
        stroke={props.stroke ?? "B0BBD1"}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
