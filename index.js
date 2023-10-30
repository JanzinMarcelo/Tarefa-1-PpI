import express from 'express';

const appa = express();

const host = '0.0.0.0';
const porta = 3000;

function PaginaP(requisicao, resposta){
    resposta.send(`<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página Principal</title>
    </head>
    <body>
        <h1 style="text-align: center; font-family: Verdana;">Tabuada de 1 a 10</h1>
    </body>
    </html>
    `);
    resposta.end();
}

function PaginaT(requisicao, resposta){
    try{
        const numero = Number(requisicao.query.num);
        let respostaT = `<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tabuada de 1 a 10</title>
        </head>
        <body>
            <h1 style="text-align: center; font-family: Verdana;">Tabuada do ${numero}</h1>
            <ul style="text-align: center; font-family: Verdana; list-style: none">
        `;
        for (let i=0; i<=10; i++){
            const linha = `<li>${numero} x ${i} = ${numero*i}</li>`;   
            respostaT += linha;
        }
        respostaT += `
        </ul>
        </body>
        </html>
        `;
        resposta.end(respostaT);
    } catch(erro){
        resposta.end(`<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Erro</title>
        </head>
        <body>
            <h1 style="text-align: center; font-family: Verdana;">Erro na requesição.</h1>
            <p style="text-align: center; font-family: Verdana;">${erro.message}</p>
        </body>
        </html>
        `);
        return;
    }
}

appa.get('/', PaginaP);
appa.get('/tabuada', PaginaT);

appa.listen(porta, host, () => {
    console.log(`Servidor executando em http://${host}:${porta}.`)
});