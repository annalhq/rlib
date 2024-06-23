// import { ThemeSwitch} from "nextra-theme-docs";
// import { CustomFooter } from './ui/misc/customFooter'
// import { ChevronRight } from 'lucide-react'

const config = {
  logo: (
    <>
      <span className="bg-gradient-to-r from-blue-500 via-purple to-indigo-600 text-transparent bg-clip-text bg-300%" style={{ marginRight: "0.5rem", fontWeight: "800"}}>RLiB</span>
      <span style={{ fontWeight: "400", color: "#4B5563" }}>
        / Annalhq
      </span>
    </>
  ),

     // Github and Discord linkings if needed in future 
    //  project: {
    //    link: 'https://github.com/annalhq/r-lib'
    //  },
    //  chat: {
    //   link: 'https:discord.com/annalhq'
    //  },
    feedback: "",
    editLink: { text: '' },

    useNextSeoProps(){
      return{
        titleTemplate: "Rlib - %s",   
      };
    },

    search: {
      placeholder: 'Search study resources',
    },
    
    //Extra tweaks by me



    // Default Footer 
    footer: {
      text: (
        <span>
          <a href="annalhq.github.io" target="_blank">
            Built by Annalhq Shaikh
          </a>
        </span>
      )
    }, 

    // My customized rebuilt footer
    // footer: {
    //   component: <CustomFooter/>

    // },

    // primaryHue: { dark: 158.11, light: 142.78 },
    // primarySaturation: {dark: 64.37 , light:64},

    // use the below for theme switch, inspiration can be taken from https://github.com/monkeytypegame/monkeytype/tree/master/frontend/static/themes
    // navbar: {
    //   extraContent: (
    //     <>
    //       <LocaleSwitch />
    //       <ThemeSwitch />
    //     </>
    //   ),
    // },

    sidebar: {
      toggleButton: true,
      defaultMenuCollapseLevel: 1,
      autoCollapse: true,
        
    },
    
    darkMode: true,
    gitTimestamp: true,
    toc: {
      backToTop: true,
    },
  
  // Resolve the error for banner bg-tailwindcss
  // banner: {
  //   key: "banner-23",
  //   dismissible: true,
  //   text: (
  //     <div className="bg-teal-600 flex justify-center items-center py-2">
  //       <a href="link-here" target="_blank" className="flex items-center">
  //         <span className="mr-2">🎉</span> RliB v1.0.2 is out!
  //         <ChevronRight className="ml-2" />
  //       </a>
  //     </div>
  //   ),
  // },
    
}

export default config;