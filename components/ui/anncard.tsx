// src/components/Card.tsx
// authored by fuma-nama

import Link, { type LinkProps } from './utils/link';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from './utils/cn';

export function Carrds(
  props: HTMLAttributes<HTMLDivElement>,
): React.ReactElement {
  return (
    <div
      {...props}
      className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2', props.className)}
    >
      {props.children}
    </div>
  );
}

export type CarrdProps = {
  icon?: ReactNode;
  title: string;
  description: string;
} & Omit<LinkProps, 'title'>;

export function Card({
  icon,
  title,
  description,
  ...props
}: CarrdProps): React.ReactElement {
  return (
    <Link
      {...props}
      className={cn(
        'not-prose block rounded-lg border nx-bg-transparent dark:nx-bg-neutral-700 p-4 text-sm nx-text-foreground dark:nx-text-neutral-200 shadow-md transition-colors hover:bg-accent/80',
        props.className,
      )}
    >
      {icon ? (
        <div className="mb-2 w-fit rounded-md border bg-muted p-2 text-muted-foreground [&_svg]:size-4">
          {icon}
        </div>
      ) : null}
      <h3 className="mb-1 font-medium">{title}</h3>
      <p className="nx-text-foreground dark:nx-text-neutral-200">{description}</p>
    </Link>
  );
}
