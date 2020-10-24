import AdditionCard from "../molecules/AdditionCard"
import SubtractionCard from "../molecules/SubtractionCard"
import MultiplicationCard from "../molecules/MultiplicationCard"
import IpAddressCard from "../molecules/IpAddressCard"

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
    tags: ["IP", "ip"],
  },
]
