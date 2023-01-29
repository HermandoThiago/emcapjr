import emcapBanner from "../../assets/banner-emcap.png";
import { BannerContainer } from "./styles";

export function Banner() {
  return (
    <BannerContainer>
      <img src={emcapBanner} alt="" />
    </BannerContainer>
  );
}
