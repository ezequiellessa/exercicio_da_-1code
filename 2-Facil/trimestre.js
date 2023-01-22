function solution(mes) {
    var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var trimestre=0;
    if (mes >= 1 && mes <= 3) {
        trimestre = "1o trimestre";
    } else if (mes >= 4 && mes <= 6) {
        trimestre = "2o trimestre";
    } else if (mes >= 7 && mes <= 9) {
        trimestre = "3o trimestre";
    } else {
        trimestre = "4o trimestre";
    }
    console.log(meses[mes - 1] + " é o " + trimestre);
}

solution(5); 