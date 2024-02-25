import React from 'react';
import { FC } from 'react';

/*
export const aComp: React.FC = () => {  
  return <div>
      <h1>Hello !</h1>
      <p>Start editing to see some magic happen :)</p>      
    </div>
};
*/

 
/*
export const aComp: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return <button>{children}</button>;
};
*/

/*export const aComp: React.FC = () => {
  return 123;
};*/

/*
export const aComp = (props: { name: string }) => {
  return <div>{props.name}</div>;
};
*/

interface Props {
  name: string;
}

export const AComp: React.FC<Props> = ({ name }) => {
  return <div>{name}</div>;
};