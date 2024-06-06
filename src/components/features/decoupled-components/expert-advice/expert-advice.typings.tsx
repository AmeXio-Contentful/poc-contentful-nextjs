import {ButtonProps} from "@src/components/features/decoupled-components/button/button.typings";

export interface ExpertProps {
    title: string;
    subtitle: string;
    buttonUrl: string;
    buttonText: string;
    advices: ButtonProps[];
    sys: {
      id
    }
}
