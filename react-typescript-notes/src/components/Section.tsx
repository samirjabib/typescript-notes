import { ReactNode } from "react";
//Legacy code

// export const Section: React.FC<{ title: string }> = ({ children, title }) => {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </div>
//   );
// };

//update

type SectionProps = {
  title?: string; //? make the type optionals
  children: ReactNode; //type children react | u can use React element jsx.node but this is the better option. 
};

export const Section = ({ title ='default props', children }: SectionProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};
