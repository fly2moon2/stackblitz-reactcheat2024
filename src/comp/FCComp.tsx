import { FC } from 'react';

export const FCComp: FC<{message:string}>=({message})=>{
  return (<div>{message}</div>);
};

/*export const FCComp: FC<{message:string}>=({message})=>(
  <div>{message}</div>
);*/