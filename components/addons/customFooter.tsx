// to be used in RLIiB v2.0

import cn from 'clsx'
import type { ReactElement } from 'react'
import { Users } from 'lucide-react' 


interface CustomFooterProps {
  menu?: boolean;
  darkMode?: boolean;
  footerText?: string;
  totalViews: number;
  liveVisitors: number;
}

export function CustomFooter({
  menu,
  darkMode = true,
  footerText = 'Built by Annalhq Shaikh',
  totalViews,
}: CustomFooterProps): ReactElement {
  return (
    <footer className="nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent">
      <div
        className={cn(
          'nx-mx-auto nx-flex nx-max-w-[90rem] nx-gap-2 nx-py-2 nx-px-4',
          menu && darkMode ? 'nx-flex' : 'nx-hidden'
        )}
      >
        {darkMode && (
          <button className="nx-theme-switch">
            Switch Theme
          </button>
        )}
      </div>
      <hr className="dark:nx-border-neutral-800" />
      <div
        className={cn(
          'nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-between nx-items-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400',
          'nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]'
        )}
      >
        <p className="nx-footer-text">{footerText}</p>
          <div className="nx-flex nx-items-center nx-gap-2 nx-px-4 nx-py-2 nx-bg-gray-200 nx-rounded-md dark:nx-bg-neutral-800">
            <Users className="nx-text-gray-700 dark:nx-text-gray-300" />
            <div>
              <div className="nx-text-lg nx-font-bold">{totalViews}</div>
              <div className="nx-text-sm nx-font-medium">Total Site Views</div>
            </div>
          </div>
      </div>
    </footer>
  )
}
