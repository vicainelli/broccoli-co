import React from "react";

type buttonProps = {
  testId: string;
  isDisabled: boolean;
  isBlock: boolean;
  type: "button" | "submit";
  variant: "primary-outline";
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<buttonProps> = ({
  type,
  isBlock,
  variant,
  isDisabled,
  onClick,
  children,
  testId,
}): JSX.Element => {
  const sharedClasses = [
    isBlock && "w-full",
    "items-center",
    "justify-center",
    "gap-1",
    "outline-none",
    "tracking-wide",
    "focus:outline-none",
    "focus:shadow-none",
    "px-4",
    "py-2",
    "font-semibold",
    "border-2",
    "border-transparent",
    "rounded-md",
    "transition-all",
    "duration-300",
  ];
  const variants = {
    "primary-outline": [
      "bg-white",
      "border-green-500",
      "text-green-500",
      "hover:bg-green-500",
      "hover:text-white",
    ],
    disabled: ["bg-gray-200", "text-gray-400", "cursor-not-allowed"],
  };

  let classes = [
    ...sharedClasses,
    ...variants[isDisabled ? "disabled" : variant],
  ].join(" ");

  return (
    <button
      disabled={isDisabled}
      data-testid={testId}
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
