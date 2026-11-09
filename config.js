/* =============================================================================
   Ryan LePiane, Link Hub config
   -----------------------------------------------------------------------------
   THIS is the only file you need to edit. Add, remove, or reorder links here.
   You never have to touch index.html or any CSS.

   How to add a link:
     1. Copy one of the { ... } blocks inside a section's "links" list.
     2. Change the title, sub (small grey text), and url.
     3. Pick an "icon" from the list at the bottom of this file.
     4. Save. On GitHub the page updates automatically in ~1 minute.

   The "feed: true" section and the tape at the top fill themselves from your
   Substack once a day. Nothing to do there.

   Keep the commas exactly where they are. Wrap text in "quotes".
   ============================================================================= */

window.SITE = {

  identity: {
    name:     "Ryan",
    nameEm:   "LePiane",
    tagline:  "LP Options Academy",
    handle:   "Options/Futures Trader and Educator",
    bio:      "Trading options & losing? You're fighting probability. Using the Law of Large Numbers & odds to win consistently like a casino. Sharing the strategies that helped me leave Accounting to trade options full-time. Full portfolio weekly, wins & losses.",
    avatar:   "assets/profile.jpg",
    monogram: "LP"
  },

  sections: [
    {
      heading: "Start Here",
      links: [
        {
          title: "LP Options Academy",
          sub:   "Full portfolio weekly, wins & losses",
          url:   "https://ryanlepiane.substack.com/",
          icon:  "substack",
          featured: true,
          tag:   "Free"
        },
        {
          title: "LP Options Academy Discord",
          sub:   "Join the community",
          url:   "https://discord.gg/UfE2dxMGc8",
          icon:  "discord"
        }
      ]
    },
    {
      heading: "The Weekly Book",
      note: "No signals, callouts, bragging about my gains, or selling a course.",
      feed: true,
      count: 3
    },
    {
      heading: "Tools & Referrals",
      note: "These are referral links. They cost you nothing and help support the free content.",
      links: [
        {
          title: "TraderMatrix",
          sub:   "The GEX and flow data I trade with",
          url:   "https://www.tradermatrix.pro/?ref=LPOPTIONS",
          icon:  "chart"
        },
        {
          title: "tastytrade",
          sub:   "Options and futures broker",
          url:   "https://open.tastytrade.com/signup?referralCode=MS5WD7P7GS",
          icon:  "chart"
        },
        {
          title: "Robinhood",
          sub:   "Referral signup",
          url:   "https://join.robinhood.com/ryanl4844",
          icon:  "chart"
        },
        {
          title: "Imperial Trader",
          sub:   "Options prop firm",
          url:   "https://imperialtraderfunding.com/accounts?ref=LPOPTIONS",
          icon:  "shield"
        },
        {
          title: "LMNT Sample Pack",
          sub:   "Electrolytes",
          url:   "http://elementallabs.refr.cc/default/u/ryanlepiane",
          icon:  "drop"
        }
      ]
    },
    {
      heading: "Support the Work",
      links: [
        {
          title: "Tip Jar",
          sub:   "Completely optional, much appreciated",
          url:   "https://drive.google.com/file/d/1JDtqylayCrA4lvkO8sRH97JebTCigRlo/view?usp=sharing",
          icon:  "heart"
        }
      ]
    }
  ],

  socials: [
    { label: "Substack", url: "https://substack.com/@ryanlepiane", icon: "substack" },
    { label: "X",        url: "https://x.com/_RyanLP",             icon: "x" },
    { label: "YouTube",  url: "https://www.youtube.com/@Ryan-LP",  icon: "youtube" }
  ],

  footerName: "Ryan LePiane",
  creditName: "mphinance",
  creditUrl:  "https://mphinance.com",
  disclosure: "Options and futures involve substantial risk and are not suitable for all investors. This content is for educational purposes only and does not constitute investment advice. Past performance does not guarantee future results. Always consult a qualified financial professional before making investment decisions. Some links above are referral or affiliate links and may earn a commission."

  /* =============================================================================
     Available "icon" names:
       substack, discord, x, youtube, podcast, mail, chart, book, link, cart,
       code, brain, shield, drop, heart
     ============================================================================= */
};
