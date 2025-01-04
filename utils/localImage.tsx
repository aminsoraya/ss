import aliexpress from "@/imgs/aliexpress.svg";
import ebay from "@/imgs/ebay.svg";
import trendyol from "@/imgs/trendyol.svg";
import bazr from "@/imgs/bazar.png";
import googlePlay from "@/imgs/googlePlay.png";
import iapps from "@/imgs/iapps.png";
import myket from "@/imgs/myket.png";
import sibapp from "@/imgs/sibapp.png";
 

const localImage = (name: string) => {
  if (name.toLowerCase().includes("aliexpress")) return aliexpress.src;
  if (name.toLowerCase().includes("trendyol")) return trendyol.src;
  if (name.toLowerCase().includes("ebay")) return ebay.src;
  if (name.toLowerCase().includes("bazr")) return bazr.src;
  if (name.toLowerCase().includes("googlePlay")) return googlePlay.src;
  if (name.toLowerCase().includes("iapps")) return iapps.src;
  if (name.toLowerCase().includes("myket")) return myket.src;
  if (name.toLowerCase().includes("sibapp")) return sibapp.src;
};

export default localImage;
