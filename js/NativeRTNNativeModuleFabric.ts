//É importante que esse arquivo tenha o nome "Native" na frente, que é o padrão buscado pelo codeGen

import {TurboModule, TurboModuleRegistry} from 'react-native';

//TurboModule é uma interface do React native
//É nessa interface que será definido o que queremos criar do pacote
//E o codeGen fará o trabalho da criação
export interface Spec extends TurboModule {
  printMessage: () => void;
}

//TurboModuleRegistry é de fato quem irá registrar esse pacote para utilização
//No metodo get define qual é a tipagem e passa o nome do pacote
//E no final force a tipagem de retorno do get usando o as Spec
export default TurboModuleRegistry.get<Spec>('RTNNativeModuleFabric') as Spec;

//E será no package.json que será definido a configuração do CodeGen para ler essa especificação
