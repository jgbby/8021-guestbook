const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {  // these will be added in step 5
    header: "",
    payload: "",
    signature: ""
  },
  baseBuilder: {
    ownerAddress: "0xF00EEE6ADb1963452A2c276f4Df4e917A5e46891",
  },
  miniapp: {
    version: "1",
    name: "ERC-8021 Guestbook",
    subtitle: "Sign it! Sign it!",
    description: "Demo app to test the ERC-8021 attribution standard",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["ERC-8021", "demo"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    embedImageUrl: `${ROOT_URL}/embed.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
