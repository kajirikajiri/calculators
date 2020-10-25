import AdditionCard from "../molecules/AdditionCard"
import SubtractionCard from "../molecules/SubtractionCard"
import MultiplicationCard from "../molecules/MultiplicationCard"
import IpAddressCard from "../molecules/IpAddressCard"
import IpStackCard from "../molecules/IpStackCard"
import CssToReactStyleCard from "../molecules/CssToReactStyleCard"

// toLowerCase()しているので小文字で記入
export const tagsAndCard = [
  {
    card: AdditionCard,
    tags: ["足し算", "たしざん", "たす"],
  },
  {
    card: SubtractionCard,
    tags: ["引き算", "ひきざん", "ひく"],
  },
  {
    card: MultiplicationCard,
    tags: ["掛け算", "かけざん", "かける"],
  },
  {
    card: IpAddressCard,
    tags: ["ip", "ip"],
  },
  {
    card: IpStackCard,
    tags: ["住所", "ip", "じゅうしょ"],
  },
  {
    card: CssToReactStyleCard,
    tags: ["css", "react", "style", "figma"],
  },
].map((a, i) => {
  return { ...a, id: i }
})
