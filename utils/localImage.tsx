import aliexpress from "@/imgs/aliexpress.svg";
import ebay from "@/imgs/ebay.svg";
import trendyol from "@/imgs/trendyol.svg";

const localImage = (name: string) => {
  if (name.toLowerCase().includes('aliexpress')) return aliexpress.src;
  if (name.toLowerCase().includes('trendyol')) return trendyol.src;
  if (name.toLowerCase().includes('ebay')) return ebay.src;
  return ''; // Default return if no match found
};

export default localImage;
