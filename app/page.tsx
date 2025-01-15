import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import SubHeader from "@/components/layout/subHeader/subHeader";
import { Meta } from "@/types";
import { Header as HeaderType } from "@/types/header";
import { Fragment } from "react";

export default async function Maltina() {
  const initialData = await fetch(
    process.env.NEXT_PUBLIC_META_URL?.toString()!,
    {
      next: {
        revalidate: 0,
      },
    }
  ).then((res) => res.json());

  let parseMetaData: Meta | undefined = undefined;

  const { headers, subHeaders, footers } = initialData as Meta;
  parseMetaData = {
    headers,
    subHeaders,
    footers,
  };

  return (
    <Fragment>
      <Header services={(headers as HeaderType).services} />
      <SubHeader subHeaders={subHeaders} />
      <Footer footers={footers} />
    </Fragment>
  );
}
