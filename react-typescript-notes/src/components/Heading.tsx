import { ReactElement } from "react";

type HeadingProps = { title: string }; //Declare type for props

export const Heading = ({ title }: HeadingProps) : ReactElement => { //the intelicense tell us over the type for element when we do hover over this
  return <div>{title}</div>;
};
