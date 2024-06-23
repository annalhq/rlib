// ui/my-components/AnnCallout.tsx

import { AlertOctagon, AlertTriangle, Info } from 'lucide-react';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from './utils/cn';

type AnnCalloutProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'title' | 'type' | 'icon'
> & {
  title?: ReactNode;
  /**
   * @defaultValue info
   */
  type?: 'info' | 'warn' | 'error';
  icon?: ReactNode;
};

export const AnnCallout = forwardRef<HTMLDivElement, AnnCalloutProps>(
  ({ className, children, title, type = 'info', icon, ...props }, ref) => {
    const typeClasses = {
      info: 'border-border nx-bg-transparent dark:nx-bg-neutral-700 nx-text-gray-700 dark:nx-text-neutral-200',
      warn: 'border-border nx-bg-transparent dark:nx-bg-neutral-700 nx-text-gray-700 dark:nx-text-neutral-200',
      error: 'border-border nx-bg-transparent dark:nx-bg-neutral-700 nx-text-gray-700 dark:nx-text-neutral-200',
    };

    const iconClasses = 'w-6 h-6 text-blue-500'; // Adjust size and color

    return (
      <div
        ref={ref}
        className={cn(
          'my-6 flex flex-row gap-2 rounded-lg border nx-bg-transparent nx-shadow-sm border-border dark:border-neutral-800 dark:divide-neutral-800 p-3 text-sm ',
          typeClasses[type],
          className
        )}
        {...props}
      >
        {icon ??
          {
            info: <Info className={iconClasses} />,
            warn: <AlertTriangle className="w-6 h-6 text-orange-500" />,
            error: <AlertOctagon className="w-6 h-6 text-red-500" />,
          }[type]}
        <div className="w-0 flex-1">
          {title ? (
            <div className="mb-2 font-medium">{title}</div>
          ) : null}
          <div>{children}</div>
        </div>
      </div>
    );
  }
);

AnnCallout.displayName = 'AnnCallout';
