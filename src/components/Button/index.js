import React from "react";
import { Button as ContainerButton} from "./styles";

// ...propos tudo que tiver aqui, fica dentro do componente
function Button ({children, ...propos}){

    return <ContainerButton{...propos}>{children}</ContainerButton>
}

export default Button;