interface companyInfoTypes {
  id: number;
  value: number;
  desc: string;
}
const companyInfo: companyInfoTypes[] = [
  {
    id: 1,
    value: 26_000_000,
    desc: "active buyers globally",
  },
  {
    id: 2,
    value: 400_000,
    desc: "product inquiries daily",
  },
  {
    id: 3,
    value: 200,
    desc: "countries and regions represented",
  },
];

export default companyInfo;
