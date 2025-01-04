import { AiOutlineTruck } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiCommercialAirplane, GiTimeTrap } from "react-icons/gi";
import trendyol1 from "@/imgs/trendyol1.webp";
import trendyol2 from "@/imgs/trendyol2.webp";
import trendyol3 from "@/imgs/trendyol3.webp";
import trendyol4 from "@/imgs/trendyol4.webp";
import trendyol5 from "@/imgs/trendyol5.webp";
import trendyol6 from "@/imgs/trendyol6.webp";
import trendyol7 from "@/imgs/trendyol7.webp";
import trendyol8 from "@/imgs/trendyol8.webp";
import trendyol9 from "@/imgs/trendyol9.webp";

import brand1 from "@/imgs/trendyol-brands/Camper_202301262231.webp";
import brand2 from "/imgs/trendyol-brands/converse.webp";
import brand3 from "/imgs/trendyol-brands/Doque_202301270049.webp";
import brand4 from "/imgs/trendyol-brands/LeviS_202301270443.webp";
import brand5 from "/imgs/trendyol-brands/Loft_202301270443.webp";
import brand6 from "/imgs/trendyol-brands/Mudo_202301270522.webp";
import brand7 from "/imgs/trendyol-brands/Panco_202306221323.webp";
import brand8 from "/imgs/trendyol-brands/Prada_202301271558.webp";
import brand9 from "/imgs/trendyol-brands/Yargici_202301280236.webp";

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

const trendyolCatList = [
  {
    image: trendyol1.src,
    text: "شروع به خرید کنید",
    link: "/s/yilbasi-hediyeleri",
  },
  {
    image: trendyol2.src,
    text: "اکنون آن را بررسی کنید",
    link: "/s/yilbasi-hediyeleri",
  },
  {
    image: trendyol3.src,
    text: "محصولات با قیمت خوب",
    link: "/s/yilbasi-hediyeleri",
  },
  {
    image: trendyol4.src,
    text: "آن را هم بخرید!",
    link: "/s/yilbasi-hediyeleri",
  },
  {
    image: trendyol5.src,
    text: "محصولات سودمند",
    link: "/s/yilbasi-hediyeleri",
  },
  {
    image: trendyol6.src,
    text: "کوپن های تخفیف من",
    link: "/s/yilbasi-hediyeleri",
  },
  {
    image: trendyol7.src,
    text: "اعتبارات",
    link: "/s/yilbasi-hediyeleri",
  },
  {
    image: trendyol8.src,
    text: "کارت اعتباری ",
    link: "/s/yilbasi-hediyeleri",
  },
  {
    image: trendyol9.src,
    text: "محصولات جدید",
    link: "/s/yilbasi-hediyeleri",
  },
];

const trendyolBrands: string[] = [
  brand1.src,
  brand2.src,
  brand3.src,
  brand4.src,
  brand5.src,
  brand6.src,
  brand7.src,
  brand8.src,
  brand9.src,
];

export { footerFeatureItems, footerLinks, trendyolCatList, trendyolBrands };
