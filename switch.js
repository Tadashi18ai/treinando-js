switch(opção) {
    case 1 :
        document.write("Seu Saldo é" + saldo);
        break;
    case 2:
        document.write("Adicionado" + x + "reais");
        conta += x ;
        break;
    case 3 :
        document.write("Saque: " + x + "reias");
        conta -x ;
        break;
    default :
        document.write("realizando o iogout");
}