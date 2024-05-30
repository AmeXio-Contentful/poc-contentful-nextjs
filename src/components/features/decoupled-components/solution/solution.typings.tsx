import {ButtonProps} from "@src/components/features/decoupled-components/button/button.typings";

export interface SolutionProps {
  title: string,
  solutions?: SolutionItem[]
}

export interface SolutionItem {
  image: any,
  title: string,
  description: string,
  button?: ButtonProps
}
