import { TrendyolSorts } from "@/types/trendyol";
import { AiOutlineTruck } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiCommercialAirplane, GiTimeTrap } from "react-icons/gi";

const footerFeatureItems = [
  {
    icon: GiCommercialAirplane,
    text: "حمل اکسپرس",
  },
  {
    icon: BiMoneyWithdraw,
    text: "کمترین هزینه حمل و گمرک",
  },
  {
    icon: GiTimeTrap,
    text: "تعهد زمان تحویل کالا",
  },
  {
    icon: AiOutlineTruck,
    text: "ارسال رایگان داخل کشور",
  },
];

const footerLinks = [
  { link: "/about", text: "درباره" },
  { link: "/mag", text: "مگ" },
  { link: "/jobs", text: "فرصتهای شغلی" },
  { link: "/rule", text: "قوانین ومقررات" },
  { link: "/help", text: "راهنمای خرید" },
  { link: "/questions", text: "سوالات متداول" },
  { link: "/quote", text: "شکایت وانتقاد" },
  { link: "/download", text: "دانلود اپلیکیشن" },
  { link: "/report", text: "گزارش عملکرد" },
  { link: "/changes", text: "گزارش تغییرات" },
  { link: "/offer", text: "پیشنهاد تغییرات" },
];

const trendyolSortOptions = [
  { text: "توصیه میشود", value:TrendyolSorts.RECOMENDED },
  { text: "کمترین قیمت", value: TrendyolSorts.MIN_PRICE },
  { text: "بالاترین قیمت", value:TrendyolSorts.MAX_PRICE },
  { text: "پرفروش ترین", value: TrendyolSorts.MOST_SELLING },
  { text: "برگزیده های برتر", value: TrendyolSorts.MOST_POPULAR },
  { text: "جدیدترین ها", value: TrendyolSorts.NEWEST },
  {
    text: "بیشترین بازبینی",
    value: TrendyolSorts.MOST_REVIEWS,
  },
];

export { footerFeatureItems, footerLinks,trendyolSortOptions };
