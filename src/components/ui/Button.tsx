import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "disabled"> {
  href?: undefined;
}

interface ButtonAsLink
  extends ButtonBaseProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "disabled"> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#6F7C70] text-[#F4F0EA] hover:bg-[#586657]",
  secondary:
    "border border-[#6F7C70]/70 text-[#27312E] hover:bg-[#6F7C70] hover:text-[#F4F0EA]",
  ghost: "text-[#27312E] hover:text-[#6F7C70]",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-serenity disabled:opacity-50 disabled:pointer-events-none aria-disabled:true:opacity-50 aria-disabled:true:pointer-events-none";

function isInternalHref(href: string): boolean {
  return (
    href.startsWith("/") &&
    !href.startsWith("//")
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    const safeDisabled =
      disabled ||
      href.length === 0 ||
      href.startsWith("[") ||
      href.includes("[CLIENT");

    if (safeDisabled) {
      return (
        <span
          className={cn(styles, "opacity-60 pointer-events-none cursor-not-allowed")}
          aria-disabled="true"
        >
          {children}
        </span>
      );
    }

    if (isInternalHref(href)) {
      return (
        <Link
          href={href}
          className={styles}
          {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      );
    }

    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={styles}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={styles}
      disabled={disabled}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
