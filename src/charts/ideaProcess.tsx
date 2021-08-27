import React from "react";
import Mermaid from "../theme/mermaid";

interface IProps {}

const IdeaProcess: React.FC<IProps> = (props) => {
  return (
    <React.Fragment>
      <Mermaid
        chart={`graph TD
    A[Idee erstellen oder überarbeiten] --> B[Ideenkoordinator auswählen];
    B --> C[Idee abschicken];
    C --> D{Annahme durch Koordinator?};
    D -- Ja --> E[Bearbeitung durch Manager / Owner];
    D -- Nein --> A;
    E --> F{Optionale Gutachtenphase};
    F -- Gutachten angefordert --> F2[Warten auf Reaktion der Gutachter];
    F2 --> G;
    F -- Keine Gutachten --> G[Abschluss der Gutachtenphase];
    G --> H[Umsetzungsphase];
    H --> I[Abschluss der Idee];`}
      />
    </React.Fragment>
  );
};
export default IdeaProcess;
