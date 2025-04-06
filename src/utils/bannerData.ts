import { BannerWithDetailsProps } from "../@types/bannerDetails";
import bannerImageOne from "../assets/images/Homepage-Model-3-Desktop-LHD-v2.jpg";
import bannerImageTwo from "../assets/images/Homepage-Model-S-Desktop-v2.jpg";
import bannerImageThree from "../assets/images/Homepage-Model-X-Desktop-v2.jpg";
import bannerImageFour from "../assets/images/Homepage-Model-Y-Desktop-Global.png";
import bannerImageFive from "../assets/images/Homepage-SolarPanels-01-Desktop.jpeg";
import bannerImageSix from "../assets/images/Homepage-SolarRoof-Desktop-Global.jpeg";
import bannerImageSeven from "../assets/images/Homepage-Cybertruck-Desktop.jpg";
import cyberpunkImage from "../assets/images/cyberpunk.svg";
import charginImage from "../assets/images/Homepage-Accessories-Desktop-NA-APAC.jpg";

export const bannerData: BannerWithDetailsProps[] = [
  {
    imageUrl: bannerImageOne,
    title: "Model 3",
    description:
      "This is a description about the title.\n This is the second line",
    color: "black",
    buttonValues: [{ label: "Button 1" }, { label: "Button 2" }],
  },
  {
    imageUrl: bannerImageTwo,
    title: "Sample Title",
    description: "This is a description about the title.",
    buttonValues: [{ label: "Button 1" }, { label: "Button 2" }],
  },
  {
    imageUrl: bannerImageThree,
    title: "Sample Title",
    description: "This is a description about the title.",
    buttonValues: [{ label: "Button 1" }, { label: "Button 2" }],
  },
  {
    imageUrl: bannerImageFour,
    title: "Model 3",
    description: "This is a description about the title.",
    buttonValues: [{ label: "Button 1" }, { label: "Button 2" }],
  },
  {
    imageUrl: bannerImageFive,
    title: "Sample Title",
    description: "This is a description about the title.",
    color: "white",
    buttonValues: [{ label: "Button 1" }, { label: "Button 2" }],
  },
  {
    imageUrl: bannerImageSix,
    title: "Sample Title",
    description: "This is a description about the title.",
    buttonValues: [{ label: "Button 1" }, { label: "Button 2" }],
  },
  {
    imageUrl: bannerImageSeven,
    isImageInPlaceOfTitle: cyberpunkImage,
    title: "Sample Title",
    description: "This is a description about the title.",
    buttonValues: [{ label: "Button 1" }, { label: "Button 2" }],
  },
  {
    imageUrl: charginImage,
    title: "Sample Title",
    description: "This is a description about the title.",
    buttonValues: [{ label: "Shop Now" }],
  },
];
