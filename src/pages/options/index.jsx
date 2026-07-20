import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

export default function Options() {
  return <MarketingPage page={marketingPages["options-index"]} />;
}
