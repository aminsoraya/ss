type TimesWork = {
  sat?: string;
  sun?: string;
  mon?: string;
  tue?: string;
  wed?: string;
  thu?: string;
  fri?: string;
};

export type Footer = {
  email: string;
  phone: string;
  timesWork: TimesWork;
  appsDownload: string[];
  social: string[];
  about:string
};
