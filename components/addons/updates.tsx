export default function UpdateCard() {
     return (
       <div className="w-full p-4 mt-4 mb-4 mr-4 divide-y overflow-hidden rounded-lg border nx-bg-transparent nx-shadow-sm border-border dark:border-neutral-800 dark:divide-neutral-800">
         <div className="mb-4">
           <h2 className="text-xl font-semibold">Updates & Announcements</h2>
         </div>
         <div className="space-y-4">
          
           <div className="flex items-start gap-4 p-1">
             {/* <ZapIcon className="mt-1 h-5 w-5 text-primary" /> */}
             <BellIcon className="mt-1 h-5 w-5 text-primary" />
             <div className="flex-1">
               <div className="flex items-center justify-between">
                 <p className="font-medium">Announcement</p>
                 <span className="text-xs ">4 Aug 2024</span>
               </div>
               <p className="text-sm ">
                 Semester-1 study resources added!
               </p>
             </div>
           </div>
           <hr className="border-gray-300" />
           <div className="flex items-start gap-4">
             <CalendarIcon className="mt-1 h-5 w-5 text-primary" />
             <div className="flex-1">
               <div className="flex items-center justify-between">
                 <p className="font-medium">Upcoming</p>
                 <span className="text-xs ">10 Aug 2024</span>
               </div>
               <p className="text-sm ">
                 Semester-2 study resources
               </p>
             </div>
           </div>
           <hr className="border-gray-300" />
           <div className="flex items-start gap-4">
             <BellIcon className="mt-1 h-5 w-5 text-primary" />
             <div className="flex-1">
               <div className="flex items-center justify-between">
                 <p className="font-medium"> Announcement</p>
                 <span className="text-xs ">4 Aug 2024</span>
               </div>
               <p className="text-sm ">
                 RLiB v2.0.1 will be released soon!
               </p>
             </div>
           </div>
         </div>
       </div>
     )
   }
   
   function BellIcon(props) {
     return (
       <svg
         {...props}
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       >
         <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
         <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
       </svg>
     )
   }
   
   function CalendarIcon(props) {
     return (
       <svg
         {...props}
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       >
         <path d="M8 2v4" />
         <path d="M16 2v4" />
         <rect width="18" height="18" x="3" y="4" rx="2" />
         <path d="M3 10h18" />
       </svg>
     )
   }
   
   function ZapIcon(props) {
     return (
       <svg
         {...props}
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       >
         <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
       </svg>
     )
   }
   