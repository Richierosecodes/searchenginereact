import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchEngine from "./SearchEngine";

export default function App () {
  return(
    <StrictMode>
    <h1>Search Engine App</h1>
    <SearchEngine />
    <small>This project was coded by <a href="https://github.com/Richierosecodes?tab=repositories">Rose Akintobi</a> and open-sourced on <a href="https://r.search.yahoo.com/_ylt=AwrijcJdxSJlidgyiS9XNyoA;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZANTWUMyNjA3OVRfMQRzZWMDc3I-/RV=2/RE=1696806365/RO=10/RU=https%3a%2f%2fwww.netlify.com%2f/RK=2/RS=nCgDGGJoT5HGOM3Y09jD5Hs1fME-">Netlify</a></small>
  </StrictMode>
  

  )
}

const rootElement = document.getElementById ("root");
const root = createRoot(rootElement);

root.render(
 
  
);


