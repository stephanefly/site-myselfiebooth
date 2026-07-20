import MarketingPage from "../../components/marketing/MarketingPage";
import { marketingPages } from "../../data/marketingPages";

export default function Evenements() {
  return <MarketingPage page={marketingPages["evenements-index"]} />;
}
