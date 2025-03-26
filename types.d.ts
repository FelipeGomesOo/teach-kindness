declare global {
  interface ChildrenProps {
    children: ReactNode;
  }

  interface ClassNameProps {
    className?: string;
  }
}

export type IconType = string | React.ReactElement;

export interface VariantProps {
  variant?: "primary" | "secondary";
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ClassNameProps {
  className?: string;
}
