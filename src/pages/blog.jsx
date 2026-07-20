import MarketingPage from "../components/marketing/MarketingPage";
import { marketingPages } from "../data/marketingPages";

export default function Blog() {
  return <MarketingPage page={marketingPages.blog} />;
}
