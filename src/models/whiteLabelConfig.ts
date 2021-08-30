export type ProductId = "qmBase" | "Kroschke" | "DocuPro";

export interface WhiteLabelConfig {
  title: string;
  thisUrl: string;
  /**This info is always available and will be awaited in the appContext */
  productId: ProductId;
  iconUrl: string;
  faviconUrl: string;
  primaryColor: string;
  secondaryColor: string;
  vendorUrl: string;
  vendorName: string;
  imprintUrl: string;
  dataPrivacyUrl: string;
  productDisplayName: string;
  testAccountDurationAsDays: number;
  domain: "qmbase.com" | "guard.kroschke.com";
  footerCommunity: unknown;
  accountBaseUrl: string;
}
