interface ButtonData {
  label: String;
}

export interface BannerWithDetailsProps {
  imageUrl: String;
  isImageInPlaceOfTitle?: string;
  title: String;
  description: String;
  color?: String;
  buttonValues: ButtonData[];
}
