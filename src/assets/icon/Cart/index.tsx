import { FC } from "react";

type CartProps = {
  fill?: string;
  width?: string;
  height?: string;
  className?: string;
};

export const Cart: FC<CartProps> = (props) => {
  const { fill = "#767676", width = "34", height = "32", className } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 33"
      className={className}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.0184523 0.987542C0.120359 0.47801 0.616028 0.147564 1.12556 0.24947L2.90426 0.60521C4.77088 0.978534 6.17491 2.52694 6.36432 4.42108L6.53859 6.1638H29.8484C32.9968 6.1638 35.307 9.12258 34.5434 12.177L32.6403 19.7894C31.8753 22.8493 29.126 24.9958 25.972 24.9958H10.7287C8.53642 24.9958 6.68987 23.3576 6.42867 21.1809L4.75075 7.1983L4.49194 4.60832C4.38482 3.53716 3.59082 2.66151 2.53522 2.45039L0.756524 2.09465C0.246992 1.99274 -0.0834541 1.49707 0.0184523 0.987542ZM6.74764 8.04553L8.29698 20.9567C8.4447 22.1877 9.48895 23.1141 10.7287 23.1141H25.972C28.2626 23.1141 30.2592 21.5552 30.8147 19.333L32.7178 11.7206C33.1845 9.85383 31.7726 8.04553 29.8484 8.04553H6.74764Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.97766 16.6876C9.97766 16.1618 10.3914 15.7355 10.9017 15.7355H16.8159C17.3263 15.7355 17.74 16.1618 17.74 16.6876C17.74 17.2134 17.3263 17.6396 16.8159 17.6396H10.9017C10.3914 17.6396 9.97766 17.2134 9.97766 16.6876Z"
        fill={fill}
      />
      <circle cx="11.9588" cy="29.9876" r="2.54254" fill={fill} />
      <circle cx="27.214" cy="29.9876" r="2.54254" fill={fill} />
    </svg>
  );
};
