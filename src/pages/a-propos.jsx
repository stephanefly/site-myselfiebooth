import MarketingPage from "../components/marketing/MarketingPage";
import { marketingPages } from "../data/marketingPages";

export default function APropos() {
  return <MarketingPage page={marketingPages["a-propos"]} />;
}
