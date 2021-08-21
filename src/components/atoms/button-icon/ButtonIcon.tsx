import React from "react";

type buttonProps = {
  testId: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const ButtonIcon: React.FC<buttonProps> = ({
  onClick,
  testId,
  children,
}): JSX.Element => {
  return (
    <button
      data-testid={testId}
      onClick={onClick}
      className="p-1 rounded hover:bg-gray-100 focus:bg-gray-100 bg-opacity-50 focus:outline-none transition-all"
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
