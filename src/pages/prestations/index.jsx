import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

export default function Prestations() {
  return <MarketingPage page={marketingPages["prestations-index"]} />;
}
