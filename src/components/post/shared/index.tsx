import { ThemeVariation } from '@common/enum';

export enum PostInfo {
  User,
  Date,
  Comment,
}
export interface PostProps {
  hideCover?: boolean;
  hideContent?: boolean;
  className?: string;
  theme?: ThemeVariation;
  hideButton?: boolean;
  hideDescription?: boolean;
  hideInfos?: boolean;
  infos?: PostInfo[];
}
