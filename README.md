# Conversor de Moedas

Este projeto é um conversor de moedas simples desenvolvido com **HTML, CSS e JavaScript**. Ele permite converter valores entre diferentes moedas utilizando uma API de taxas de câmbio.

## 🚀 Funcionalidades
- Conversão de valores entre diferentes moedas
- Validação de entrada do usuário
- Alertas estilizados para erros e sucessos
- Requisição assíncrona à API de taxas de câmbio
- Interface responsiva

## 🛠️ Tecnologias Utilizadas
- **HTML**: Estrutura do projeto
- **CSS**: Estilização e responsividade
- **JavaScript**: Manipulação do DOM e lógica de conversão
- **Fetch API**: Requisições assíncronas para obter taxas de câmbio

## 📌 Como Funciona
1. O usuário insere o valor a ser convertido
2. Escolhe a moeda de origem e a moeda de destino
3. Clica no botão "Converter"
4. O sistema valida a entrada e faz uma requisição à API para obter a taxa de câmbio
5. O resultado é exibido na tela

## 🔧 Instalação e Uso
1. Clone este repositório:
   ```sh
   git clone https://github.com/lucasferreiradev0/CONVERTER.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd CONVERTER
   ```
3. Abra o arquivo `index.html` em um navegador

## 📡 API Utilizada
Este projeto utiliza a API **ExchangeRate-API** para obter as taxas de câmbio:
```js
async function getExchangeRate(to, from) {
    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erro ao buscar taxa de câmbio');
    const data = await response.json();
    return data.rates[to];
}
```

## ⚠️ Validações Implementadas
- O usuário deve inserir um valor numérico maior que zero
- O usuário deve selecionar moedas diferentes para conversão
- Caso a API retorne erro, uma mensagem será exibida

## 🖥️ Exemplo de Uso
```
Valor inserido: 10
De: USD
Para: BRL
Resultado: 50.32 BRL
```

## 📜 Licença
Este projeto está licenciado sob a **MIT License**. Sinta-se à vontade para usá-lo e modificá-lo! 🎉

## 📌 Autor
Desenvolvido por **[Lucas Ferreira](https://github.com/LucasFerreiraDev1)**.

